"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Battery, Gauge, Info, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ProductPage() {
  const specs = [
    { label: "Motor", value: "Assistência de Pedal Inteligente" },
    { label: "Bateria", value: "Lítio-íon Removível (Bivolt)" },
    { label: "Recarga", value: "4 a 5 horas para carga completa" },
    { label: "Autonomia", value: "Até 60km por carga" },
    { label: "Velocidade", value: "Limitada a 32km/h (Segurança)" },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Image 
              src="/assets/logo.webp" 
              alt="BLIV Logo" 
              width={140} 
              height={56} 
              className="h-8 md:h-12 w-auto object-contain"
            />
          </a>
          <div className="flex gap-3 md:gap-4 items-center">
            <a href="/login" className="text-xs md:text-sm font-bold hover:text-accent transition-colors">LOGIN</a>
            <button className="bg-white text-black px-4 md:px-6 py-2 rounded-full text-[10px] md:text-sm font-bold hover:bg-accent transition-all whitespace-nowrap">
              ASSINAR AGORA
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 max-w-7xl mx-auto px-6 py-12 lg:grid lg:grid-cols-2 lg:gap-20">
        {/* Galeria de Produto Impecável */}
        <div className="relative space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square bg-zinc-900 rounded-3xl overflow-hidden relative group border border-white/5"
          >
            <Image 
              src="/assets/bike-2.png" 
              alt="BLIV E-MTB Vista Completa" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          
          <div className="grid grid-cols-3 gap-4">
            {["/assets/bike-1.png", "/assets/bike-3.png", "/assets/bike-4.png"].map((src, i) => (
              <div key={i} className="aspect-square bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden relative group">
                <Image 
                  src={src} 
                  alt={`BLIV E-MTB Detalhe ${i + 1}`} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Informações de Compra/Conversão */}
        <div className="mt-12 lg:mt-0 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-accent font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Disponível para Assinatura</span>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 italic uppercase">BLIV E-MTB</h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-md">
              A ferramenta definitiva para o entregador moderno. Performance elétrica, robustez de mountain bike e custo zero de manutenção.
            </p>

            <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl mb-10">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-accent">R$ 660</span>
                <span className="text-zinc-500 font-medium">/mês</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <Zap size={18} className="text-accent" /> Motor assistido de alto torque
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <Shield size={18} className="text-accent" /> Seguro contra furto e roubo incluso
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <Battery size={18} className="text-accent" /> Bateria removível de longa duração
                </li>
              </ul>

              <button className="w-full bg-white text-black py-5 rounded-2xl font-black text-xl hover:bg-accent transition-all flex items-center justify-center gap-3 uppercase italic">
                Reservar Agora <ChevronRight />
              </button>
              <p className="text-center text-[10px] text-zinc-500 mt-4 uppercase tracking-widest">Sujeito a análise de perfil</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detalhes Técnicos Estilo Wireframe */}
      <section className="bg-zinc-900/30 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-16 italic uppercase tracking-tighter">Especificações de Engenharia</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-20">
            {specs.map((spec, i) => (
              <div key={i} className="border-b border-white/10 pb-6 group hover:border-accent transition-colors">
                <p className="text-accent font-mono text-[10px] uppercase mb-2">{spec.label}</p>
                <p className="text-xl font-bold">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Confiança */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/5">
              <Gauge size={20} className="text-accent" />
            </div>
            <h4 className="font-bold uppercase italic tracking-tighter">Manutenção Zero</h4>
            <p className="text-zinc-500 text-sm">Todas as revisões preventivas estão inclusas. Você nunca para de rodar.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/5">
              <Info size={20} className="text-accent" />
            </div>
            <h4 className="font-bold uppercase italic tracking-tighter">Apoio ao Entregador</h4>
            <p className="text-zinc-500 text-sm">Central de suporte dedicada para resolver qualquer imprevisto no seu dia.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/5">
              <Shield size={20} className="text-accent" />
            </div>
            <h4 className="font-bold uppercase italic tracking-tighter">Garantia Bliv</h4>
            <p className="text-zinc-500 text-sm">Substituição rápida da bicicleta em caso de defeitos técnicos graves.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
