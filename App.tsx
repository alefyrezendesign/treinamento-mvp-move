
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  Home,
  Layout
} from 'lucide-react';
import { Slide, AppState } from './types';
import { INITIAL_SLIDES, HEADLINE } from './constants';
import SlideContent from './components/SlideContent';
import TableOfContents from './components/TableOfContents';
import ProgressBar from './components/ProgressBar';
import LandingScreen from './components/LandingScreen';

const App: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>(() => {
    const saved = localStorage.getItem('move_training_slides');
    return saved ? JSON.parse(saved) : INITIAL_SLIDES;
  });

  const [state, setState] = useState<AppState & { isEditMode: boolean }>({
    currentSlideIndex: 0,
    isMenuOpen: false,
    hasStarted: false,
    completedItems: new Set<string>(),
    isEditMode: false,
  });

  const appRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  const goToNext = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentSlideIndex: Math.min(prev.currentSlideIndex + 1, slides.length - 1)
    }));
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setState(prev => {
      if (prev.currentSlideIndex === 0) {
        return { ...prev, hasStarted: false };
      }
      return {
        ...prev,
        currentSlideIndex: Math.max(prev.currentSlideIndex - 1, 0)
      };
    });
  }, []);

  const toggleMenu = () => setState(prev => ({ ...prev, isMenuOpen: !prev.isMenuOpen }));
  const goToSlide = (index: number) => setState(prev => ({ ...prev, currentSlideIndex: index, isMenuOpen: false }));
  const handleStart = () => setState(prev => ({ ...prev, hasStarted: true, currentSlideIndex: 0 }));

  const handleUpdateSlide = (updatedSlide: Slide) => {
    const newSlides = [...slides];
    newSlides[state.currentSlideIndex] = updatedSlide;
    setSlides(newSlides);
    localStorage.setItem('move_training_slides', JSON.stringify(newSlides));
  };

  const handleScrollReset = () => {
    if (window.innerWidth <= 768 && mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!state.hasStarted || state.isEditMode) return;
      if (e.key === 'ArrowRight' || e.key === ' ') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'Escape') setState(prev => ({ ...prev, isMenuOpen: false }));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state.hasStarted, state.isEditMode, goToNext, goToPrev]);

  return (
    <div
      ref={appRef}
      className="fixed inset-0 bg-[#050505] text-white overflow-hidden flex flex-col font-sans h-dvh"
    >
      <AnimatePresence mode="wait">
        {!state.hasStarted ? (
          <LandingScreen
            key="landing"
            onStart={handleStart}
            headline={HEADLINE}
            isEditMode={state.isEditMode}
            onToggleEdit={() => setState(prev => ({ ...prev, isEditMode: !prev.isEditMode }))}
          />
        ) : (
          <motion.div
            key="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col relative overflow-hidden h-full"
          >
            {/* Elementos de Fundo */}
            <div className="absolute inset-0 pointer-events-none -z-10 bg-[#050505]">
              <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full" style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, transparent 70%)' }} />
              <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full" style={{ background: 'radial-gradient(circle, rgba(49, 46, 129, 0.1) 0%, transparent 70%)' }} />
            </div>

            {/* Header */}
            <header className="flex items-center justify-between px-6 py-4 md:px-12 md:py-8 z-50 shrink-0">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="MVP Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
                  <span className="font-display text-sm tracking-[0.2em] uppercase hidden sm:block">MVP Move</span>
                </div>
                <button onClick={toggleMenu} className="group flex items-center gap-3 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all">
                  <Menu size={16} className="text-zinc-400 group-hover:text-white" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white">Índice</span>
                </button>
              </div>

              <div className="flex items-center gap-4">
                <button onClick={() => setState(prev => ({ ...prev, hasStarted: false }))} className="p-2.5 text-zinc-500 hover:text-white transition-colors">
                  <Home size={20} />
                </button>
                <div className="h-8 w-px bg-white/10 mx-2" />
                <div className="font-display text-xl text-purple-500">
                  {String(state.currentSlideIndex + 1).padStart(2, '0')}
                  <span className="text-zinc-800 mx-1">/</span>
                  <span className="text-zinc-600 text-sm">{String(slides.length).padStart(2, '0')}</span>
                </div>
              </div>
            </header>

            {/* Slide Area */}
            <main ref={mainRef} className="flex-1 relative flex flex-col overflow-y-auto">
              {(() => {
                const isFullScreen = slides[state.currentSlideIndex].fullScreen;
                return (
                  <div className="flex-1 flex items-center justify-center p-0">
                    <div className="w-full h-full flex flex-col justify-center">
                      <AnimatePresence mode="wait" initial={false} onExitComplete={handleScrollReset}>
                        <motion.div
                          key={state.currentSlideIndex}
                          initial={{ opacity: 0, y: isFullScreen ? 0 : 10, scale: isFullScreen ? 1 : 0.99 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: isFullScreen ? 0 : -10, scale: isFullScreen ? 1 : 1.01 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="w-full h-full"
                        >
                          <SlideContent
                            slide={slides[state.currentSlideIndex]}
                            completedItems={state.completedItems}
                            onToggleCheck={() => { }}
                            isEditMode={state.isEditMode}
                            onUpdate={handleUpdateSlide}
                            currentIndex={state.currentSlideIndex}
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })()}

            </main>

            {/* Footer with Progress */}
            <footer className="px-6 md:px-12 py-6 shrink-0 z-50 flex items-center gap-6 bg-[#050505]/80 backdrop-blur-sm border-t border-white/5">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 font-ui whitespace-nowrap">
                MVP MOVE --
              </span>
              <div className="flex-1">
                <ProgressBar current={state.currentSlideIndex + 1} total={slides.length} />
              </div>
            </footer>

            {/* Navigation - Guaranteed Fixed & Subtle */}
            <nav className="fixed bottom-6 right-6 md:bottom-12 md:right-12 flex items-center gap-1 z-100">
              <button
                onClick={goToPrev}
                className="p-3 md:p-4 rounded-xl bg-white/1 hover:bg-white/8 backdrop-blur-md border border-white/5 text-zinc-600 hover:text-white transition-all shadow-xl active:scale-95"
                aria-label="Anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={goToNext}
                disabled={state.currentSlideIndex === slides.length - 1}
                className="p-3 md:p-4 rounded-xl bg-white/2 hover:bg-white/10 backdrop-blur-md border border-white/8 text-zinc-500 hover:text-white disabled:opacity-0 transition-all shadow-xl active:scale-95"
                aria-label="Próximo"
              >
                <ChevronRight size={18} />
              </button>
            </nav>

            <AnimatePresence>
              {state.isMenuOpen && (
                <TableOfContents
                  slides={slides}
                  currentIndex={state.currentSlideIndex}
                  onClose={toggleMenu}
                  onSelect={goToSlide}
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default App;
