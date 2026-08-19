import { Search, Star, Scale, Megaphone, ArrowRight, Image as ImageIcon } from "lucide-react";
import { getServicosDestaque } from "@/controllers/servicoController";
import * as Icons from "lucide-react";

export default async function Home() {
  const servicos = await getServicosDestaque();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-uba-blue to-uba-darkBlue text-white py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Olá, o que você precisa resolver em <span className="text-uba-red">Ubá</span> hoje?
          </h2>
          
          <div className="relative max-w-2xl mx-auto">
            <label htmlFor="busca-global" className="sr-only">Buscar serviços ou informações</label>
            <input 
              id="busca-global"
              type="search" 
              placeholder="Ex: IPTU, agendamento, licitação, iluminação..." 
              className="w-full py-5 px-6 pr-16 rounded-full text-uba-text text-lg md:text-xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-uba-red/50 border-2 border-transparent focus:border-uba-red transition-all"
            />
            <button 
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-uba-red p-3.5 rounded-full hover:bg-uba-darkRed transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Executar busca"
            >
              <Search className="text-white" size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Serviços em Destaque */}
      <section className="py-12 md:py-16 px-4 -mt-10 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-2xl font-bold text-uba-blue mb-8 px-2 flex items-center gap-2">
            <Star className="text-uba-red" size={24} />
            Serviços Mais Acessados
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico) => {
              // Mapeamento seguro de ícones do Lucide
              const IconComponent = (Icons as any)[servico.icone] || Icons.FileText;
              
              return (
                <a 
                  key={servico.id} 
                  href={servico.url}
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-uba-red focus:outline-none focus:ring-4 focus:ring-uba-blue/30 flex flex-col h-full"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="bg-uba-blue/10 p-3 rounded-lg group-hover:bg-uba-blue group-hover:text-white transition-colors text-uba-blue flex-shrink-0">
                      <IconComponent size={28} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-uba-blue mb-1 group-hover:text-uba-red transition-colors">
                        {servico.titulo}
                      </h4>
                      <span className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded mb-2">
                        {servico.categoria}
                      </span>
                    </div>
                  </div>
                  <p className="text-uba-text/80 text-base leading-relaxed mt-auto">
                    {servico.descricao}
                  </p>
                  <span className="mt-4 text-uba-red font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Acessar serviço <ArrowRight size={16} />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção de Transparência Rápida */}
      <section className="py-16 px-4 bg-white border-t border-slate-200">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-uba-blue mb-6 flex items-center gap-2">
              <Scale size={24} /> Transparência em Foco
            </h3>
            <div className="bg-uba-offWhite p-6 rounded-xl border border-slate-200">
              <p className="text-lg font-semibold mb-2">Portal da Transparência</p>
              <p className="text-slate-600 mb-6">Acesse gastos públicos, receitas, salários de servidores e licitações em tempo real, conforme a Lei de Acesso à Informação (LAI).</p>
              <a href="/transparencia" className="inline-block bg-uba-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-uba-darkBlue transition-colors focus:ring-4 focus:ring-uba-blue/30">
                Ver Dados Abertos
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-uba-blue mb-6 flex items-center gap-2">
              <Megaphone size={24} /> Últimas Notícias
            </h3>
            <article className="flex gap-4 group cursor-pointer p-4 rounded-lg hover:bg-uba-offWhite transition-colors border border-transparent hover:border-slate-200">
              <div className="w-24 h-24 bg-slate-200 rounded-lg flex-shrink-0 flex items-center justify-center text-slate-400">
                <ImageIcon size={32} />
              </div>
              <div>
                <span className="text-xs font-bold text-uba-red uppercase tracking-wider">Infraestrutura</span>
                <h4 className="font-bold text-uba-text text-lg group-hover:text-uba-blue transition-colors leading-snug mt-1">
                  Prefeitura inicia pavimentação asfáltica em 5 novos bairros de Ubá
                </h4>
                <time className="text-sm text-slate-500 mt-2 block">19 de Agosto de 2026</time>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}