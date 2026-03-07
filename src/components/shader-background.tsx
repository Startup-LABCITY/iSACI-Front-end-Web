"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function ShaderBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { resolvedTheme } = useTheme()

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const gl = canvas.getContext("webgl", { alpha: false, premultipliedAlpha: false })
        if (!gl) return

        const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `

        // Realistic Amazon Aerial View Shader
        const fragmentShaderSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform float u_isDark;
      
      // Biological Color Palettes
      uniform vec3 u_forestD;
      uniform vec3 u_forestL;
      uniform vec3 u_waterD;
      uniform vec3 u_waterL;
      uniform vec3 u_sand;

      // Hash for noise
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      vec2 hash2(vec2 p) {
        return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453);
      }

      // Value Noise
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
      }

      // FBM
      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p *= 2.0;
          a *= 0.5;
        }
        return v;
      }

      // Voronoi for Tree Canopy
      float voronoi(vec2 x) {
        vec2 n = floor(x);
        vec2 f = fract(x);
        float m = 8.0;
        for (int j = -1; j <= 1; j++) {
          for (int i = -1; i <= 1; i++) {
            vec2 g = vec2(float(i), float(j));
            vec2 o = hash2(n + g);
            vec2 r = g + o - f;
            float d = dot(r, r);
            if (d < m) m = d;
          }
        }
        return sqrt(m);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        float aspect = u_resolution.x / u_resolution.y;
        vec2 st = uv;
        st.x *= aspect;

        float t = u_time * 0.02;

        // 1. Domain Warping for the River Path
        // We use domain warping to create organic, meandering curves that look like natural geography
        vec2 q = vec2(fbm(st + t), fbm(st + vec2(1.7, 9.2) - t * 0.5));
        vec2 r = vec2(fbm(st + 4.0 * q + vec2(8.3, 2.8) + t), fbm(st + 4.0 * q + vec2(2.1, 1.4) - t));
        float warping = fbm(st + 4.0 * r);

        // 2. Define the River Path (Vast Meanders)
        // High-level sin waves + warping displacement
        float riverPath = aspect * 0.5 + sin(st.y * 1.2 - t) * 0.4 + warping * 0.2;
        float distToRiver = abs(st.x - riverPath);
        
        // Organic width variation
        float riverWidth = 0.3 + warping * 0.1;
        
        // Masks
        float riverMask = 1.0 - smoothstep(riverWidth - 0.03, riverWidth + 0.02, distToRiver);
        // Banks (Silty/Sandy edge)
        float bankMask = smoothstep(riverWidth + 0.05, riverWidth - 0.01, distToRiver) - riverMask;

        // 3. Forest Canopy (Voronoi + FBM)
        // Simulate individual tree crowns and density variation
        float forestDensity = fbm(st * 3.0);
        float treeCrowns = 1.0 - voronoi(st * 40.0 + warping * 5.0);
        float canopyDetail = mix(forestDensity, treeCrowns, 0.7);
        vec3 forestColor = mix(u_forestD, u_forestL, canopyDetail);

        // 4. Water Texture (Flow & Ripples)
        vec2 flowCoords = vec2(st.x * 4.0, st.y * 15.0 - t * 15.0);
        float waterNoise = fbm(flowCoords + warping * 2.0);
        vec3 waterColor = mix(u_waterD, u_waterL, waterNoise);
        
        // Add subtle sediment tint (Amazon "White Water" look)
        waterColor = mix(waterColor, vec3(0.6, 0.5, 0.3), 0.15 * (1.0 - u_isDark));

        // 5. Final Composition
        vec3 color = forestColor;
        color = mix(color, u_sand, bankMask * 0.7);
        color = mix(color, waterColor, riverMask);

        // 6. Atmospheric Shadowing (Gradient fade and vignette)
        float vignette = 1.0 - smoothstep(0.4, 1.8, length(uv - 0.5));
        color *= vignette;
        
        // Subtle center brightening for Light Mode legibility
        if (u_isDark < 0.5) {
          color = mix(color, vec3(0.98, 1.0, 0.98), 0.1 * (1.0 - vignette));
        }

        gl_FragColor = vec4(color, 1.0);
      }
    `

        function compileShader(type: number, source: string) {
            if (!gl) return null
            const shader = gl.createShader(type)
            if (!shader) return null
            gl.shaderSource(shader, source)
            gl.compileShader(shader)
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error("Shader compile error:", gl.getShaderInfoLog(shader))
                gl.deleteShader(shader)
                return null
            }
            return shader
        }

        const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource)
        const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource)
        if (!vertexShader || !fragmentShader) return

        const program = gl.createProgram()
        if (!program) return
        gl.attachShader(program, vertexShader)
        gl.attachShader(program, fragmentShader)
        gl.linkProgram(program)

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return

        gl.useProgram(program)

        const positionBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0]),
            gl.STATIC_DRAW
        )

        const positionLocation = gl.getAttribLocation(program, "position")
        gl.enableVertexAttribArray(positionLocation)
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

        const locRes = gl.getUniformLocation(program, "u_resolution")
        const locTime = gl.getUniformLocation(program, "u_time")
        const locIsDark = gl.getUniformLocation(program, "u_isDark")
        const locFD = gl.getUniformLocation(program, "u_forestD")
        const locFL = gl.getUniformLocation(program, "u_forestL")
        const locWD = gl.getUniformLocation(program, "u_waterD")
        const locWL = gl.getUniformLocation(program, "u_waterL")
        const locSand = gl.getUniformLocation(program, "u_sand")

        const resizeCanvas = () => {
            const parent = canvas.parentElement
            if (parent) {
                canvas.width = parent.clientWidth
                canvas.height = parent.clientHeight
            } else {
                canvas.width = window.innerWidth
                canvas.height = window.innerHeight
            }
            gl.viewport(0, 0, canvas.width, canvas.height)
            gl.uniform2f(locRes, canvas.width, canvas.height)
        }

        window.addEventListener("resize", resizeCanvas)
        resizeCanvas()

        const isDark = resolvedTheme === "dark"
        gl.uniform1f(locIsDark, isDark ? 1.0 : 0.0)

        // Bio-realistic Palettes

        // Light Mode: Aerial Day
        const forestDL = [0.12, 0.28, 0.15] // Deep forest shadows
        const forestLL = [0.35, 0.55, 0.25] // Sunlit canopy emerald
        const waterDL = [0.15, 0.35, 0.40]  // Turbid blue water base
        const waterLL = [0.45, 0.65, 0.70]  // Sky reflections on river
        const sandL = [0.65, 0.55, 0.40]    // River clay/mud banks

        // Dark Mode: Satellite Night / Iridescent Night
        const forestDD = [0.01, 0.04, 0.02]
        const forestLD = [0.04, 0.15, 0.08]
        const waterDD = [0.01, 0.10, 0.15]
        const waterLD = [0.05, 0.25, 0.30]
        const sandD = [0.10, 0.12, 0.08]

        if (isDark) {
            gl.uniform3fv(locFD, forestDD)
            gl.uniform3fv(locFL, forestLD)
            gl.uniform3fv(locWD, waterDD)
            gl.uniform3fv(locWL, waterLD)
            gl.uniform3fv(locSand, sandD)
        } else {
            gl.uniform3fv(locFD, forestDL)
            gl.uniform3fv(locFL, forestLL)
            gl.uniform3fv(locWD, waterDL)
            gl.uniform3fv(locWL, waterLL)
            gl.uniform3fv(locSand, sandL)
        }

        let animationFrameId: number
        const startTime = performance.now()

        const render = () => {
            const time = (performance.now() - startTime) / 1000
            gl.uniform1f(locTime, time)
            gl.drawArrays(gl.TRIANGLES, 0, 6)
            animationFrameId = requestAnimationFrame(render)
        }
        render()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
            cancelAnimationFrame(animationFrameId)
            gl.deleteProgram(program)
        }
    }, [resolvedTheme])

    return (
        <div className="absolute inset-0 w-full h-full -z-10 bg-background overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full object-cover touch-none pointer-events-none opacity-100"
            />
        </div>
    )
}
