-- Tabela para dados de evasão por faixa etária
CREATE TABLE public.evasao_por_idade (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  faixa_etaria TEXT NOT NULL,
  quantidade INTEGER NOT NULL,
  percentual DECIMAL(5,2) NOT NULL,
  ano INTEGER NOT NULL DEFAULT 2019,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela para situação escolar por renda
CREATE TABLE public.situacao_por_renda (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  faixa_renda TEXT NOT NULL,
  evadiu_escolar DECIMAL(5,2) NOT NULL,
  atraso_escolar DECIMAL(5,2) NOT NULL,
  frequenta_serie_esperada DECIMAL(5,2) NOT NULL,
  ano INTEGER NOT NULL DEFAULT 2017,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela para causas da evasão
CREATE TABLE public.causas_evasao (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo TEXT NOT NULL,
  descricao TEXT NOT NULL,
  categoria TEXT NOT NULL,
  ordem INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE public.evasao_por_idade ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.situacao_por_renda ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.causas_evasao ENABLE ROW LEVEL SECURITY;

-- Políticas de leitura pública (dados estatísticos públicos)
CREATE POLICY "Permitir leitura pública de evasão por idade"
  ON public.evasao_por_idade
  FOR SELECT
  USING (true);

CREATE POLICY "Permitir leitura pública de situação por renda"
  ON public.situacao_por_renda
  FOR SELECT
  USING (true);

CREATE POLICY "Permitir leitura pública de causas"
  ON public.causas_evasao
  FOR SELECT
  USING (true);

-- Índices para melhor performance
CREATE INDEX idx_evasao_ano ON public.evasao_por_idade(ano);
CREATE INDEX idx_situacao_ano ON public.situacao_por_renda(ano);
CREATE INDEX idx_causas_ordem ON public.causas_evasao(ordem);