
import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Settings, X, Activity, Sparkles, Play } from 'lucide-react';

interface LandingScreenProps {
  onStart: () => void;
  headline: string;
  isEditMode: boolean;
  onToggleEdit: () => void;
}

const ScramblingLetter: React.FC<{ char: string; isExiting: boolean; index: number }> = ({ char, isExiting, index }) => {
  const [displayChar, setDisplayChar] = useState(char);

  useEffect(() => {
    if (!isExiting) {
      setDisplayChar(char);
      return;
    }

    // Target mapping for "MOVE" -> "2026"
    // M -> 2, O -> 0, V -> 2, E -> 6
    const targets = ['2', '0', '2', '6'];
    const targetChar = targets[index] || '';

    const startDelay = Math.random() * 300;

    const timeout = setTimeout(() => {
      let counter = 0;
      const interval = setInterval(() => {
        counter++;
        if (counter > 15) { // Stop after some scrambling
          setDisplayChar(targetChar);
          clearInterval(interval);
        } else {
          setDisplayChar(Math.floor(Math.random() * 10).toString());
        }
      }, 50);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [isExiting, char, index]);

  const variants = {
    exit: {
      opacity: [1, 1, 0], // Stay visible as numbers then fade
      scale: [1, 1.2, 0.8],
      filter: ["blur(0px)", "blur(0px)", "blur(10px)"],
      transition: {
        duration: 1.5, // Total duration of transformation
        times: [0, 0.8, 1], // Timing for opacity changes
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.span
      variants={variants}
      animate={isExiting ? "exit" : ""}
      className="inline-block"
      style={{ display: 'inline-block' }}
    >
      {displayChar === " " ? "\u00A0" : displayChar}
    </motion.span>
  );
};

const LandingScreen: React.FC<LandingScreenProps> = ({ onStart, headline, isEditMode, onToggleEdit }) => {
  const [showConfig, setShowConfig] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleAuth = () => {
    if (password === '1234') {
      onToggleEdit();
      setShowConfig(false);
      setPassword('');
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  const handleStartTransition = () => {
    setIsExiting(true);
    setTimeout(() => {
      onStart();
    }, 2000);
  };

  const chars = useMemo(() => headline.split(""), [headline]);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center p-6 z-50 bg-[#000000] overflow-hidden"
    >
      {/* Background Orbe */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={isExiting ? { opacity: 0 } : {
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] rounded-full blur-[150px]"
          style={{
            background: 'radial-gradient(circle, #2e1065 0%, transparent 70%)'
          }}
        />
      </div>

      {/* Content centered */}
      <div className="flex flex-col items-center text-center relative z-10 w-full max-w-4xl">
        {/* Logo Main */}
        <motion.img
          src="/logo.png"
          alt="Logo MVP"
          animate={isExiting ? { opacity: 0, y: -20, scale: 0.8 } : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-32 md:w-40 h-auto mb-8 drop-shadow-[0_0_25px_rgba(147,51,234,0.3)]"
        />

        {/* Church Name Label */}
        <motion.div
          animate={isExiting ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
          className="flex items-center gap-3 px-6 py-2 rounded-full bg-white/[0.02] border border-white/5 backdrop-blur-md mb-8"
        >
          <span className="text-xs md:text-sm font-black tracking-[0.5em] uppercase text-zinc-400">Ministério Visão e Propósito</span>
        </motion.div>

        {/* MOVE Headline */}
        <div className="flex select-none overflow-visible mb-6 justify-center gap-[0.2em]">
          {chars.map((char, i) => (
            <div key={`head-${i}`} className="text-[clamp(6rem,28vw,22rem)] font-display text-white leading-[0.75] tracking-tighter">
              <ScramblingLetter char={char} isExiting={isExiting} index={i} />
            </div>
          ))}
        </div>

        {/* Access Button - Neon Style */}
        <motion.button
          animate={isExiting ? { opacity: 0, scale: 0.9, y: 10 } : {
            boxShadow: [
              "0 0 10px #a855f7, inset 0 0 5px #a855f7",
              "0 0 25px #a855f7, inset 0 0 15px #a855f7",
              "0 0 10px #a855f7, inset 0 0 5px #a855f7"
            ],
            borderColor: ["#c084fc", "#e9d5ff", "#c084fc"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 40px #d8b4fe, inset 0 0 25px #d8b4fe",
            borderColor: "#ffffff"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStartTransition}
          className="mt-8 group relative flex items-center gap-4 bg-black text-white border-2 px-10 py-5 rounded-full font-bold text-lg md:text-xl font-ui uppercase tracking-widest overflow-hidden"
        >
          <span className="relative z-10 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] whitespace-nowrap">Acessar Treinamento</span>
          <Play className="text-purple-200 group-hover:text-white group-hover:scale-110 transition-all relative z-10" size={24} fill="currentColor" />

          {/* Subtle reflection/glass effect */}
          <div className="absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        </motion.button>
      </div>

      {/* Hidden Admin Trigger */}
      <button onClick={() => setShowConfig(true)} className="fixed bottom-6 right-6 p-3 text-zinc-900 hover:text-purple-900 transition-all opacity-10 hover:opacity-100 z-50">
        <Settings size={18} />
      </button>

      <AnimatePresence>
        {showConfig && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-3xl"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-xs bg-zinc-950 border border-white/5 p-8 rounded-[2.5rem] shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600">Acesso Restrito</h3>
                <button onClick={() => setShowConfig(false)} className="text-zinc-800 hover:text-white"><X size={18} /></button>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
                placeholder="••••"
                className={`w-full bg-black border ${error ? 'border-red-900' : 'border-white/5'} rounded-xl py-4 px-6 text-white text-center text-xl focus:outline-none focus:border-purple-900/40 transition-all mb-6 font-display`}
                autoFocus
              />
              <button onClick={handleAuth} className="w-full py-4 rounded-xl bg-purple-900/20 border border-purple-500/20 text-purple-400 font-bold text-[10px] uppercase tracking-widest hover:bg-purple-900/40 transition-all">
                Entrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </motion.div>
  );
};

export default LandingScreen;
