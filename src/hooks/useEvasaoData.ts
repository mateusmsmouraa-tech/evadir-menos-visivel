import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface EvasaoPorIdade {
  id: string;
  faixa_etaria: string;
  quantidade: number;
  percentual: number;
  ano: number;
}

export interface SituacaoPorRenda {
  id: string;
  faixa_renda: string;
  evadiu_escolar: number;
  atraso_escolar: number;
  frequenta_serie_esperada: number;
  ano: number;
}

export interface CausasEvasao {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
  ordem: number;
}

export interface EvasaoData {
  evasaoPorIdade: EvasaoPorIdade[];
  situacaoPorRenda: SituacaoPorRenda[];
  causas: CausasEvasao[];
  success: boolean;
}

export const useEvasaoData = () => {
  return useQuery({
    queryKey: ['evasao-data'],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke<EvasaoData>('get-evasao-dados');
      
      if (error) {
        console.error('Erro ao buscar dados:', error);
        throw error;
      }
      
      if (!data) {
        throw new Error('Nenhum dado retornado');
      }
      
      return data;
    },
  });
};
