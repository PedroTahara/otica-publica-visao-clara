
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

export interface IndicadorGeral {
  id: string;
  nome: string;
  valor: number;
  atualizado_em: string;
}

export interface IndicadorMensal {
  id: string;
  mes: string;
  oculos_produzidos: number;
  oculos_entregues: number;
  oculos_pendentes: number;
  pacientes_atendidos: number;
  lentes_simples: number;
  lentes_multifocal: number;
  created_at: string;
  atualizado_em: string;
}

export function useDashboardData() {
  const [indicadoresGerais, setIndicadoresGerais] = useState<IndicadorGeral[]>([]);
  const [indicadoresMensais, setIndicadoresMensais] = useState<IndicadorMensal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Buscar indicadores gerais
        const { data: gerais, error: geraisError } = await supabase
          .from('indicadores_gerais')
          .select('*');
        
        if (geraisError) throw geraisError;

        // Buscar indicadores mensais
        const { data: mensais, error: mensaisError } = await supabase
          .from('indicadores_mensais')
          .select('*')
          .order('mes', { ascending: true });
        
        if (mensaisError) throw mensaisError;
        
        setIndicadoresGerais(gerais);
        setIndicadoresMensais(mensais);
        setError(null);

      } catch (error: any) {
        console.error('Erro ao buscar dados:', error);
        setError('Falha ao carregar dados do dashboard');
        toast({
          title: "Erro ao carregar dados",
          description: error.message || "Falha ao carregar dados do dashboard",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toast]);

  // Função auxiliar para obter valor específico dos indicadores gerais
  const getIndicadorGeral = (nome: string): number => {
    const indicador = indicadoresGerais.find(item => item.nome === nome);
    return indicador?.valor || 0;
  };

  // Cálculo da proporção média (óculos por paciente)
  const calcularProporcaoMedia = (): number => {
    if (indicadoresMensais.length === 0) return 0;
    
    const totalOculos = indicadoresMensais.reduce((sum, item) => sum + item.oculos_produzidos, 0);
    const totalPacientes = indicadoresMensais.reduce((sum, item) => sum + item.pacientes_atendidos, 0);
    
    return totalPacientes ? parseFloat((totalOculos / totalPacientes).toFixed(2)) : 0;
  };

  return {
    indicadoresGerais,
    indicadoresMensais,
    getIndicadorGeral,
    calcularProporcaoMedia,
    loading,
    error
  };
}
