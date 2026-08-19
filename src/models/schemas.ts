import { z } from "zod";

export const ServicoSchema = z.object({
  id: z.string().uuid("ID do serviço inválido"),
  titulo: z.string().min(3, "Título muito curto").max(60),
  descricao: z.string().min(10, "Descrição deve ser clara").max(120),
  icone: z.string(),
  
  // CORREÇÃO: Aceita caminhos relativos (ex: "/iptu") ou URLs absolutas
  url: z.string().min(1, "O caminho do serviço é obrigatório"),
  
  categoria: z.enum(["CIDADAO", "EMPRESA", "SERVIDOR", "TURISTA"], {
    errorMap: () => ({ message: "Categoria inválida" }),
  }),
  destaque: z.boolean().default(true),
});

export type Servico = z.infer<typeof ServicoSchema>;