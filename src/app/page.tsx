"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Boxes, Layers, Zap, ShieldCheck } from 'lucide-react';

export default function BetaForge() {
  const productionLines = [
    { id: '01', type: 'TECNOLOGÍA', label: 'Estructuras TSX', status: 'ACTIVE' },
    { id: '02', type: 'CONTENIDO', label: 'Activos Soberanos', status: 'WAITING' },
    { id: '03', type: 'DATOS', label: 'Búnker Sync', status: 'SYNCED' }
  ];

  return (
    <div className="min-h-screen bg-[#02040a] text-[#00E5FF] font-mono p-10 selection:bg-[#00E5FF] selection:text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header de la Fábrica */}
        <header className="flex justify-between items-start mb-24 border-b border-[#00E5FF]/20 pb-12">
          <div>
            <h1 className="text-5xl font-black tracking-tighter flex items-center gap-4 italic">
              <Hammer className="text-[#00E5FF]" /> NODO BETA
            </h1>
            <p className="text-[10px] tracking-[0.5em] text-cyan-700 uppercase mt-4">Eje Productivo / Forja de Activos</p>
          </div>
          <div className="bg-[#00E5FF]/5 border border-[#00E5FF]/20 p-4">
            <p className="text-[9px] text-gray-500 uppercase mb-1 tracking-widest">Responsabilidad Exclusiva</p>
            <p className="text-xs font-bold text-white uppercase">Bazalar Antón Dynasty</p>
          </div>
        </header>

        {/* Líneas de Producción */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {productionLines.map((line) => (
            <motion.div 
              key={line.id}
              whileHover={{ backgroundColor: 'rgba(0,229,255,0.05)' }}
              className="border border-[#00E5FF]/10 p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 text-4xl font-black italic">{line.id}</div>
              <p className="text-[9px] text-cyan-600 mb-2 tracking-widest">{line.type}</p>
              <h2 className="text-xl font-bold text-white mb-8 tracking-tight">{line.label}</h2>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${line.status === 'ACTIVE' ? 'bg-green-500 animate-pulse' : 'bg-gray-700'}`}></div>
                <span className="text-[9px] uppercase tracking-widest opacity-50">{line.status}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard de Activos (Mapeo de la Carta Magna) */}
        <div className="bg-[#050505] border border-[#00E5FF]/5 p-12">
          <div className="flex items-center gap-4 mb-10">
            <Boxes className="text-cyan-900" />
            <h3 className="text-xs tracking-[0.4em] uppercase text-cyan-900">Salida de Producción Fractal</h3>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 opacity-40 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-6">
                  <Layers size={14} />
                  <span className="text-xs font-bold uppercase text-white">V51-ASSET-00{i}</span>
                </div>
                <span className="text-[10px] tracking-widest">CALIDAD MUNDIAL / TSX</span>
                <ShieldCheck size={14} className="text-green-500" />
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-40 opacity-10 text-[8px] tracking-[0.8em] uppercase flex justify-between">
          <span>HACER: Generación de Valor</span>
          <span>© 2026 Via51 Beta Node</span>
        </footer>

      </div>
    </div>
  );
}
