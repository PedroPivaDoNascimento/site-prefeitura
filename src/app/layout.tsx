import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AccessibilityBar } from "@/components/layout/AccessibilityBar";
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prefeitura Municipal de Ubá - MG | Portal Oficial",
  description: "Portal oficial de serviços, transparência e informações da Prefeitura de Ubá, Minas Gerais.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-uba-offWhite text-uba-text min-h-screen flex flex-col antialiased`}>
        <AccessibilityBar />
        <Header />
        
        <main id="conteudo-principal" className="flex-grow">
          {children}
        </main>
        
        <footer className="bg-uba-darkBlue text-white py-8 px-4 mt-auto">
          <div className="container mx-auto text-center md:text-left">
            <p className="font-bold text-lg mb-2">Prefeitura Municipal de Ubá</p>
            <p className="text-blue-200 text-sm">Praça Bernardino de Lima, 100 - Centro, Ubá - MG</p>
            <p className="text-blue-200 text-sm mt-4">© 2026 Todos os direitos reservados. Desenvolvido com padrões eMAG e LGPD.</p>
          </div>
        </footer>

        {/* VLibras Widget (Corrigido para React) */}
        <div vw="true" className="enabled">
          <div vw-access-button="active" className="active"></div>
          <div vw-plugin-wrapper="true">
            <div className="vw-plugin-top-wrapper"></div>
          </div>
        </div>
        
        <script src="https://vlibras.gov.br/app/vlibras-plugin.js" async></script>
        <script dangerouslySetInnerHTML={{ __html: "new window.VLibras.Widget('https://vlibras.gov.br/app');" }} />
      </body>
    </html>
  );
}