import { Servico, ServicoSchema } from "@/models/schemas";

// Mock de dados (em produção, viria de uma API segura)
const mockServicos: Omit<Servico, "id">[] = [
  { titulo: "2ª Via do IPTU", descricao: "Emita guias, consulte débitos e imóveis.", icone: "FileText", url: "/iptu", categoria: "CIDADAO" },
  { titulo: "Nota Fiscal (NFS-e)", descricao: "Emissão, cancelamento e consulta de notas.", icone: "Building2", url: "/nfse", categoria: "EMPRESA" },
  { titulo: "Iluminação Pública", descricao: "Solicite reparos em postes e lâmpadas.", icone: "Lightbulb", url: "/iluminacao", categoria: "CIDADAO" },
  { titulo: "Agendamento de Saúde", descricao: "Marque consultas na rede municipal de Ubá.", icone: "Heart", url: "/saude", categoria: "CIDADAO" },
  { titulo: "Licitações e Contratos", descricao: "Acompanhe editais, resultados e contratos.", icone: "Scale", url: "/licitacoes", categoria: "EMPRESA" },
  { titulo: "Ouvidoria Geral", descricao: "Abra protocolos, faça denúncias ou elogios.", icone: "Megaphone", url: "/ouvidoria", categoria: "CIDADAO" },
];

export async function getServicosDestaque(): Promise<Servico[]> {
  // Simula um pequeno delay de rede
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Valida e sanitiza os dados antes de enviar para a View (Segurança)
  return mockServicos.map((s, index) => 
    ServicoSchema.parse({ ...s, id: crypto.randomUUID() })
  );
}