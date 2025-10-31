import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const Dados = () => {
  // Dados baseados nas imagens fornecidas
  const idadeData = [
    { name: "4 a 5 anos", value: 394479, color: "hsl(var(--chart-2))" },
    { name: "6 a 10 anos", value: 22702, color: "hsl(var(--chart-1))" },
    { name: "11 a 14 anos", value: 59780, color: "hsl(var(--chart-3))" },
    { name: "15 a 17 anos", value: 625531, color: "hsl(var(--chart-4))" }
  ];

  const situacaoData = [
    { faixa: "Até 20%", escolar: 11.8, atraso: 35.6, frequenta: 54.6 },
    { faixa: "Mais de 20% até 40%", escolar: 8.0, atraso: 33.3, frequenta: 69.5 },
    { faixa: "Mais de 40% até 60%", escolar: 7.0, atraso: 30.1, frequenta: 70.0 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Dados sobre Evasão Escolar</h1>
          <p className="text-lg text-muted-foreground">
            Análise estatística baseada em dados do Brasil, 2019
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>População de 4 a 17 anos fora da escola</CardTitle>
              <CardDescription>Brasil, 2019 - Total: 1.102.492 jovens</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={idadeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {idadeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => value.toLocaleString('pt-BR')} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                A maior concentração de evasão está na faixa de 15 a 17 anos (56,7%)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Situação escolar por faixa de rendimento</CardTitle>
              <CardDescription>Jovens entre 15 e 17 anos (%) - Brasil, 2017</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={situacaoData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="faixa" angle={-15} textAnchor="end" height={80} fontSize={12} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="escolar" name="Evadiu escolar" fill="hsl(var(--chart-3))" />
                  <Bar dataKey="atraso" name="Atraso escolar" fill="hsl(var(--chart-2))" />
                  <Bar dataKey="frequenta" name="Frequenta série esperada" fill="hsl(var(--chart-1))" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                A evasão é maior entre jovens de menor renda
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Principais Causas da Evasão</CardTitle>
            <CardDescription>Fatores que contribuem para o abandono escolar</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-destructive">Desigualdade Social</h3>
                <p className="text-sm text-muted-foreground">
                  Famílias de baixa renda têm maior taxa de evasão devido à necessidade de trabalho precoce.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-secondary">Baixo Aprendizado</h3>
                <p className="text-sm text-muted-foreground">
                  Dificuldades no acompanhamento das aulas levam à desmotivação e abandono.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-primary">Falta de Orientação</h3>
                <p className="text-sm text-muted-foreground">
                  Ausência de suporte sobre carreiras e importância da educação para o futuro.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dados;
