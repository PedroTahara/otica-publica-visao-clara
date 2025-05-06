
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export default function DashboardHeader() {
  const { signOut, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/login");
    } catch (error) {
      toast({
        title: "Erro ao fazer logout",
        description: "Ocorreu um erro ao tentar sair do sistema.",
        variant: "destructive"
      });
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Painel Administrativo</h1>
          <span className="bg-otica-blue text-white text-xs px-2 py-1 rounded">
            Ótica Pública
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          {user && (
            <div className="text-sm hidden md:block">
              <span className="text-gray-500">Usuário:</span> {user.email}
            </div>
          )}
          
          <Button variant="outline" size="sm" onClick={handleSignOut}>
            Sair
          </Button>
        </div>
      </div>
    </header>
  );
}
