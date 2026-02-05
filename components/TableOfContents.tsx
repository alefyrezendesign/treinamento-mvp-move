
import React from 'react';
import { motion } from 'framer-motion';
import { X, List, ChevronRight } from 'lucide-react';
import { Slide } from '../types';

interface TableOfContentsProps {
  slides: Slide[];
  currentIndex: number;
  onClose: () => void;
  onSelect: (index: number) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ slides, currentIndex, onClose, onSelect }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex justify-end"
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 35, stiffness: 350 }}
        className="w-full max-w-lg bg-[#050505] border-l border-white/5 flex flex-col shadow-2xl relative z-10"
      >
        <header className="p-10 md:p-14 border-b border-white/5 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3 mb-1">
              <List className="text-purple-600" size={24} />
              <h3 className="font-display text-3xl uppercase tracking-tighter">Conteúdo</h3>
            </div>
            <p className="text-[10px] font-black tracking-[0.4em] text-zinc-600 uppercase">Selecione uma página para navegar</p>
          </div>
          <button onClick={onClose} className="p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all text-zinc-500 hover:text-white">
            <X size={24} />
          </button>
        </header>

        <nav className="flex-1 overflow-y-auto p-6 md:p-10 space-y-3 custom-scrollbar">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => onSelect(index)}
              className={`w-full group flex items-center gap-6 p-6 rounded-[2rem] transition-all text-left border ${
                currentIndex === index 
                ? 'bg-purple-700/20 border-purple-600/50 text-white shadow-[0_10px_40px_rgba(88,28,135,0.2)]' 
                : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] text-zinc-500 hover:text-zinc-200'
              }`}
            >
              <div className={`text-3xl font-display leading-none min-w-[3rem] transition-colors ${
                currentIndex === index ? 'text-purple-500' : 'text-zinc-800 group-hover:text-zinc-600'
              }`}>
                {String(index + 1).padStart(2, '0')}
              </div>
              
              <div className="flex-1 flex flex-col gap-1">
                <span className={`font-display text-xs uppercase tracking-[0.2em] transition-opacity ${
                  currentIndex === index ? 'text-purple-400 opacity-100' : 'text-zinc-700 opacity-60'
                }`}>
                  {slide.type === 'capa' ? 'Seção Principal' : 'Conteúdo'}
                </span>
                <span className={`font-display text-base md:text-lg uppercase tracking-tight leading-tight ${
                  currentIndex === index ? 'opacity-100' : 'opacity-80'
                }`}>
                  {slide.title}
                </span>
              </div>
              
              <ChevronRight size={20} className={`transition-transform duration-300 ${
                currentIndex === index ? 'translate-x-0 text-purple-500' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
              }`} />
            </button>
          ))}
        </nav>

        <footer className="p-10 border-t border-white/5 bg-black/50 backdrop-blur-xl">
           <div className="flex items-center justify-between">
              <span className="text-[9px] font-black tracking-[0.4em] text-zinc-700 uppercase">MVP MOVE © 2024</span>
              <div className="flex gap-1">
                 {Array.from({length: 4}).map((_, i) => (
                   <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-purple-600' : 'bg-zinc-900'}`} />
                 ))}
              </div>
           </div>
        </footer>
      </motion.div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1a1a1a;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #333;
        }
      `}</style>
    </motion.div>
  );
};

export default TableOfContents;
