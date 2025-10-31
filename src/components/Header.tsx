import { Link, useLocation } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <GraduationCap className="h-8 w-8" />
            <span>Evasão Escolar</span>
          </Link>
          
          <nav className="flex gap-6">
            <Link 
              to="/" 
              className={`hover:text-secondary transition-colors ${isActive('/') ? 'text-secondary font-semibold' : ''}`}
            >
              Início
            </Link>
            <Link 
              to="/dados" 
              className={`hover:text-secondary transition-colors ${isActive('/dados') ? 'text-secondary font-semibold' : ''}`}
            >
              Dados
            </Link>
            <Link 
              to="/sobre" 
              className={`hover:text-secondary transition-colors ${isActive('/sobre') ? 'text-secondary font-semibold' : ''}`}
            >
              Sobre
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
