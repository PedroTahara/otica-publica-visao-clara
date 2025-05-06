
import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ChatPlaceholder = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isVisible ? (
        <Button 
          onClick={() => setIsVisible(true)} 
          size="icon" 
          className="h-14 w-14 rounded-full shadow-lg bg-otica-blue hover:bg-otica-blue-dark"
          aria-label="Abrir chat"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col border border-gray-200">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-semibold">Chat de Atendimento</h3>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsVisible(false)}
              aria-label="Fechar chat"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 p-4 flex items-center justify-center bg-gray-50">
            <p className="text-center text-gray-500">
              Espaço reservado para chat com IA.<br />
              Em breve disponível.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPlaceholder;
