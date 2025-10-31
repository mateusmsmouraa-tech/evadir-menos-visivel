import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, TrendingDown, Users, BookOpen } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Sobre a Evasão Escolar</h1>
          <p className="text-lg text-muted-foreground">
            Compreendendo o problema e suas consequências para a sociedade
          </p>
        </div>

        <div className="grid gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-destructive" />
                O que é Evasão Escolar?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                A evasão escolar é o abandono da escola antes da conclusão de uma etapa de ensino. 
                No Brasil, esse fenômeno afeta principalmente jovens do Ensino Médio, entre 15 e 17 anos, 
                e está intimamente ligado a fatores socioeconômicos.
              </p>
              <p className="text-muted-foreground">
                Segundo dados do IBGE (2019), mais de 1,1 milhão de crianças e adolescentes entre 4 e 17 anos 
                estavam fora da escola no Brasil, com a maior concentração na faixa etária de 15 a 17 anos.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingDown className="h-6 w-6 text-destructive" />
                  Impacto Econômico
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A evasão escolar gera consequências econômicas graves:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Redução do potencial produtivo do país</li>
                  <li>Menor qualificação profissional</li>
                  <li>Perpetuação do ciclo de pobreza</li>
                  <li>Aumento do desemprego juvenil</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-secondary" />
                  Impacto Social
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  As consequências sociais são profundas:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Aumento da desigualdade social</li>
                  <li>Maior vulnerabilidade à violência</li>
                  <li>Dificuldade de mobilidade social</li>
                  <li>Redução da cidadania ativa</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Principais Causas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">1. Distorção idade-série</h3>
                  <p className="text-muted-foreground">
                    Quando o aluno está atrasado em relação à série esperada para sua idade, 
                    a desmotivação aumenta e a probabilidade de abandono cresce significativamente.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">2. Baixo aprendizado</h3>
                  <p className="text-muted-foreground">
                    A dificuldade em acompanhar os conteúdos e a falta de suporte pedagógico adequado 
                    levam ao desinteresse e, eventualmente, ao abandono escolar.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">3. Desigualdade social e econômica</h3>
                  <p className="text-muted-foreground">
                    Famílias de baixa renda frequentemente precisam que seus filhos trabalhem para 
                    complementar a renda familiar, levando ao abandono dos estudos.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">4. Falta de orientação sobre carreiras</h3>
                  <p className="text-muted-foreground">
                    Muitos jovens não veem conexão entre os estudos e seu futuro profissional, 
                    pois não recebem orientação adequada sobre possibilidades de carreira.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">5. Baixo engajamento com os estudos</h3>
                  <p className="text-muted-foreground">
                    A falta de metodologias que tornem o aprendizado mais atrativo e relevante 
                    contribui para o desinteresse dos alunos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>Como Combater a Evasão Escolar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                A evasão escolar é uma tragédia silenciosa que amplifica desigualdades sociais 
                e impacta a economia brasileira. Para combatê-la, são necessárias ações coordenadas:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Políticas de apoio financeiro para famílias vulneráveis</li>
                <li>Programas de reforço escolar e tutoria</li>
                <li>Orientação vocacional e profissional</li>
                <li>Melhoria da qualidade do ensino</li>
                <li>Redução das taxas de reprovação</li>
                <li>Aproximação da escola com a realidade dos alunos</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Sobre;
