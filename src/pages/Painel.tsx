
import { useEffect } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardCard from "@/components/dashboard/DashboardCard";
import GraficosSection from "@/components/dashboard/GraficosSection";
import { useDashboardData } from "@/hooks/useDashboardData";
import { Book, Users, ChartPie } from "lucide-react";

export default function Painel() {
  const { indicadoresGerais, getIndicadorGeral, loading, error } = useDashboardData();

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 md:px-6 py-8">
        <div className="space-y-8">
          {/* Seção de Indicadores Gerais */}
          <section>
            <h2 className="text-xl font-bold mb-4">Indicadores Gerais</h2>
            
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-32 bg-gray-200 animate-pulse rounded-lg"></div>
                ))}
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
                {error}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <DashboardCard
                  title="Total de Óculos Entregues"
                  value={getIndicadorGeral('total_oculos_entregues')}
                  icon={Book}
                  description="Óculos entregues aos pacientes"
                />
                
                <DashboardCard
                  title="Total de Pacientes Atendidos"
                  value={getIndicadorGeral('total_pacientes_atendidos')}
                  icon={Users}
                  description="Pacientes que participaram do programa"
                />
                
                <DashboardCard
                  title="Total de Óculos Produzidos"
                  value={getIndicadorGeral('total_oculos_produzidos')}
                  icon={ChartPie}
                  description="Óculos produzidos pelo programa"
                />
              </div>
            )}
          </section>
          
          {/* Seção de Gráficos */}
          <section>
            <h2 className="text-xl font-bold mb-4">Análise Mensal</h2>
            <GraficosSection />
          </section>
        </div>
      </main>
    </div>
  );
}
