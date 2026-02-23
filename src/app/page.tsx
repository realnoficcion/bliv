"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Shield, RotateCcw, MapPin, Phone, Mail, HelpCircle, Lock, CheckCircle2, Gauge, Battery, BatteryCharging, Instagram, Facebook } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const specRef = useRef(null);
  const vantagensRef = useRef(null);

  const { scrollYProgress: scrollYProgressSpecs } = useScroll({
    target: specRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: scrollYProgressVantagens } = useScroll({
    target: vantagensRef,
    offset: ["start end", "end start"]
  });

  const pathLengthSpecs = useTransform(scrollYProgressSpecs, [0, 0.4], [0, 1]);
  const pathLengthVantagens = useTransform(scrollYProgressVantagens, [0, 0.4], [0, 1]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image 
              src="/assets/logo.webp" 
              alt="BLIV Logo" 
              width={140} 
              height={56} 
              className="h-8 md:h-12 w-auto object-contain"
            />
          </div>
          <div className="flex gap-3 md:gap-4 items-center">
            <a href="/login" className="text-xs md:text-sm font-bold hover:text-accent transition-colors">LOGIN</a>
            <button className="bg-white text-black px-4 md:px-6 py-2 rounded-full text-[10px] md:text-sm font-bold hover:bg-accent transition-all whitespace-nowrap">
              ASSINAR AGORA
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 pb-12 px-6 overflow-hidden flex flex-col items-center min-h-0 md:min-h-[90vh]">
        {/* Título */}
        <div className="max-w-7xl mx-auto text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-4 mb-2 md:mb-4"
          >
            <span className="text-accent font-mono tracking-[0.2em] md:tracking-[0.3em] uppercase text-[9px] md:text-xs mb-2 block">Mobilidade Urbana Redefinida</span>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[1.1] md:leading-[0.9] uppercase italic">
              O FUTURO DA <br className="md:hidden" /> ENTREGA <br />
              <span className="text-accent italic">EM MOVIMENTO.</span>
            </h1>
          </motion.div>
        </div>

        {/* Vídeo - Subindo um pouco para baixo do texto */}
        <div className="relative w-full max-w-4xl mx-auto z-10 px-4 -mt-4 md:-mt-8">
          <motion.div 
            className="relative flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ 
              clipPath: 'inset(8px 0 8px 0)' 
            }}
          >
            <video 
              autoPlay 
              muted 
              playsInline 
              className="w-full h-auto object-cover opacity-90"
              onTimeUpdate={(e) => {
                if (e.currentTarget.currentTime >= 4.8) {
                  e.currentTarget.pause();
                }
              }}
            >
              <source src="/assets/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          </motion.div>
        </div>

        {/* Botão e Preço - Subindo um pouco para cima do vídeo */}
        <div className="max-w-7xl mx-auto text-center relative z-20 mt-6 md:-mt-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 md:translate-y-[22px]"
          >
            <a href="/produtos/e-mtb" className="group bg-accent text-black px-8 py-4 md:px-12 md:py-4.5 rounded-full text-base md:text-xl font-black flex items-center gap-3 hover:scale-105 transition-all w-full md:w-auto justify-center shadow-2xl shadow-accent/20">
              RESERVAR MINHA BLIV <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <div className="text-center md:text-left">
              <p className="text-[10px] md:text-sm font-bold text-white/60 uppercase tracking-widest">Assinatura a partir de</p>
              <p className="text-xl md:text-2xl font-black italic">R$ 660<span className="text-sm font-medium text-white/40 not-italic">/mês</span></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="especificacoes" ref={specRef} className="py-16 md:py-24 border-y border-white/5 bg-zinc-900/30 relative overflow-hidden">
        {/* Animated Route Line */}
        <div className="absolute top-[120px] left-0 w-full hidden md:block pointer-events-none">
          <svg width="100%" height="2" fill="none" className="max-w-7xl mx-auto px-6 overflow-visible">
            <line x1="12.5%" y1="1" x2="87.5%" y2="1" stroke="white" strokeOpacity="0.03" strokeWidth="1" strokeDasharray="4 8" />
            <motion.line 
              x1="12.5%" y1="1" x2="87.5%" y2="1" 
              stroke="#ff3b3b" 
              strokeOpacity="0.3"
              strokeWidth="1" 
              strokeDasharray="4 8"
              style={{ pathLength: pathLengthSpecs }}
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 relative z-10">
          {[
            { label: "Velocidade Máxima", val: "32km/h", icon: Gauge },
            { label: "Autonomia", val: "60km", icon: Zap },
            { label: "Bateria", val: "Removível", icon: Battery },
            { label: "Recarga", val: "4-5h", icon: BatteryCharging }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              {/* Mobile Card Placeholder */}
              <div className="aspect-square bg-zinc-900 rounded-2xl border border-white/5 flex flex-col items-center justify-center space-y-2 p-2 md:hidden">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center border border-white/5 group-hover:border-accent/30 transition-colors">
                  <stat.icon size={18} className="text-accent" />
                </div>
                <p className="text-[8px] font-mono text-white/40 uppercase tracking-wider leading-none">{stat.label}</p>
                <p className="text-lg font-black tracking-tight uppercase italic leading-none">{stat.val}</p>
              </div>

              {/* Desktop Original Layout */}
              <div className="hidden md:block text-center group">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/5 group-hover:border-accent/30 transition-colors">
                  <stat.icon size={20} className="text-accent" />
                </div>
                <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">{stat.label}</p>
                <p className="text-xl md:text-2xl font-black tracking-tight uppercase italic">{stat.val}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vantagens */}
      <section id="vantagens" ref={vantagensRef} className="py-16 md:py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
        {/* Animated Route Line (Right to Left) */}
        <div className="absolute top-[120px] left-0 w-full hidden md:block pointer-events-none">
          <svg width="100%" height="2" fill="none" className="max-w-7xl mx-auto px-6 overflow-visible">
            <line x1="83.3%" y1="1" x2="16.6%" y2="1" stroke="white" strokeOpacity="0.03" strokeWidth="1" strokeDasharray="4 8" />
            <motion.line 
              x1="83.3%" y1="1" x2="16.6%" y2="1" 
              stroke="#ff3b3b" 
              strokeOpacity="0.3"
              strokeWidth="1" 
              strokeDasharray="4 8"
              style={{ pathLength: pathLengthVantagens }}
            />
          </svg>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative z-10">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/5">
              <Zap size={20} className="text-accent" />
            </div>
            <h4 className="text-xl md:text-2xl font-bold uppercase italic tracking-tighter">Pedal Assistido</h4>
            <p className="text-zinc-500 text-sm">Tecnologia que entende seu ritmo. O motor é ativado com o pedal e desliga ao parar.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/5">
              <Lock size={20} className="text-accent" />
            </div>
            <h4 className="text-xl md:text-2xl font-bold italic uppercase tracking-tighter">Segurança Ativa</h4>
            <p className="text-zinc-500 text-sm">Suporte especializado em caso de furto ou extravio. Sua ferramenta de trabalho sempre protegida.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/5">
              <RotateCcw size={20} className="text-accent" />
            </div>
            <h4 className="text-xl md:text-2xl font-bold italic uppercase tracking-tighter">Revisão Gratuita</h4>
            <p className="text-zinc-500 text-sm">Manutenção preventiva inclusa na assinatura. Menos preocupação, mais entregas.</p>
          </div>
        </div>
      </section>

      {/* Info Sections from Official Site */}
      <section id="assinatura" className="relative py-16 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/solucaobliv.png" 
            alt="Solução Bliv Background" 
            fill 
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black tracking-tighter mb-8 uppercase italic">A Solução Bliv</h2>
          <p className="text-xl leading-relaxed mb-12 text-zinc-300">
            Focamos na transformação da mobilidade urbana para profissionais de entrega. 
            Sustentabilidade, economia e prontidão diária em um único pacote de assinatura.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="p-8 border border-white/10 bg-black/40 backdrop-blur-md rounded-3xl hover:border-accent transition-colors">
              <CheckCircle2 className="text-accent mb-4" />
              <h4 className="font-bold mb-2">Pagamento Mensal</h4>
              <p className="text-sm text-zinc-400">Planejamento financeiro sem surpresas.</p>
            </div>
            <div className="p-8 border border-white/10 bg-black/40 backdrop-blur-md rounded-3xl hover:border-accent transition-colors">
              <Shield className="text-accent mb-4" />
              <h4 className="font-bold mb-2">Suporte 24/7</h4>
              <p className="text-sm text-zinc-400">Central de ajuda dedicada ao entregador.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="ajuda" className="py-16 md:py-32 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
             <Image src="/assets/logo.webp" alt="BLIV" width={120} height={50} className="mb-8" />
             <p className="text-white/40 max-w-sm mb-8 italic">
               BLIV SOLUÇÕES URBANAS DE MOBILIDADE S.A.<br />
               CNPJ: 31.880.931/0001-55
             </p>
             <div className="flex gap-4">
               <a href="https://www.facebook.com/bliv.bike/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                 <Facebook size={18} />
               </a>
               <a href="https://www.instagram.com/bliv.bike" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                 <Instagram size={18} />
               </a>
             </div>
          </div>
          
          <div className="space-y-6">
            <h5 className="font-bold text-accent uppercase tracking-widest text-xs">Atendimento</h5>
            <div className="space-y-4 text-sm text-white/60">
              <a href="tel:1150280732" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={16} /> 11 5028-0732
              </a>
              <a href="mailto:sac@bliv.bike" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={16} /> sac@bliv.bike
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Rua Amália de Noronha, 130 – Pinheiros, São Paulo-SP</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold text-accent uppercase tracking-widest text-xs">Legal</h5>
            <nav className="flex flex-col gap-4 text-sm text-white/60">
              <a href="#" className="hover:text-white">Tabela Pública de Condições</a>
              <a href="#" className="hover:text-white">Política de Privacidade</a>
              <a href="#" className="hover:text-white">Furto ou Extravio</a>
              <a href="#" className="hover:text-white">Trabalhe Conosco</a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}
