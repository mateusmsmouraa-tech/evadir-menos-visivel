import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { AlertTriangle, BarChart3, BookOpen, TrendingDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Evasão Escolar no Brasil</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Uma análise sobre o abandono escolar e suas consequências para a sociedade brasileira
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/dados">
              <Button size="lg" variant="secondary">
                Ver Dados
              </Button>
            </Link>
            <Link to="/sobre">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
                Saiba Mais
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            O que é Evasão Escolar?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-6">
            A evasão escolar representa o abandono da escola antes da conclusão de uma etapa de ensino, 
            sendo um dos principais desafios da educação brasileira. Este fenômeno afeta principalmente 
            jovens entre 15 e 17 anos e está diretamente relacionado a fatores socioeconômicos.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Fora da Escola</CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">1,1 milhão</div>
              <p className="text-xs text-muted-foreground">Crianças e jovens (4-17 anos)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Faixa Mais Afetada</CardTitle>
              <TrendingDown className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">15-17 anos</div>
              <p className="text-xs text-muted-foreground">56,7% do total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Impacto Social</CardTitle>
              <BarChart3 className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">Alto</div>
              <p className="text-xs text-muted-foreground">Desigualdade amplificada</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Relação com Renda</CardTitle>
              <BookOpen className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">Direta</div>
              <p className="text-xs text-muted-foreground">Menor renda, maior evasão</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Causes Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Principais Causas da Evasão Escolar
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-destructive">Distorção Idade-Série</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  O atraso escolar, caracterizado pela defasagem entre idade e série esperada, 
                  é um dos principais fatores de desmotivação dos estudantes, levando ao abandono.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-secondary">Baixo Aprendizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dificuldades em acompanhar os conteúdos escolares e a falta de suporte pedagógico 
                  adequado contribuem significativamente para o desinteresse dos alunos.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Desigualdade Socioeconômica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Famílias de baixa renda frequentemente enfrentam a necessidade de inserir jovens 
                  no mercado de trabalho precocemente, comprometendo a continuidade dos estudos.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-accent">Falta de Orientação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A ausência de orientação vocacional e desconhecimento sobre as possibilidades 
                  de carreira fazem com que muitos jovens não vejam sentido em continuar estudando.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-destructive">Baixo Engajamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A falta de conexão entre os conteúdos escolares e a realidade dos alunos, 
                  aliada a metodologias pouco atrativas, reduz o interesse pelos estudos.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-secondary">Baixa Qualidade do Ensino</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Escolas com infraestrutura precária, professores sobrecarregados e falta de 
                  recursos pedagógicos contribuem para a baixa qualidade da educação oferecida.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Combate à Evasão e Abandono Escolar
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg mb-6">
              A evasão escolar é uma tragédia silenciosa que amplifica desigualdades sociais 
              e impacta a economia brasileira. Segundo pesquisa da Federação das Indústrias do 
              Estado do Rio de Janeiro (Firjan-SESI), o problema requer ações coordenadas entre 
              governo, escolas e sociedade civil.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/dados">
                <Button size="lg" variant="secondary">
                  Explore os Dados
                </Button>
              </Link>
              <Link to="/sobre">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white">
                  Entenda Melhor
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
