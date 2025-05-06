
import { useDashboardData, IndicadorMensal } from '@/hooks/useDashboardData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  Legend, 
  ResponsiveContainer,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
} from 'recharts';

interface FormatadoIndicadorMensal {
  nome: string;
  oculos_produzidos: number;
  oculos_entregues: number;
  oculos_pendentes: number;
  pacientes_atendidos: number;
  lentes_simples: number;
  lentes_multifocal: number;
}

const formatarData = (data: string): string => {
  const date = new Date(data);
  return date.toLocaleDateString('pt-BR', { month: 'short', year: '2-digit' });
};

const CORES = ['#1eaedb', '#33c3f0', '#0fa0ce', '#4ecdc4', '#64b5f6', '#2196f3'];

export default function GraficosSection() {
  const { indicadoresMensais, calcularProporcaoMedia, loading } = useDashboardData();
  
  // Formatação de dados para os gráficos
  const dadosMensais = indicadoresMensais.map(item => ({
    nome: formatarData(item.mes),
    oculos_produzidos: item.oculos_produzidos,
    oculos_entregues: item.oculos_entregues,
    oculos_pendentes: item.oculos_pendentes,
    pacientes_atendidos: item.pacientes_atendidos,
    lentes_simples: item.lentes_simples,
    lentes_multifocal: item.lentes_multifocal
  }));

  // Calcula o total de lentes para o gráfico de pizza
  const totalLentes = indicadoresMensais.reduce(
    (acc, curr) => {
      acc.simples += curr.lentes_simples;
      acc.multifocal += curr.lentes_multifocal;
      return acc;
    },
    { simples: 0, multifocal: 0 }
  );

  const dadosPizza = [
    { name: 'Visão Simples', value: totalLentes.simples },
    { name: 'Multifocal', value: totalLentes.multifocal }
  ];

  // Proporção média
  const proporcaoMedia = calcularProporcaoMedia();

  if (loading) {
    return (
      <div className="grid gap-6 animate-pulse">
        <div className="h-64 bg-gray-200 rounded-lg"></div>
        <div className="h-64 bg-gray-200 rounded-lg"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Gráfico de Barras: Óculos produzidos por mês */}
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-lg">Óculos produzidos por mês</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dadosMensais}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="nome" />
                  <YAxis />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-2 border rounded shadow-md">
                            <p className="font-medium">{payload[0].payload.nome}</p>
                            <p className="text-otica-blue">
                              Produzidos: {payload[0].value}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar 
                    dataKey="oculos_produzidos" 
                    fill="#1eaedb" 
                    radius={[4, 4, 0, 0]} 
                    name="Óculos produzidos" 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Gráfico de Linha: Pacientes atendidos por mês */}
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-lg">Pacientes atendidos por mês</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dadosMensais}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="nome" />
                  <YAxis />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-2 border rounded shadow-md">
                            <p className="font-medium">{payload[0].payload.nome}</p>
                            <p className="text-otica-blue">
                              Atendidos: {payload[0].value}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="pacientes_atendidos" 
                    stroke="#0fa0ce" 
                    strokeWidth={2} 
                    activeDot={{ r: 8 }} 
                    name="Pacientes atendidos"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Gráfico de Pizza: Lentes simples vs multifocal */}
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-lg">Tipos de lentes</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dadosPizza}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {dadosPizza.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={CORES[index % CORES.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-2 border rounded shadow-md">
                            <p className="font-medium">{payload[0].name}</p>
                            <p>
                              Quantidade: {payload[0].value}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Gráfico de Colunas: Entregues vs Pendentes */}
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-lg">Entregues vs Pendentes</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dadosMensais}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="nome" />
                  <YAxis />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-2 border rounded shadow-md">
                            <p className="font-medium">{payload[0].payload.nome}</p>
                            <p className="text-green-600">
                              Entregues: {payload[0].value}
                            </p>
                            <p className="text-amber-500">
                              Pendentes: {payload[1].value}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Legend />
                  <Bar dataKey="oculos_entregues" name="Entregues" fill="#4caf50" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="oculos_pendentes" name="Pendentes" fill="#ff9800" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Texto de proporção média */}
      <div className="bg-gray-50 p-4 rounded-lg text-center border">
        <p className="text-lg font-medium">
          Proporção média: <span className="text-otica-blue">{proporcaoMedia}</span> óculos por paciente
        </p>
      </div>
    </div>
  );
}
