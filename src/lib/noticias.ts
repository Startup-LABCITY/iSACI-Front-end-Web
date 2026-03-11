export interface NewsItem {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    author: string;
    authorImage?: string;
    date: string;
    readTime: string;
    category: string;
    imagePlaceholder: string;
    thumbnail?: string;
    content: ContentBlock[];
    credits?: string;
}

export type ContentBlock =
    | { type: "paragraph"; text: string }
    | { type: "image"; src: string; caption: string }
    | { type: "heading"; text: string };

export const noticias: NewsItem[] = [
    {
        id: "1",
        slug: "isaci-participa-abertura-workshop-inct-iamazonia",
        title: "iSACI participa de abertura do I Workshop INCT IAmazônia",
        excerpt: "Confira as informações mais recentes sobre participação em eventos, parcerias e projetos apoiados pelo iSACI durante o workshop focado em inteligência artificial na Amazônia.",
        author: "iSACI",
        date: "26 de fev.",
        readTime: "2 min de leitura",
        category: "Institucional",
        imagePlaceholder: "IA",
        thumbnail: "/images/noticias/isaci-participa-abertura-workshop-inct-iamazonia/workshop-hero.png",
        content: [
            {
                type: "image",
                src: "/images/noticias/isaci-participa-abertura-workshop-inct-iamazonia/workshop-hero.png",
                caption: "Presidente do iSACI, Prof. Dr. Claudio Alex da Rocha, conduz mesa-redonda “Captação de recursos: plataformas e hubs” durante o I Workshop INCT IAmazônia."
            },
            {
                type: "paragraph",
                text: "Na manhã desta terça (24), o Instituto Nacional de Ciência e Tecnologia IAmazônia (INCT IAmazônia) deu início ao “I Workshop INCT IAmazônia” no auditório do Parque de Ciência e Tecnologia Guamá (PCT-Guamá). Durante as atividades, o Prof. Dr. Cláudio Alex da Rocha, presidente do iSACI, mediou a mesa-redonda “Captação de recursos: plataformas e hubs”. O evento segue com programação até às 17h do dia 25."
            },
            {
                type: "paragraph",
                text: "Como parte da rede de pesquisa do INCT, o iSACI é responsável pela gestão, suporte operacional e prestação de contas do Instituto. Para o Prof. Dr. Cláudio Alex é importante marcar presença no evento para dialogar com os diversos coordenadores que compõem o IAmazônia e contribuir com as discussões ao longo da programação."
            },
            {
                type: "paragraph",
                text: "Uma das atividades realizadas durante a programação foi a mesa-redonda “Captação de recursos: plataformas e hubs”, que contou com a participação do vice-coordenador do INCT, Prof. Dr. Nandamudi L. Vijaykumar, da membra do comitê gestor, Prof. Dra. Maria Thereza Giraldi, da gerente de inovação da Fundação Guamá, Aline Casemiro, e mediação do Prof. Dr. Cláudio Alex. Foi um momento de esclarecimento sobre as dinâmicas de captação de recursos para produção científica no Brasil e trocas de experiências entre os convidados e o público."
            },
            {
                type: "paragraph",
                text: "“O iSACI apresentou não só como é a sua natureza jurídica, mas também como pode facilitar o processo de captação de recursos por meio da criação de hubs, de conexões entre empresas e instituições públicas. Ou seja, envolver o setor público e a academia na busca de soluções que estejam ao alcance do INCT IAmazônia”, declara o presidente do iSACI."
            },
            {
                type: "image",
                src: "/images/noticias/isaci-participa-abertura-workshop-inct-iamazonia/claudio-interview.png",
                caption: "Entrevista do Prof. Dr. Claudio Alex sobre a participação do iSACI no I Workshop INCT IAmazônia"
            },
            {
                type: "paragraph",
                text: "Após a abertura, o restante da programação ocorre no Centro de Computação de Alto Desempenho e Inteligência Artificial da Universidade Federal do Pará (CCAD-UFPA) até o encerramento no dia 25, às 17h."
            }
        ],
        credits: "Por Felipe Vilhena | Foto: Felipe Vilhena"
    },
    {
        id: "2",
        slug: "nova-parceria-alcoa-bioeconomia-juruti",
        title: "Nova parceria com ALCOA fortalece bioeconomia em Juruti",
        excerpt: "Instituto iSACI assina acordo que prevê a construção de biofábrica voltada para a produção de óleos, manteigas e biojoias com base na flora local.",
        author: "iSACI",
        date: "28 Fev 2024",
        readTime: "3 min de leitura",
        category: "Projetos",
        imagePlaceholder: "PB",
        content: [
            {
                type: "paragraph",
                text: "O Instituto iSACI firmou uma nova parceria estratégica com a ALCOA para impulsionar a bioeconomia na região de Juruti, no Pará..."
            }
        ]
    },
    {
        id: "3",
        slug: "artigo-redes-cell-free-massive-mimo-ieee",
        title: "Artigo sobre redes Cell-Free Massive MIMO é publicado na IEEE",
        excerpt: "Pesquisadores vinculados ao iSACI publicam estudo pioneiro sobre seleção de pontos de acesso em redes de comunicação imersivas centradas no usuário.",
        author: "iSACI",
        date: "15 Fev 2024",
        readTime: "5 min de leitura",
        category: "Pesquisa",
        imagePlaceholder: "MIMO",
        content: [
            {
                type: "paragraph",
                text: "Um estudo desenvolvido por pesquisadores do iSACI foi destaque na prestigiada revista IEEE Transactions on Wireless Communications..."
            }
        ]
    }
];
