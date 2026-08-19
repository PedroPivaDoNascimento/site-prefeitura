"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Cidadão", href: "/cidadao" },
    { label: "Empresa", href: "/empresa" },
    { label: "Servidor", href: "/servidor" },
    { label: "Turista", href: "/turista" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-uba-blue text-white shadow-lg">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-white rounded p-1">
          <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-white rounded-full overflow-hidden border-2 border-uba-red">
            <Image
                src="/assets/Brasao_Uba.jpg" // Caminho relativo à pasta 'public'
                alt="Brasão da Prefeitura Municipal de Ubá"
                fill
                className="object-contain p-1"
                priority // Carrega com prioridade (LCP)
            />
        </div>
          <div className="leading-tight">
            <h1 className="font-bold text-xl md:text-2xl tracking-tight">Prefeitura de Ubá</h1>
            <p className="text-xs md:text-sm text-blue-100 font-medium">Governo Municipal Transparente</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8" aria-label="Navegação principal por perfis">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="text-lg font-semibold hover:text-uba-red transition-colors focus:outline-none focus:underline decoration-2 underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a 
            href="https://sso.acesso.gov.br/" 
            className="bg-uba-red hover:bg-uba-darkRed text-white px-5 py-2.5 rounded-md font-bold text-base flex items-center gap-2 shadow-md transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-uba-red/50"
            aria-label="Acessar serviços com conta Gov.br"
          >
            <span className="bg-white text-uba-blue w-6 h-6 rounded-full flex items-center justify-center text-xs font-black">br</span>
            Entrar com Gov.br
          </a>
          
          <button 
            className="md:hidden p-2 hover:bg-white/10 rounded focus:ring-2 focus:ring-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Abrir menu de navegação"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="md:hidden bg-uba-darkBlue border-t border-blue-800 px-4 py-4 flex flex-col gap-2 shadow-inner" aria-label="Menu mobile">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="block py-3 px-4 text-lg font-semibold hover:bg-white/10 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}