
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-otica-blue">Ótica Pública</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-otica-blue transition-colors">
            Home
          </Link>
          <Link to="#sobre" className="text-gray-700 hover:text-otica-blue transition-colors">
            Sobre
          </Link>
          <Link to="#contato" className="text-gray-700 hover:text-otica-blue transition-colors">
            Contato
          </Link>
          <Link to="/login">
            <Button variant="outline" className="ml-4">
              Login Admin
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-otica-blue transition-colors py-2" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="#sobre" className="text-gray-700 hover:text-otica-blue transition-colors py-2" onClick={toggleMenu}>
              Sobre
            </Link>
            <Link to="#contato" className="text-gray-700 hover:text-otica-blue transition-colors py-2" onClick={toggleMenu}>
              Contato
            </Link>
            <Link to="/login" onClick={toggleMenu}>
              <Button variant="outline" className="w-full">
                Login Admin
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
