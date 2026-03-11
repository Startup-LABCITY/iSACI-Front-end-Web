// src/lib/documents.ts

/**
 * CENTRAL DE DOCUMENTOS iSACI
 * 
 * Este arquivo gerencia a origem de todos os arquivos estáticos (PDFs, Editais, etc).
 * Para mudar a origem dos arquivos (ex: migrar para um CDN ou servidor próprio),
 * basta alterar a variável de ambiente NEXT_PUBLIC_DOCUMENTS_BASE_URL.
 */

const BASE_URL = process.env.NEXT_PUBLIC_DOCUMENTS_BASE_URL || "/documents";

export const DOCUMENTS = {
    TRANSPARENCIA: {
        RELATORIO_2023: `${BASE_URL}/transparencia/Relatorio_Anual_2023.pdf`,
        PRESTACAO_2024_1S: `${BASE_URL}/transparencia/Prestacao_de_Contas_2024_1S.pdf`,
        IMPACTO_SOCIAL: `${BASE_URL}/transparencia/Relatorio_Impacto_Social.pdf`,
    },
    GOVERNANCA: {
        ESTATUTO: `${BASE_URL}/Estatuto_Social.pdf`,
        CODIGO_ETICA: `${BASE_URL}/Codigo_Etica.pdf`,
    }
} as const;
