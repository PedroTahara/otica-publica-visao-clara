import { Mail, Phone, MapPin } from 'lucide-react';
const Footer = () => {
  return <footer id="contato" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ótica Pública</h3>
            <p className="text-gray-400">
              Promovendo acesso à saúde visual e inclusão social para todos os brasileiros.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="/login" className="text-gray-400 hover:text-white transition-colors">
                  Área do Administrador
                </a>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-otica-blue-light mr-3 mt-1" />
                <div>
                  <p className="text-gray-200">Pedro Tahara</p>
                  <p className="text-gray-400">Gestor do Programa</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-otica-blue-light mr-3" />
                <a href="mailto:atendimento@oticapublica.com.br" className="text-gray-400 hover:text-white transition-colors">
                  atendimento@oticapublica.com.br
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-otica-blue-light mr-3" />
                <a href="tel:+5518996364874" className="text-gray-400 hover:text-white transition-colors">(11) 91198-9258</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ótica Pública. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;