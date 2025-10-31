import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface EvasaoPorIdade {
  id: string;
  faixa_etaria: string;
  quantidade: number;
  percentual: number;
  ano: number;
}

interface SituacaoPorRenda {
  id: string;
  faixa_renda: string;
  evadiu_escolar: number;
  atraso_escolar: number;
  frequenta_serie_esperada: number;
  ano: number;
}

interface CausasEvasao {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
  ordem: number;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Iniciando busca de dados de evasão escolar');

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Buscar dados de evasão por idade
    const { data: evasaoIdade, error: evasaoIdadeError } = await supabase
      .from('evasao_por_idade')
      .select('*')
      .order('percentual', { ascending: false });

    if (evasaoIdadeError) {
      console.error('Erro ao buscar evasão por idade:', evasaoIdadeError);
      throw evasaoIdadeError;
    }

    console.log(`Encontrados ${evasaoIdade?.length || 0} registros de evasão por idade`);

    // Buscar dados de situação por renda
    const { data: situacaoRenda, error: situacaoRendaError } = await supabase
      .from('situacao_por_renda')
      .select('*')
      .order('evadiu_escolar', { ascending: false });

    if (situacaoRendaError) {
      console.error('Erro ao buscar situação por renda:', situacaoRendaError);
      throw situacaoRendaError;
    }

    console.log(`Encontrados ${situacaoRenda?.length || 0} registros de situação por renda`);

    // Buscar causas da evasão
    const { data: causas, error: causasError } = await supabase
      .from('causas_evasao')
      .select('*')
      .order('ordem', { ascending: true });

    if (causasError) {
      console.error('Erro ao buscar causas:', causasError);
      throw causasError;
    }

    console.log(`Encontradas ${causas?.length || 0} causas de evasão`);

    // Retornar todos os dados
    const response = {
      evasaoPorIdade: evasaoIdade as EvasaoPorIdade[],
      situacaoPorRenda: situacaoRenda as SituacaoPorRenda[],
      causas: causas as CausasEvasao[],
      success: true
    };

    console.log('Dados retornados com sucesso');

    return new Response(
      JSON.stringify(response),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );

  } catch (error) {
    console.error('Erro na função get-evasao-dados:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Erro ao buscar dados';
    
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        success: false 
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
});
