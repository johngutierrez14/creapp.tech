import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-indigo-700">CREAPP</a>

        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-indigo-600">Inicio</a>
          <a href="#services" className="hover:text-indigo-600">Servicios</a>
          <a href="#about" className="hover:text-indigo-600">Sobre Nosotros</a>
          <a href="#portfolio" className="hover:text-indigo-600">Portafolio</a>
          <a href="#contact" className="hover:text-indigo-600">Contacto</a>
        </div>

        {/* Menú Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Dropdown Mobile */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <a href="#home" className="block py-2 text-gray-700">Inicio</a>
          <a href="#services" className="block py-2 text-gray-700">Servicios</a>
          <a href="#about" className="block py-2 text-gray-700">Sobre Nosotros</a>
          <a href="#portfolio" className="block py-2 text-gray-700">Portafolio</a>
          <a href="#contact" className="block py-2 text-gray-700">Contacto</a>
        </div>
      )}
    </nav>
  );
}
