"use client";
import { useState } from "react";
import { Sun, Moon, Minus, Plus } from "lucide-react";

export function AccessibilityBar() {
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(100);

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle("high-contrast");
  };

  const adjustFont = (delta: number) => {
    const newSize = Math.min(Math.max(fontSize + delta, 80), 150);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  return (
    <div className="bg-uba-darkBlue text-white text-sm py-2 px-4 md:px-8 flex flex-wrap justify-between items-center gap-2 border-b border-blue-800">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleContrast}
          className="flex items-center gap-2 hover:bg-white/10 px-3 py-1 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label={highContrast ? "Desativar alto contraste" : "Ativar alto contraste"}
        >
          {highContrast ? <Sun size={16} /> : <Moon size={16} />}
          <span className="hidden sm:inline">{highContrast ? "Contraste Normal" : "Alto Contraste"}</span>
        </button>
        
        <div className="flex items-center gap-1 border-l border-blue-700 pl-4">
          <span className="hidden sm:inline mr-2">Fonte:</span>
          <button onClick={() => adjustFont(-10)} className="p-1 hover:bg-white/10 rounded focus:ring-2 focus:ring-white" aria-label="Diminuir fonte">
            <Minus size={16} />
          </button>
          <button onClick={() => adjustFont(10)} className="p-1 hover:bg-white/10 rounded focus:ring-2 focus:ring-white" aria-label="Aumentar fonte">
            <Plus size={16} />
          </button>
        </div>
      </div>
      
      <a href="#conteudo-principal" className="text-uba-offWhite hover:underline focus:ring-2 focus:ring-white rounded px-2 py-1">
        Pular para o conteúdo
      </a>
    </div>
  );
}