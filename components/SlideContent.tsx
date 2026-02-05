
import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, HelpCircle, Quote, Sparkles, ArrowRight, Dna, MapPin, Activity, Home, BookOpen, Flame, ArrowUpRight, Heart, Users, TrendingUp, Zap, Globe, Crown, MousePointerClick, AlertCircle, UserX, UserMinus, TrendingDown, Landmark, Scale, ShieldAlert, Stethoscope, HeartHandshake, Lightbulb, XCircle, Speaker, Lock, Coffee, Tent, MicOff, Plus, Eye, Network, UserPlus, Award, Clock, Smile, Star, Circle, MessageSquare, PartyPopper, User, ChevronRight, ChevronLeft, Leaf } from 'lucide-react';
import { Slide } from '../types';

interface SlideContentProps {
  slide: Slide;
  completedItems: Set<string>;
  onToggleCheck: (id: string) => void;
  isEditMode: boolean;
  onUpdate: (updatedSlide: Slide) => void;
  currentIndex: number;
}

const SlideContent: React.FC<SlideContentProps> = ({ slide, completedItems, onToggleCheck, isEditMode, onUpdate, currentIndex }) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const scrollTimeline = (direction: 'left' | 'right') => {
    if (timelineRef.current) {
      const scrollAmount = 400;
      timelineRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleTextChange = (field: keyof Slide | 'contentItem' | 'checkItem', value: string, index?: number) => {
    if (field === 'title') onUpdate({ ...slide, title: value });
    if (field === 'subtitle') onUpdate({ ...slide, subtitle: value });
    if (field === 'question') onUpdate({ ...slide, question: value });
    if (field === 'callout') onUpdate({ ...slide, callout: value });
    if (field === 'contentItem' && typeof index === 'number') {
      const newContent = [...(slide.content || [])];
      newContent[index] = value;
      onUpdate({ ...slide, content: newContent });
    }
    if (field === 'checkItem' && typeof index === 'number') {
      const newCheck = [...(slide.checklist || [])];
      newCheck[index].text = value;
      onUpdate({ ...slide, checklist: newCheck });
    }
  };

  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  // State specific for Slide 11 (O que é o MOVE) interaction
  const [isRevealed, setIsRevealed] = React.useState(isEditMode);

  React.useEffect(() => {
    if (isEditMode) setIsRevealed(true);
  }, [isEditMode]);


  // DESIGN ESPECIAL - SLIDE 18 (PILARES - CAPA ANIMADA)
  if (slide.id === 18) {
    // ... (existing code for slide 18)
    return (
      // ... existing return
      <div key={slide.id} className="w-full h-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 relative overflow-hidden px-6 md:px-16 lg:px-24">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-purple-900/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-indigo-900/10 rounded-full blur-[100px]" />
        </div>

        {/* Left Column: Text Content */}
        <div className="flex-1 flex flex-col justify-center z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[3px] bg-purple-600" />
              <span className="text-xs lg:text-sm font-black uppercase tracking-[0.6em] text-purple-400 font-ui">
                ESTRUTURA
              </span>
            </div>

            <h2 className="text-[clamp(2.5rem,10vw,8rem)] font-display leading-[0.85] text-white uppercase tracking-tighter mb-6 lg:mb-10">
              PILARES<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">DO MOVE</span>
            </h2>

            <div className="space-y-6 lg:space-y-8">
              {/* Weak Pillar Warning */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="pl-4 lg:pl-6 border-l-2 border-red-500/30"
              >
                <p className="text-lg lg:text-3xl text-zinc-500/80 font-display uppercase tracking-tight italic leading-tight">
                  "Se um pilar enfraquece, o MOVE vira apenas reunião."
                </p>
              </motion.div>

              {/* Strong Pillar Affirmation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="pl-4 lg:pl-6 border-l-4 border-purple-500 bg-gradient-to-r from-purple-500/10 to-transparent py-3 lg:py-4 rounded-r-2xl"
              >
                <p className="text-xl lg:text-4xl text-white font-display uppercase tracking-tight font-bold leading-tight shadow-black drop-shadow-lg">
                  Se estão firmes, o MOVE cumpre seu objetivo.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Animated Pillar Visual */}
        <div className="flex-1 h-full flex items-center justify-center relative z-10 min-h-[50vh]">
          <div className="relative w-48 h-[60vh] flex flex-col items-center justify-end">
            {/* Base */}
            <motion.div
              initial={{ opacity: 0, y: 50, scaleX: 0.5 }}
              animate={{ opacity: 1, y: 0, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-48 h-12 bg-zinc-800 rounded-sm border-t border-white/10 relative z-20 shadow-2xl"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20" />
            </motion.div>

            {/* Shaft (The scrolling/growing part) */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100%", opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
              className="w-32 flex-1 bg-gradient-to-b from-zinc-800 to-zinc-900 mx-auto relative overflow-hidden border-x border-white/5"
            >
              {/* Grooves */}
              <div className="absolute inset-0 flex justify-between px-4 opacity-30">
                <div className="w-1 h-full bg-black/50" />
                <div className="w-1 h-full bg-black/50" />
                <div className="w-1 h-full bg-black/50" />
              </div>
              {/* Inner Glow */}
              <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-purple-500/20 blur-xl"
              />
            </motion.div>

            {/* Capital (Top) */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2, type: "spring" }}
              className="w-56 h-16 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-sm border border-white/10 shadow-[0_0_50px_rgba(147,51,234,0.3)] relative z-30 mb-[-1px] flex items-center justify-center"
            >
              <Landmark size={32} className="text-purple-400 opacity-80" />
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-purple-500/50" />
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // DESIGN ESPECIAL - DETALHAMENTO DOS PILARES (Slides 20-26)
  if (slide.id >= 20 && slide.id <= 26) {
    // Icon Logic for Pillars
    let PillarIcon = Crown; // Default
    if (slide.title === "Comunhão") PillarIcon = Users;
    if (slide.title === "Cuidado") PillarIcon = HeartHandshake;
    if (slide.title === "Evangelização") PillarIcon = Speaker;
    if (slide.title === "Ensino") PillarIcon = BookOpen;
    if (slide.title === "Fortalecimento") PillarIcon = Zap;
    if (slide.title === "Crescimento") PillarIcon = TrendingUp;
    if (slide.title === "Multiplicação") PillarIcon = Network;

    const checklistItems = slide.checklist || [];
    const measurementItems = slide.measurement || [];

    return (
      <div className="flex flex-col h-full relative overflow-hidden pb-10 pt-2 lg:pt-8 px-6 md:px-24">
        {/* Subtle Background Icon watermarked */}
        <div className="absolute bottom-[-10%] right-[-5%] text-white opacity-[0.02] pointer-events-none origin-bottom-right rotate-[-10deg]">
          <PillarIcon size={800} strokeWidth={1} />
        </div>

        {/* Header */}
        <header className="mb-8 lg:mb-12 relative z-10 shrink-0">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-purple-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-500 font-ui">
              PILARES DO MOVE
            </span>
          </div>
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <PillarIcon size={24} className="text-white lg:scale-125" />
            </div>
            <div>
              <h2 className="text-[clamp(1.8rem,5vw,4.5rem)] font-display leading-[0.9] text-white uppercase tracking-tighter break-words">
                {slide.title}
              </h2>
              <p className="text-sm lg:text-xl text-zinc-400 font-medium tracking-tight mt-2 max-w-2xl text-balance">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </header>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 flex-1 items-stretch relative z-10 overflow-hidden">

          {/* Left Column: Na Prática */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-[2.5rem] p-5 md:p-8 lg:p-10 backdrop-blur-sm flex flex-col hover:bg-zinc-900/60 transition-colors">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <CheckCircle className="text-purple-400" size={24} />
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">NA PRÁTICA</h3>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 flex-1 justify-center">
              {checklistItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-1 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                  </div>
                  <p className="text-base lg:text-xl text-zinc-200 font-roboto font-light leading-tight">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Measurement (Termômetro) */}
          <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/10 border border-indigo-500/20 rounded-[2.5rem] p-5 md:p-8 lg:p-10 backdrop-blur-sm flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Activity size={100} />
            </div>

            <div className="flex items-center gap-3 mb-6 md:mb-8 relative z-10">
              <Activity className="text-indigo-400" size={24} />
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-400">COMO MEDIR</h3>
            </div>

            <div className="flex flex-col gap-4 md:gap-6 flex-1 justify-center relative z-10">
              {measurementItems.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="bg-black/20 p-4 md:p-5 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-indigo-500/30 transition-colors"
                >
                  {/* Dynamic Icon based on index */}
                  {i === 0 && <Eye className="text-indigo-400 shrink-0" size={20} />}
                  {i === 1 && <UserPlus className="text-indigo-400 shrink-0" size={20} />}
                  {i === 2 && <TrendingUp className="text-indigo-400 shrink-0" size={20} />}

                  <p className="text-base md:text-lg text-indigo-100 font-roboto font-light leading-tight">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    );
  }

  // INTERATIVO - SE UM PILAR CAIR (Slide 27)
  if (slide.id === 27) {
    const [isFallen, setIsFallen] = React.useState(false);

    return (
      <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden px-6 md:px-16 lg:px-24">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ opacity: isFallen ? 0.4 : 0 }}
            className="absolute inset-0 bg-red-900/20 transition-opacity duration-1000"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center max-w-5xl w-full">
          <header className="text-center mb-12 lg:mb-20 space-y-4">
            <motion.h2
              animate={{ color: isFallen ? "#ef4444" : "#ffffff" }}
              className="text-[clamp(2.5rem,8vw,6rem)] font-display leading-[0.9] text-white uppercase tracking-tighter"
            >
              SE UM PILAR CAIR...
            </motion.h2>
            <motion.p
              animate={{ opacity: isFallen ? 1 : 0.5, y: isFallen ? 0 : 10 }}
              className="text-xl lg:text-3xl text-zinc-400 font-roboto font-medium tracking-tight"
            >
              {isFallen ? "A ESTRUTURA INTEIRA SOFRE." : "Toque em um pilar para testar a estrutura."}
            </motion.p>
          </header>

          {/* Pillars Visual */}
          <div className="flex items-end gap-2 lg:gap-4 h-[40vh] mb-12 lg:mb-20 px-4">
            {[...Array(7)].map((_, i) => {
              // Logic: Pillar 3 falls first, knocking 4, 5, 6. 
              // 0,1,2 stay standing? Or maybe 3 falls right?
              // Let's say index 3 (middle) falls right.
              const isTrigger = i === 3;
              const isVictim = i > 3;

              return (
                <motion.div
                  key={i}
                  onClick={() => !isFallen && setIsFallen(true)}
                  animate={isFallen ? {
                    rotate: isTrigger ? 45 : isVictim ? 35 + (i * 2) : 0, // Cascade rotation
                    x: isTrigger ? 20 : isVictim ? 10 : 0,
                    y: isTrigger || isVictim ? 30 : 0
                  } : { rotate: 0, x: 0, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: isFallen ? (isTrigger ? 0 : (i - 3) * 0.1) : 0, // Domino delay
                    type: "spring",
                    bounce: 0.2
                  }}
                  className={`
                        w-12 lg:w-20 bg-gradient-to-t from-zinc-800 to-zinc-700 
                        rounded-sm border-t border-white/20 shadow-2xl relative cursor-pointer
                        ${isTrigger ? 'z-30 hover:bg-zinc-600' : 'z-20'}
                        origin-bottom-right
                     `}
                  style={{ height: `${80 + (i % 2) * 10}%` }} // Varied heights
                >
                  {/* Cracks appear when fallen */}
                  {isFallen && (isTrigger || isVictim) && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 text-red-500/50"
                    >
                      <Activity size={24} className="rotate-45" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Restore Button */}
          <AnimatePresence>
            {isFallen && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="flex flex-col items-center gap-4"
              >
                <button
                  onClick={(e) => { e.stopPropagation(); setIsFallen(false); }}
                  className="px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white font-black uppercase tracking-widest rounded-full shadow-[0_0_40px_rgba(147,51,234,0.5)] transition-all hover:scale-105 active:scale-95 flex items-center gap-3 z-50 text-xl"
                >
                  <ArrowUpRight size={24} />
                  LEVANTE
                </button>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="flex flex-col items-center gap-2 mt-4"
                >
                  <div className="w-[2px] h-8 bg-gradient-to-t from-transparent to-purple-500" />
                  <ArrowRight className="text-purple-400 rotate-[-90deg]" size={24} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }
  // DESIGN ESPECIAL - LÍDERES E ANFITRIÕES (Slide 28)
  if (slide.id === 28) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-black px-6 md:px-16 lg:px-24">

        <div className="relative z-10 flex flex-col items-center">
          {/* Floating Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-8 mb-12"
          >
            <div className="w-16 h-16 rounded-2xl bg-zinc-900/50 border border-white/10 flex items-center justify-center shadow-2xl">
              <Crown size={32} className="text-purple-400" />
            </div>
            <div className="w-2 h-2 rounded-full bg-zinc-700" />
            <div className="w-16 h-16 rounded-2xl bg-zinc-900/50 border border-white/10 flex items-center justify-center shadow-2xl">
              <Home size={32} className="text-indigo-400" />
            </div>
          </motion.div>

          {/* Typography - Main Title */}
          <h2 className="flex flex-col items-center leading-[0.8]">
            <span className="text-[clamp(3.5rem,12vw,9rem)] font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 tracking-tighter">
              LÍDERES
            </span>
            <span className="text-[clamp(1.5rem,4vw,3rem)] font-display text-purple-500 italic tracking-widest my-2 lg:my-4">
              &
            </span>
            <span className="text-[clamp(3.5rem,12vw,9rem)] font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 tracking-tighter">
              ANFITRIÕES
            </span>
          </h2>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <p className="text-xl lg:text-3xl text-zinc-400 font-roboto font-medium tracking-tight text-center max-w-2xl px-4">
              {slide.subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    );
  }
  // DESIGN LÍDER DO MOVE (Slide 29 - Três Seções)
  if (slide.id === 29) {
    const checklistItems = slide.checklist || [];
    const expectations = slide.expectations || [];
    const commitments = slide.commitments || [];

    return (
      <div className="w-full h-full flex flex-col pt-8 px-6 md:px-16 lg:px-24 relative overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-purple-900/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-900/10 rounded-full blur-[100px]" />
        </div>

        {/* Header */}
        <div className="relative z-10 mb-8 lg:mb-12 shrink-0">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[3px] bg-purple-600" />
            <span className="text-xs lg:text-sm font-black uppercase tracking-[0.6em] text-purple-400 font-ui">
              LÍDERES E ANFITRIÕES
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-display leading-none text-white uppercase tracking-tighter">
            LÍDER DO MOVE
          </h2>
        </div>

        {/* 3-Column Content Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 pb-8 relative z-10 content-center overflow-y-auto lg:overflow-visible">

          {/* Column 1: Responsabilidades */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl lg:text-2xl text-purple-300 font-display uppercase tracking-widest pl-2 border-l-4 border-purple-500">
              Responsabilidades
            </h3>
            <div className="flex flex-col gap-3">
              {checklistItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="bg-zinc-900/50 p-4 rounded-xl border border-white/5 flex items-start gap-3"
                >
                  <CheckCircle className="shrink-0 text-purple-500 mt-1" size={16} />
                  <p className="text-sm lg:text-base text-zinc-300 font-roboto font-light leading-tight">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: O que se espera */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl lg:text-2xl text-indigo-300 font-display uppercase tracking-widest pl-2 border-l-4 border-indigo-500">
              Expectativas
            </h3>
            <div className="flex flex-col gap-3">
              {expectations.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (0.1 * i) }}
                  className="bg-zinc-900/50 p-4 rounded-xl border border-white/5 flex items-start gap-3"
                >
                  <User className="shrink-0 text-indigo-500 mt-1" size={16} />
                  <p className="text-sm lg:text-base text-zinc-300 font-roboto font-light leading-tight">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 3: Compromissos */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl lg:text-2xl text-pink-300 font-display uppercase tracking-widest pl-2 border-l-4 border-pink-500">
              Compromissos
            </h3>
            <div className="flex flex-col gap-3">
              {commitments.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (0.1 * i) }}
                  className="bg-zinc-900/50 p-4 rounded-xl border border-white/5 flex items-start gap-3"
                >
                  <Heart className="shrink-0 text-pink-500 mt-1" size={16} />
                  <p className="text-sm lg:text-base text-zinc-300 font-roboto font-light leading-tight">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    );
  }
  // DESIGN ANFITRIÃO E LÍDER EM TREINAMENTO (Slide 30 e 31 - Duas Seções)
  if (slide.id === 30 || slide.id === 31) {
    const checklistItems = slide.checklist || [];
    const posture = slide.posture || [];

    return (
      <div className="w-full h-full flex flex-col pt-8 px-6 md:px-16 lg:px-24 relative overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-pink-900/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-900/10 rounded-full blur-[100px]" />
        </div>

        {/* Header */}
        <div className="relative z-10 mb-8 lg:mb-12 shrink-0">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[3px] bg-purple-600" />
            <span className="text-xs lg:text-sm font-black uppercase tracking-[0.6em] text-purple-400 font-ui">
              LÍDERES E ANFITRIÕES
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-display leading-none text-white uppercase tracking-tighter">
            {slide.title}
          </h2>
        </div>

        {/* 2-Column Content Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pb-8 relative z-10 content-center overflow-y-auto lg:overflow-visible">

          {/* Column 1: Responsabilidades */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl lg:text-2xl text-purple-300 font-display uppercase tracking-widest pl-2 border-l-4 border-purple-500">
              Responsabilidades
            </h3>
            <div className="flex flex-col gap-3">
              {checklistItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="bg-zinc-900/50 p-4 rounded-xl border border-white/5 flex items-start gap-3"
                >
                  <CheckCircle className="shrink-0 text-purple-500 mt-1" size={16} />
                  <p className="text-sm lg:text-base text-zinc-300 font-roboto font-light leading-tight">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Postura */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl lg:text-2xl text-pink-300 font-display uppercase tracking-widest pl-2 border-l-4 border-pink-500">
              Postura
            </h3>
            <div className="flex flex-col gap-3">
              {posture.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (0.1 * i) }}
                  className="bg-zinc-900/50 p-4 rounded-xl border border-white/5 flex items-start gap-3"
                >
                  <Heart className="shrink-0 text-pink-500 mt-1" size={16} />
                  <p className="text-sm lg:text-base text-zinc-300 leading-tight">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    );
  }

  // DESIGN MOVE NA PRÁTICA - ROTEIRO (Slide 32)
  if (slide.id === 32) {
    const timeline = slide.timeline || [];

    // Header Padrão Refatorado para Slide 32
    // Usando a mesma estrutura do header padrão (linhas 1428 em diante)
    const StandardHeader = () => (
      <header className="mb-8 lg:mb-12 relative z-10 px-6 md:px-16 lg:px-24 pt-8 lg:pt-0">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-8 h-[2px] bg-purple-600" />
          <span className="text-[9px] font-black uppercase tracking-[0.6em] text-zinc-500 font-ui">
            {slide.reference || "MOVE"}
          </span>
        </div>
        <div className="relative">
          <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-display leading-none text-white uppercase tracking-tighter">
            {slide.title}
          </h2>
        </div>
        {slide.subtitle && (
          <div className="mt-6 flex gap-6 items-center">
            <div className="w-[2px] h-10 bg-zinc-800" />
            <p className="text-xl lg:text-[3.2vh] text-zinc-500 font-roboto font-bold tracking-tight max-w-4xl">
              {slide.subtitle}
            </p>
          </div>
        )}
      </header>
    );

    return (
      <div className="w-full h-full flex flex-col pt-4 lg:pt-0 relative overflow-hidden group">
        {/* REMOVED CUSTOM BACKGROUND PER REQUEST - Uses Global App Background */}

        {/* Header - Fixed Top */}
        <StandardHeader />

        {/* CONTENT CONTAINER */}
        <div className="flex-1 relative w-full h-full overflow-hidden">

          {/* --- MOBILE LAYOUT (Vertical/Purple) --- */}
          <div className="lg:hidden w-full h-full overflow-y-auto pb-20 px-6 md:px-16 scrollbar-hide">
            <div className="relative border-l-2 border-purple-500/20 ml-3 pl-8 flex flex-col gap-6 pt-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="relative group block"
                >
                  <div className="absolute -left-[38px] top-6 w-3 h-3 bg-black border border-purple-400 rotate-45 group-hover:bg-purple-400 group-hover:scale-150 transition-all shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

                  <div className="flex flex-col bg-purple-900/10 border border-white/5 p-5 rounded-br-2xl clip-path-polygon group-hover:border-purple-500/50 group-hover:bg-purple-900/40 transition-all backdrop-blur-md">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-purple-400">
                        <Clock size={14} />
                        <span className="text-xs uppercase tracking-widest font-bold font-mono">{item.time}</span>
                      </div>
                      <span className="text-[9px] text-zinc-600 font-mono">0{i + 1}</span>
                    </div>
                    <p className="text-zinc-100 text-lg font-display uppercase leading-none tracking-tight">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- DESKTOP LAYOUT (Grid of Cards - Clean & Readable) --- */}
          <div className="hidden lg:flex w-full h-full flex-col justify-center relative px-6 md:px-16 lg:px-24">
            <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-zinc-900/40 border border-white/5 p-6 rounded-2xl hover:bg-zinc-800/60 hover:border-purple-500/30 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <span className="text-6xl font-black font-display">{i + 1}</span>
                  </div>

                  <div className="flex flex-col gap-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider group-hover:bg-purple-500 group-hover:text-white transition-colors">
                        {item.time}
                      </div>
                      <div className="h-[1px] flex-1 bg-zinc-800 group-hover:bg-purple-500/30 transition-colors" />
                    </div>

                    <p className="text-xl text-zinc-100 font-display font-bold uppercase leading-tight tracking-tight">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // DESIGN FINALIZAÇÃO (Slide 39)
  if (slide.id === 39) {
    return (
      <div className="flex flex-col h-full relative px-6 md:px-16 lg:px-24 items-center justify-center text-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-purple-600/20 rounded-full blur-[120px] opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-12 max-w-4xl">
          {/* Logo with Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-purple-500/30 blur-2xl rounded-full" />
            <img
              src="logotipo-final.png"
              alt="MVP MOVE Logo"
              className="w-48 lg:w-64 h-auto relative z-10 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]"
            />
          </motion.div>

          {/* Closing Message */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl lg:text-4xl text-zinc-300 font-display font-light"
            >
              Bom, é isso.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[clamp(2.5rem,6vw,5rem)] font-display font-black uppercase leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 tracking-tighter"
            >
              VAMOS JUNTOS <br /><span className="text-purple-500">ATÉ O FINAL.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xl lg:text-2xl text-zinc-400 font-mono uppercase tracking-[0.2em] pt-4"
            >
              Ninguém fica pra trás!
            </motion.p>
          </div>
        </div>
      </div>
    );
  }

  if (slide.type === 'capa' && !isEditMode) {
    const isDnaSlide = slide.title.includes("DNA");

    return (
      <div key={slide.id} className="relative flex flex-col items-start justify-center h-full w-full px-6 md:px-16 lg:px-24">
        {/* Número da página gigante no fundo */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[45vh] leading-none text-white opacity-[0.015] select-none pointer-events-none hidden lg:block">
          {String(currentIndex + 1).padStart(2, '0')}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full"
        >
          {isDnaSlide && (
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="mb-8 text-purple-600"
            >
              <Dna size={80} className="lg:w-32 lg:h-32" strokeWidth={1.5} />
            </motion.div>
          )}

          <h2 className="text-[clamp(4rem,15vw,12rem)] lg:text-[18vh] font-display leading-[0.75] text-white uppercase tracking-tighter mb-4">
            {slide.title}
          </h2>

          {slide.subtitle && (
            <div className="max-w-4xl">
              <h3 className="text-[clamp(1.5rem,5vw,4rem)] lg:text-[6vh] font-display leading-[0.9] text-white tracking-tight opacity-90">
                {slide.subtitle.split('\n').map((line, i) => (
                  <span key={i} className="block">
                    {line.split(/(Servir com Excelência)/g).map((part, j) =>
                      part === "Servir com Excelência" ? (
                        <span key={j} className="text-purple-600 shadow-purple-600/20">{part}</span>
                      ) : part
                    )}
                  </span>
                ))}
              </h3>
            </div>
          )}

          {slide.expandableContent && (
            <div className="mt-20 flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-10">
              <div className="w-16 h-1 lg:w-24 lg:h-[3px] bg-purple-600 shadow-[0_0_20px_rgba(147,51,234,0.6)]" />
              <div className="flex flex-col">
                {slide.expandableContent.split('\n').map((line, i) => (
                  <p key={i} className={`text-zinc-400 font-medium tracking-tight ${i === 0 ? 'text-xl lg:text-2xl text-zinc-300' : 'text-sm lg:text-lg'}`}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    );
  }

  // INTERAÇÃO ESPECIAL - SLIDE 11 (O QUE É O MOVE)
  if (slide.id === 11) {
    return (
      <div
        key={slide.id}
        className="w-full h-full flex flex-col items-center justify-center relative min-h-[50vh] px-6 md:px-16 lg:px-24"
        onClick={() => !isRevealed && setIsRevealed(true)}
      >
        <AnimatePresence>
          {!isRevealed ? (
            <motion.div
              key="intro"
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              className="cursor-pointer group flex flex-col items-center gap-8 md:gap-12"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute -inset-10 bg-purple-600/20 blur-[60px] rounded-full animate-pulse" />
                <h2 className="text-[clamp(3rem,8vw,7rem)] font-display leading-none text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-200 uppercase tracking-tighter relative z-10 text-center">
                  {Array.from("O QUE É").map((char, i) => (
                    <motion.span
                      key={`line1-${i}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0, delay: i * 0.1 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <br />
                  <span className="text-purple-500">
                    {Array.from("O MOVE").map((char, i) => (
                      <motion.span
                        key={`line2-${i}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0, delay: 0.8 + (i * 0.1) }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                </h2>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-3 text-zinc-400 uppercase tracking-[0.3em] text-xs md:text-sm font-bold bg-white/5 px-6 py-3 rounded-full border border-white/10 group-hover:bg-white/10 group-hover:border-purple-500/50 transition-colors"
              >
                <MousePointerClick size={20} />
                <span>Clique Aqui</span>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full flex-1 flex flex-col"
            >
              {/* Header Animado */}
              <header className="mb-12 lg:mb-16 flex items-center gap-6">
                <div className="w-1 h-12 bg-purple-600" />
                <h2 className="text-[3vh] lg:text-[4vh] font-display text-zinc-500 uppercase tracking-widest">
                  O QUE É O MOVE
                </h2>
              </header>

              <div className="flex-1 flex flex-col justify-center gap-6 lg:gap-8 max-w-5xl mx-auto w-full">
                {slide.content && slide.content.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.2 + 0.3, type: "spring", stiffness: 50 }}
                    className={`
                        p-6 lg:p-10 rounded-[2rem] border relative overflow-hidden
                        ${i === 0
                        ? 'bg-purple-600 border-purple-500 shadow-[0_20px_60px_rgba(147,51,234,0.2)]'
                        : 'bg-zinc-900/50 border-white/5 hover:bg-zinc-900 transition-colors'}
                      `}
                  >
                    {/* Efeito Glow para o primeiro item */}
                    {i === 0 && (
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full mix-blend-overlay pointer-events-none" />
                    )}

                    <p className={`
                        font-medium leading-tight
                        ${i === 0
                        ? 'text-2xl lg:text-[4vh] text-white font-display uppercase tracking-tight'
                        : 'text-xl lg:text-[3vh] text-zinc-300'}
                      `}>
                      {i === 0 ? (
                        <>
                          <span className="opacity-60 block text-sm tracking-widest mb-2 font-sans">SIGNIFICADO</span>
                          MOVE - <span className="text-purple-200">Visão</span> e <span className="text-purple-200">Expansão</span>
                        </>
                      ) : item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // DESIGN ESPECIAL - SLIDE 12 (A PRÁTICA DA IGREJA)
  if (slide.id === 12) {
    return (
      <div key={slide.id} className="w-full h-full flex flex-col items-center justify-center relative z-10 overflow-hidden px-6 md:px-16 lg:px-24">
        {/* Background Sparkles - Mantendo sutil */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-ping opacity-20" />
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-white rounded-full animate-pulse opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto text-center flex flex-col gap-16 lg:gap-24 relative z-20 px-8">
          {/* Primeira Parte: O CULTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <p className="text-[clamp(1.8rem,4vw,3.5rem)] font-display uppercase leading-normal text-white tracking-tight drop-shadow-lg">
              O culto é onde a igreja se reúne
              <br />
              <span className="text-purple-200 font-bold">pra celebrar e adorar.</span>
            </p>
          </motion.div>

          {/* Segunda Parte: O MOVE */}
          <div className="relative flex flex-col items-center gap-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8"
            />

            <h2 className="flex flex-col items-center text-white uppercase tracking-tighter relative z-10">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-[clamp(3.5rem,8vw,8rem)] font-display leading-none mb-4"
              >
                O <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-600 filter drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">MOVE</span>
              </motion.div>

              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-[clamp(1.2rem,2.5vw,2rem)] font-sans tracking-[0.2em] text-zinc-300 font-bold mb-4"
              >
                É ONDE ELA ACONTECE NA
              </motion.span>

              <motion.span
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-[clamp(4rem,10vw,10rem)] leading-[0.8] font-display text-transparent bg-clip-text bg-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                PRÁTICA
              </motion.span>
            </h2>
          </div>
        </div>
      </div>
    );
  }

  // DESIGN ESPECIAL - SLIDE 13 (Coracao da Igreja)
  if (slide.id === 13) {
    const cards = [
      { text: "Gente Ferida", icon: AlertCircle, color: "text-red-400", border: "border-red-500/20", bg: "bg-red-500/10" },
      { text: "Sem Acompanhamento", icon: UserX, color: "text-orange-400", border: "border-orange-500/20", bg: "bg-orange-500/10" },
      { text: "Sem Discipulado", icon: UserMinus, color: "text-yellow-400", border: "border-yellow-500/20", bg: "bg-yellow-500/10" },
      { text: "Sem Amadurecimento", icon: TrendingDown, color: "text-zinc-400", border: "border-zinc-500/20", bg: "bg-zinc-500/10" }
    ];

    return (

      <div key={slide.id} className="w-full h-full flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 relative z-10 px-6 md:px-16 lg:px-24">
        {/* Left Column: Title */}
        <div className="w-full flex flex-col justify-start lg:justify-center space-y-8 pt-24 lg:pt-0">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-8 h-[2px] bg-purple-600" />
            <span className="text-[9px] font-black uppercase tracking-[0.6em] text-zinc-500 font-ui">MOVE</span>
          </div>
          <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] lg:text-[7vh] font-display leading-[0.9] text-white uppercase tracking-tighter">
            {slide.title}
          </h2>
          <div className="text-xl lg:text-[3vh] text-zinc-400 leading-relaxed font-medium">
            <div className="flex items-center gap-3">
              {slide.content[0]}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                <Heart size={20} className="text-purple-500 fill-purple-500" />
              </motion.div>
            </div>
            <br />
            <span className="text-white font-bold">Uma igreja pode ter culto forte e mesmo assim ter:</span>
          </div>
        </div>

        {/* Right Column: Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-5 lg:p-6 rounded-[2rem] border ${card.border} ${card.bg} flex flex-col items-start gap-3 hover:scale-105 transition-transform`}
            >
              <card.icon className={card.color} size={28} />
              <span className={`text-base lg:text-xl font-bold uppercase leading-tight ${card.color}`}>
                {card.text}
              </span>
            </motion.div>
          ))}

          {/* Callout / Nota de Liderança (mantido se existir) */}
          {slide.callout && (
            <motion.div
              variants={itemVariants}
              className="col-span-1 sm:col-span-2 p-8 lg:p-10 bg-purple-700 rounded-[2.5rem] shadow-[0_20px_50px_rgba(88,28,135,0.3)] relative overflow-hidden group mt-4"
            >
              <div className="absolute -right-10 -bottom-10 opacity-10 rotate-12 group-hover:scale-110 transition-transform duration-1000">
                <Quote size={150} />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles size={16} className="text-purple-200" />
                <h4 className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">NOTA DE LIDERANÇA</h4>
              </div>
              <p className="text-white font-display text-xl lg:text-2xl leading-[1] uppercase italic tracking-tighter relative z-10">
                {slide.callout}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  // DESIGN ESPECIAL - SLIDE 14 (EQUILIBRIO)
  if (slide.id === 14) {
    const [isVerseOpen, setIsVerseOpen] = React.useState(false);

    return (
      <div key={slide.id} className="w-full h-full flex flex-col items-center justify-between lg:justify-center py-12 lg:py-0 relative z-10 overflow-y-auto lg:overflow-visible scrollbar-hide px-6 md:px-16 lg:px-24">

        {/* Top Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full text-center mb-6 lg:mb-12 pt-8 lg:pt-12 z-20 relative"
        >
          <div className="inline-block py-2 px-4 lg:px-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md max-w-[90%] pointer-events-auto">
            <p className="text-zinc-400 text-xs lg:text-base uppercase tracking-widest font-bold leading-tight">
              {slide.content[0]}
            </p>
          </div>
        </motion.div>

        {/* Main Balance Visual */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-32 w-full max-w-7xl flex-1 mt-8 lg:mt-0">

          {/* TEMPLO */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-4 lg:gap-6 group"
          >
            <div className="w-24 h-24 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-zinc-800 to-black border border-zinc-700 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 relative z-10">
              <Landmark size={40} className="text-zinc-300 lg:w-24 lg:h-24" strokeWidth={1} />
            </div>
            <h3 className="text-3xl lg:text-6xl font-display text-zinc-500 uppercase tracking-tight group-hover:text-white transition-colors">
              TEMPLO
            </h3>
          </motion.div>

          {/* SCALE / CENTER */}
          <div className="flex flex-col items-center gap-4 relative py-4 lg:py-0">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="w-12 h-12 lg:w-20 lg:h-20 bg-purple-600 rounded-xl lg:rounded-2xl rotate-45 flex items-center justify-center shadow-[0_0_50px_rgba(147,51,234,0.5)] z-10 relative"
            >
              <Scale size={24} className="text-white -rotate-45 lg:w-10 lg:h-10" />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[2px] bg-zinc-800 -z-10 hidden lg:block" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[150%] bg-zinc-800 -z-10 lg:hidden" />
          </div>

          {/* CASA */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-4 lg:gap-6 group"
          >
            <div className="w-24 h-24 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-zinc-800 to-black border border-zinc-700 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 relative z-10">
              <Home size={40} className="text-zinc-300 lg:w-24 lg:h-24" strokeWidth={1} />
            </div>
            <h3 className="text-3xl lg:text-6xl font-display text-zinc-500 uppercase tracking-tight group-hover:text-white transition-colors">
              CASA
            </h3>
          </motion.div>

        </div>

        {/* Bottom Conclusion + Verse */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 lg:mt-0 text-center space-y-4 lg:space-y-6 pb-8 lg:pb-12 w-full flex flex-col items-center justify-end"
        >
          <div>
            <h2 className="text-[clamp(3rem,8vw,7rem)] font-display uppercase leading-none text-white tracking-tighter">
              EQUILÍBRIO
            </h2>
            <p className="text-lg lg:text-3xl text-purple-200 font-medium max-w-sm lg:max-w-3xl mx-auto px-4 leading-tight lg:leading-normal mt-2 lg:mt-4">
              A força estava na mistura: <br className="lg:hidden" /> <span className="text-white font-bold">Celebração</span> + <span className="text-white font-bold">Vida Compartilhada</span>
            </p>
          </div>

          <motion.button
            onClick={() => setIsVerseOpen(!isVerseOpen)}
            className="group flex flex-col items-center gap-2 mt-4 lg:mt-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-purple-600/20 group-hover:border-purple-500/50 transition-all">
              <BookOpen size={16} className="text-purple-400" />
              <span className="text-xs lg:text-sm font-bold tracking-widest text-zinc-400 group-hover:text-white transition-colors">ATOS 2:46</span>
              <AnimatePresence>
                {isVerseOpen ? <ArrowUpRight size={14} className="text-zinc-500" /> : <Quote size={14} className="text-zinc-500" />}
              </AnimatePresence>
            </div>
          </motion.button>

          <AnimatePresence>
            {isVerseOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden max-w-2xl mx-auto px-6"
              >
                <div className="pt-4 pb-2 text-center">
                  <p className="text-lg lg:text-xl text-zinc-300 italic font-serif leading-relaxed">
                    "Diariamente perseveravam unânimes no <span className="text-purple-400 font-bold">templo</span>, partiam pão de <span className="text-purple-400 font-bold">casa em casa</span> e tomavam as suas refeições com alegria e singeleza de coração..."
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    );
  }

  // DESIGN ESPECIAL - SLIDE 15 (IMPACTO REAL)
  if (slide.id === 15) {
    const impactItems = slide.checklist || [];
    const getIcon = (index: number) => {
      switch (index) {
        case 0: return ShieldAlert;
        case 1: return Stethoscope;
        case 2: return HelpCircle;
        case 3: return HeartHandshake;
        case 4: return Lightbulb;
        default: return CheckCircle;
      }
    };

    return (
      <div className="flex flex-col h-full px-6 md:px-16 lg:px-24 justify-center">
        <header className="mb-8 lg:mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-purple-600" />
            <span className="text-[9px] font-black uppercase tracking-[0.6em] text-zinc-500 font-ui">MOVE</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] lg:text-[7vh] font-display leading-[0.9] text-white uppercase tracking-tighter">
            {slide.title}
          </h2>
        </header>

        <div key={slide.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 pb-20 overflow-y-auto">
          {impactItems.map((item, i) => {
            const Icon = getIcon(i);
            const isLast = i === impactItems.length - 1;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-5 lg:p-8 rounded-[2rem] bg-zinc-900/50 border border-white/5 hover:bg-zinc-800 transition-colors group ${isLast ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-purple-400 group-hover:text-purple-300" size={20} />
                </div>
                <p className="text-base lg:text-xl text-zinc-300 font-medium leading-tight uppercase">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  // DESIGN ESPECIAL - SLIDE 16 (O QUE O MOVE É) - TEM A POSITIVO
  if (slide.id === 16) {
    const positiveItems = slide.content || [];
    const getPositiveIcon = (index: number) => {
      switch (index) {
        case 0: return Users; // Família
        case 1: return Home; // Casas
        case 2: return BookOpen; // Discipulado
        case 3: return HeartHandshake; // Cuidado
        case 4: return Stethoscope; // Cura
        default: return CheckCircle;
      }
    };

    return (
      <div className="flex flex-col h-full relative px-6 md:px-16 lg:px-24 justify-center">
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none text-green-900">
          <CheckCircle size={400} />
        </div>

        <header className="mb-8 lg:mb-12 relative z-10 pl-4 w-full">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-8 h-[2px] bg-green-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-500/80 font-ui text-left">
              O QUE É
            </span>
          </div>
          <h2 className="text-[clamp(3.5rem,6vw,6rem)] lg:text-[7vh] font-display leading-[0.9] text-white uppercase tracking-tighter text-left">
            {slide.title}
          </h2>
        </header>

        <div key={slide.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 pb-20 overflow-y-auto relative z-10 w-full">
          {positiveItems.map((item, i) => {
            const Icon = getPositiveIcon(i);
            const isLast = i === positiveItems.length - 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-start gap-4 lg:gap-6 p-5 lg:p-8 rounded-[2rem] bg-zinc-900/50 border border-green-500/20 hover:border-green-500/50 hover:bg-zinc-800 transition-all group ${isLast ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="min-w-10 h-10 lg:min-w-12 lg:h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform mt-1">
                  <Icon className="text-green-500" size={20} />
                </div>
                <p className="text-base lg:text-lg text-zinc-200 font-roboto font-light leading-tight">
                  {item}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  // DESIGN ESPECIAL - SLIDE 17 (O QUE O MOVE NÃO É) - TEMA NEGATIVO
  if (slide.id === 17) {
    const negativeItems = slide.checklist || [];
    const getNegativeIcon = (index: number) => {
      switch (index) {
        case 0: return MicOff; // Não é culto
        case 1: return Globe; // Apenas oração (usando globo como 'geral') ou Activity
        case 2: return Speaker; // Ouvintes passivos
        case 3: return Lock; // Grupo fechado
        case 4: return Coffee; // Bate papo
        case 5: return Tent; // Comunhão sem objetivo
        default: return XCircle;
      }
    };

    return (
      <div className="flex flex-col h-full relative px-6 md:px-16 lg:px-24 justify-center">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <XCircle size={400} className="text-red-500" />
        </div>

        <header className="mb-8 lg:mb-12 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-red-600" />
            <span className="text-[9px] font-black uppercase tracking-[0.6em] text-red-500/60 font-ui">O QUE NÃO É</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] lg:text-[7vh] font-display leading-[0.9] text-white uppercase tracking-tighter">
            {slide.title}
          </h2>
        </header>

        <div key={slide.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 pb-20 overflow-y-auto relative z-10">
          {negativeItems.map((item, i) => {
            const Icon = getNegativeIcon(i);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-5 lg:p-8 rounded-[2rem] bg-red-950/10 border border-red-900/30 hover:bg-red-900/20 transition-colors group flex items-start gap-4"
              >
                <div className="min-w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                  <Icon className="text-red-500/80 group-hover:text-red-500" size={20} />
                </div>
                <p className="text-base lg:text-lg text-zinc-300 font-roboto font-light leading-tight group-hover:text-red-200 transition-colors">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  // DESIGN SAUDE DO MOVE (Slide 35 - Index 36) - SECTION BREAK
  if (slide.id === 35) {
    return (
      <div key={slide.id} className="relative w-full h-full flex items-center justify-center overflow-hidden px-6 md:px-16 lg:px-24">
        {/* Background Visuals */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.2),transparent_70%)]" />

        <div className="relative z-10 text-center px-8 flex flex-col items-center gap-8 lg:gap-12 max-w-5xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Quote size={40} className="text-purple-500 mb-6 lg:mb-8 mx-auto opacity-50" />
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-display uppercase leading-[1.1] text-white tracking-tight drop-shadow-2xl">
              {slide.question || slide.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          </motion.div>
        </div>
      </div>
    );
  }

  // DESIGN CONFIDENCIALIDADE (Slide 36)
  if (slide.id === 36) {
    const rawContent = slide.content || slide.checklist?.map(c => c.text) || [];
    // Extract first item as Headline if it exists, otherwise empty
    const headline = rawContent.length > 0 ? rawContent[0] : null;
    // Remaining items for cards
    const items = rawContent.length > 0 ? rawContent.slice(1) : [];

    return (
      <div className="flex flex-col h-full relative px-6 md:px-16 lg:px-24 justify-center">
        {/* Background Icon */}
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 text-purple-900/10 pointer-events-none">
          <Lock size={600} strokeWidth={0.5} />
        </div>

        <header className="mb-12 relative z-10 max-w-4xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-purple-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-purple-500/80 font-ui">
              HONRA
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] lg:text-[7vh] font-display leading-[0.9] text-white uppercase tracking-tighter mb-6">
            {slide.title}
          </h2>

          {/* First Item as Visual Headline */}
          {headline && (
            <div className="bg-purple-900/20 border-l-4 border-purple-500 py-3 px-6 rounded-r-xl inline-block backdrop-blur-sm">
              <p className="text-xl lg:text-3xl text-white font-display uppercase tracking-tight flex items-center gap-3">
                {headline}
              </p>
            </div>
          )}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 w-full max-w-6xl">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-center gap-4 p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-purple-500/50 hover:bg-zinc-900 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <ShieldAlert size={20} className="text-purple-400 group-hover:text-purple-200" />
              </div>
              <p className="text-lg lg:text-xl text-zinc-300 font-medium group-hover:text-white transition-colors capitalize">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // DESIGN CRESCIMENTO E MULTIPLICAÇÃO (Slide 37)
  if (slide.id === 37) {
    const rawContent = slide.content || [];
    // Extract first item as Hero Statement
    const heroStatement = rawContent.length > 0 ? rawContent[0] : null;
    // Remaining items for cards
    const conditions = rawContent.length > 0 ? rawContent.slice(1) : [];

    return (
      <div className="flex flex-col h-full relative px-6 md:px-16 lg:px-24 justify-center overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute top-0 right-[-10%] opacity-[0.03] pointer-events-none">
          <Network size={800} strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-0 left-[-10%] opacity-[0.03] pointer-events-none rotate-180">
          <Network size={600} strokeWidth={0.5} />
        </div>

        <header className="mb-12 relative z-10 max-w-5xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-purple-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-purple-500/80 font-ui">
              EXPANSÃO
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] lg:text-[7vh] font-display leading-[0.9] text-white uppercase tracking-tighter mb-8">
            {slide.title}
          </h2>

          {/* Hero Statement */}
          {heroStatement && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative pl-8 border-l-4 border-purple-500"
            >
              <p className="text-2xl lg:text-4xl text-white font-display uppercase leading-tight tracking-tight">
                {heroStatement.split("dividr amigos").map((part, i) => (
                  i === 0 ? (
                    <>
                      Multiplicação não é <span className="text-zinc-500 line-through decoration-purple-500/50">dividir amigos</span>.
                      <br />
                      É <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-bold">proteger o cuidado</span> e abrir espaço.
                    </>
                  ) : null
                ))}
                {/* Fallback if split doesn't match exactly (for safety) */}
                {!heroStatement.includes("dividir amigos") && heroStatement}
              </p>
            </motion.div>
          )}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 w-full max-w-6xl">
          {conditions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="group flex flex-col gap-6 p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/80 hover:border-purple-500/30 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-700">
                {i === 0 ? <Users size={120} /> : <Leaf size={120} />}
              </div>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-purple-500/50 transition-colors">
                {i === 0 ? <Users size={32} className="text-purple-400" /> : <HeartHandshake size={32} className="text-indigo-400" />}
              </div>

              <div>
                <h4 className="text-zinc-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                  {i === 0 ? "MOMENTO CERTO" : "COMO ACONTECE"}
                </h4>
                <p className="text-xl lg:text-2xl text-zinc-200 font-medium leading-tight group-hover:text-white transition-colors">
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // DESIGN COMUNICAÇÃO E HONRA (Slide 38)
  if (slide.id === 38) {
    // Custom content mapping for visual impact
    const cards = [
      {
        id: 'com1',
        icon: MessageSquare,
        title: "EVITE EXCESSO",
        desc: "Nada de correntes, links aleatórios ou spam no grupo.",
        highlight: false
      },
      {
        id: 'com2',
        icon: ShieldAlert,
        title: "EVITE POLÊMICAS",
        desc: "Preserve a a unidade. O foco é Cristo, não debates.",
        highlight: false
      },
      {
        id: 'com3',
        icon: Lock,
        title: "ASSUNTOS SENSÍVEIS",
        desc: "Trate sempre no privado, com honra e discrição.",
        highlight: false
      },
      {
        id: 'com4',
        icon: PartyPopper,
        title: "CELEBRE",
        desc: "Vibre com cada nova vida, batismo e avanço!",
        highlight: true // Featured card
      }
    ];

    return (
      <div className="flex flex-col h-full relative px-6 md:px-16 lg:px-24 justify-center">
        {/* Background Visuals */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[5%] opacity-[0.02]">
            <MessageSquare size={600} strokeWidth={0.5} />
          </div>
        </div>

        <header className="mb-12 lg:mb-16 relative z-10 max-w-4xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-purple-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-purple-500/80 font-ui">
              COMUNIDADE
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] lg:text-[7vh] font-display leading-[0.9] text-white uppercase tracking-tighter mb-6">
            {slide.title}
          </h2>
          <p className="text-xl lg:text-2xl text-zinc-400 font-medium tracking-tight max-w-2xl border-l-2 border-zinc-800 pl-6">
            Boas práticas para manter unidade, clareza e cuidado no grupo.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 w-full max-w-6xl">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`
                   group relative p-8 rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col gap-4
                   ${card.highlight
                  ? 'bg-purple-900/10 border-purple-500/40 hover:bg-purple-900/20 hover:border-purple-500/70 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]'
                  : 'bg-zinc-900/40 border-white/5 hover:bg-zinc-800/60 hover:border-purple-500/20 hover:-translate-y-1 hover:shadow-xl'}
                `}
            >
              {/* Hover Glow Effect */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-[60px] transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${card.highlight ? 'bg-purple-500/20' : 'bg-white/5'}`} />

              <div className="flex items-start justify-between">
                <div className={`
                       w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300
                       ${card.highlight
                    ? 'bg-purple-500 text-white border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                    : 'bg-white/5 text-purple-400 border-white/10 group-hover:bg-purple-500/10 group-hover:text-purple-300'}
                    `}>
                  <card.icon size={28} strokeWidth={card.highlight ? 2 : 1.5} />
                </div>

                {card.highlight && (
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-[10px] font-black uppercase tracking-widest text-purple-200">
                    PRIORIDADE
                  </span>
                )}
              </div>

              <div className="relative z-10">
                <h3 className={`text-xl lg:text-2xl font-display font-bold uppercase mb-2 tracking-tight ${card.highlight ? 'text-white' : 'text-zinc-200 group-hover:text-white'}`}>
                  {card.title}
                </h3>
                <p className={`text-base lg:text-lg leading-relaxed ${card.highlight ? 'text-purple-100' : 'text-zinc-400 group-hover:text-zinc-300'}`}>
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // NOTE: Lines 1516-1517 deleted here in replacement



  // DESIGN FINALIZAÇÃO (Slide 39)
  if (slide.id === 39) {
    return (
      <div className="flex flex-col h-full relative px-6 md:px-16 lg:px-24 items-center justify-center text-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-purple-600/20 rounded-full blur-[120px] opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-12 max-w-4xl">
          {/* Logo with Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-purple-500/30 blur-2xl rounded-full" />
            <img
              src="logotipo-final.png"
              alt="MVP MOVE Logo"
              className="w-48 lg:w-64 h-auto relative z-10 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]"
            />
          </motion.div>

          {/* Closing Message */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl lg:text-4xl text-zinc-300 font-display font-light"
            >
              Bom, é isso.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[clamp(2.5rem,6vw,5rem)] font-display font-black uppercase leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 tracking-tighter"
            >
              VAMOS JUNTOS <br /><span className="text-purple-500">ATÉ O FINAL.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xl lg:text-2xl text-zinc-400 font-mono uppercase tracking-[0.2em] pt-4"
            >
              Ninguém fica pra trás!
            </motion.p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div key={slide.id} className={`relative w-full flex flex-col h-full ${slide.id === 13 ? 'justify-start pt-24 pb-8 lg:justify-center lg:py-0' : 'justify-center py-6 lg:py-0'} px-6 md:px-16 lg:px-24 pb-32 md:pb-0`}>
      {/* Background Page Number Sutil */}
      <div className="absolute -left-16 top-0 font-display text-[22vh] leading-none text-white opacity-[0.008] select-none pointer-events-none hidden lg:block">
        {String(currentIndex + 1).padStart(2, '0')}
      </div>

      <header className={`relative z-10 ${(slide.id === 7 || slide.id === 8) ? 'hidden' : ''} ${(slide.id === 15 || slide.id === 16 || slide.id === 17) ? 'mb-16 lg:mb-32' :
        (slide.id === 34) ? 'mb-6 lg:mb-12' : // Reduced margin for Slide 34
          'mb-12 lg:mb-16'
        }`}>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-8 h-[2px] bg-purple-600" />
          <span className="text-[9px] font-black uppercase tracking-[0.6em] text-zinc-500 font-ui">{slide.reference || "MOVE"}</span>
        </div>
        <div className="relative">
          <h2 className={`${slide.id === 34
            ? 'text-[clamp(1.8rem,5vw,4rem)] lg:text-[7vh]' // Smaller title for Slide 34 to fit "Acompanhamento"
            : 'text-[clamp(2.5rem,8vw,5.5rem)] lg:text-[8.5vh]'
            } font-display leading-[0.9] text-white uppercase tracking-tighter`}>
            {slide.title}
          </h2>
        </div>

        {slide.subtitle && (
          <div className="mt-6 flex gap-6 items-center">
            <div className={`w-[2px] h-10 ${slide.subtitle === "É o REINO!" ? "bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]" : "bg-zinc-800"}`} />

            {slide.subtitle === "É o REINO!" ? (
              <div className="flex items-center gap-3">
                <Crown className="text-amber-500 fill-amber-500/20" size={28} strokeWidth={2.5} />
                <p className="text-2xl lg:text-[3.5vh] text-amber-500 font-black tracking-[0.2em] uppercase drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">
                  {slide.subtitle}
                </p>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <p className="text-xl lg:text-[3.2vh] text-zinc-500 font-roboto font-bold tracking-tight max-w-4xl">
                  {slide.subtitle}
                </p>
                {slide.subtitle === "O QUE QUEREMOS SER" && <Plus size={20} className="text-purple-600" strokeWidth={3} />}
                {slide.subtitle === "O QUE QUEREMOS VER" && <Eye size={20} className="text-purple-600" strokeWidth={2.5} />}
              </div>
            )}
          </div>
        )}
      </header>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10 ${(slide.id === 15 || slide.id === 16 || slide.id === 17) ? 'items-center content-center' : 'items-start'
          }`}
      >
        <div className={`${slide.title === "Somos a MVP" ? "lg:col-span-12 xl:col-span-12" : (slide.id === 8 || slide.id === 7 || slide.id === 9 || slide.id === 10 || slide.id === 19 || slide.id === 15 || slide.id === 16 || slide.id === 17 || slide.id === 34) ? "lg:col-span-12" : "lg:col-span-7 xl:col-span-7"} space-y-12`}>
          {slide.content && (
            <>
              {/* Layout Exclusivo Slide 08 (Nosso compromisso) e 09 (Como Servimos) */}
              {(slide.id === 8 || slide.id === 7) ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 h-full items-center">
                  {/* Coluna Esquerda: Título + Subtítulo/Texto 1 */}
                  <div className="flex flex-col justify-center h-full"> {/* Added h-full to ensure vertical centering context */}
                    {/* Render Title inside for Slide 7 to align with text */}
                    {(slide.id === 7 || slide.id === 8) && (
                      <div className="mb-12">
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-8 h-[2px] bg-purple-600" />
                          <span className="text-[9px] font-black uppercase tracking-[0.6em] text-zinc-500 font-ui">{slide.reference || "MOVE"}</span>
                        </div>
                        <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] lg:text-[8.5vh] font-display leading-[0.9] text-white uppercase tracking-tighter">
                          {slide.title}
                        </h2>
                      </div>
                    )}

                    <p className="text-[clamp(1rem,2vw,1.5rem)] lg:text-[2.5vh] leading-[1.3] text-zinc-100 font-roboto font-light tracking-tight">
                      {slide.content[0]}
                    </p>
                  </div>

                  {/* Coluna Direita: Cards e Callout (específico para slide 7) */}
                  <div className="flex flex-col gap-6 justify-center h-full"> {/* Added h-full */}
                    {slide.content.slice(1).map((point, i) => (
                      <motion.div
                        key={i}
                        variants={itemVariants}
                        className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors shadow-xl"
                      >
                        <p className="text-lg text-zinc-300 font-roboto font-light leading-relaxed">
                          "{point}"
                        </p>
                      </motion.div>
                    ))}

                    {/* Callout reposicionado para Slide 07 (Nosso compromisso) */}
                    {slide.id === 7 && slide.callout && (
                      <motion.div
                        variants={itemVariants}
                        className="p-10 lg:p-12 bg-purple-700 rounded-[3rem] shadow-[0_40px_100px_rgba(88,28,135,0.3)] relative overflow-hidden group mt-4"
                      >
                        <div className="absolute -right-10 -bottom-10 opacity-10 rotate-12 group-hover:scale-110 transition-transform duration-1000">
                          <Quote size={200} />
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                          <Sparkles size={16} className="text-purple-200" />
                          <h4 className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">NOTA DE LIDERANÇA</h4>
                        </div>
                        <p className="text-white font-display text-2xl lg:text-[3vh] leading-[1] uppercase italic tracking-tighter relative z-10 content-edit">
                          {slide.callout}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              ) : slide.id === 34 ? (
                /* Slide 35: Acompanhamento Semanal (Custom Visual Layout) */
                /* Slide 34: Acompanhamento Semanal (Custom Visual Layout) */
                <div className="w-full h-full flex flex-col pt-0 lg:pt-8">
                  {/* Background Effects */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900/20 via-black to-black opacity-80" />
                  <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

                  <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 content-center overflow-y-auto lg:overflow-visible pb-12 pt-12">
                    {/* Left Column: Visual List */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                      <p className="text-lg lg:text-xl text-purple-200 font-display font-medium leading-tight mb-4">
                        <span className="text-purple-500 mr-2">➜</span>
                        {slide.content[0]}
                      </p>

                      <div className="grid grid-cols-1 gap-4">
                        {slide.content.slice(1).map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center gap-4 hover:bg-white/10 hover:border-purple-500/30 transition-all group"
                          >
                            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                              {i === 0 && <UserMinus size={20} className="text-purple-400" />}
                              {i === 1 && <HeartHandshake size={20} className="text-purple-400" />}
                              {i === 2 && <Star size={20} className="text-purple-400" />}
                              {i === 3 && <MessageSquare size={20} className="text-purple-400" />}
                              {i > 3 && <CheckCircle size={20} className="text-purple-400" />}
                            </div>
                            <span className="text-base text-zinc-300 font-roboto font-medium group-hover:text-white transition-colors capitalize">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Key Note */}
                    <div className="lg:col-span-5">
                      <div className="bg-purple-600 p-10 rounded-[2.5rem] relative overflow-hidden shadow-[0_20px_50px_rgba(147,51,234,0.3)] h-full flex flex-col justify-center">
                        <div className="absolute top-0 right-0 p-8 opacity-20">
                          <Quote size={120} className="text-white rotate-12" />
                        </div>

                        <div className="flex items-center gap-2 mb-6 opacity-70">
                          <Sparkles size={16} className="text-white" />
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">NOTA DE LIDERANÇA</span>
                        </div>

                        <p className="relative z-10 text-2xl lg:text-3xl font-display font-bold leading-tight text-white uppercase italic tracking-tight">
                          {slide.callout}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Layout Padrão e Outros Grids */
                <div className={slide.title === "Somos a MVP" ? "grid grid-cols-1 lg:grid-cols-2 gap-12" : "space-y-12"}>
                  {slide.content.map((point, i) => {
                    const isFirst = i === 0;
                    const isGridPage = slide.title === "Somos a MVP";
                    const isHighlightedSlide = slide.id === 6; // Slide 07
                    const isHighlightedText = isHighlightedSlide && i === 1;

                    return (
                      <motion.div
                        key={i}
                        variants={itemVariants}
                        className={`
                          ${isFirst ? 'relative' : 'pl-4 lg:pl-10 border-l border-white/5'}
                          ${isGridPage && isFirst ? 'lg:col-span-2 mb-8' : ''}
                          ${isHighlightedText ? 'bg-purple-900/20 border-l-4 border-purple-500 rounded-r-xl p-6 lg:p-8 shadow-[0_0_30px_rgba(147,51,234,0.1)]' : ''}
                        `}
                      >
                        {isFirst && (
                          <div className="absolute -left-10 top-2 hidden lg:block">
                            <ArrowRight size={24} className="text-purple-600 opacity-50" />
                          </div>
                        )}

                        {isEditMode ? (
                          <textarea
                            value={point}
                            onChange={(e) => handleTextChange('contentItem', e.target.value, i)}
                            className="bg-transparent w-full text-white text-xl outline-none"
                          />
                        ) : (
                          <p className={`
                            ${isFirst
                              ? 'text-[clamp(1.5rem,4vw,2.5rem)] lg:text-[3.8vh] leading-[1.1] text-white font-display tracking-tight'
                              : isHighlightedText
                                ? 'text-xl lg:text-[3vh] text-purple-100 font-roboto font-bold leading-relaxed'
                                : 'text-base lg:text-[2.2vh] text-zinc-400 leading-relaxed font-roboto font-light'}
                          `}>
                            {point.split(/(Servir com Excelência)/g).map((part, k) =>
                              part === "Servir com Excelência" ? (
                                <span key={k} className="text-purple-600 font-black">{part}</span>
                              ) : part
                            )}
                          </p>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </>
          )}

          {slide.checklist && (
            <div className={`grid grid-cols-1 gap-6 ${(slide.title === "Missão" || slide.title === "Visão") ? "md:grid-cols-3" : (slide.title === "Os 7 Pilares") ? "md:grid-cols-3 lg:grid-cols-4" : "md:grid-cols-2"}`}>
              {slide.checklist.map((item, idx) => {
                // Lógica de ícones específicos para a Missão e Visão
                let Icon = CheckCircle;

                // Slide 33: Regras de Ouro (Specific Icon)
                if (slide.id === 33) {
                  Icon = Crown;
                }
                if (slide.title === "Missão") {
                  if (item.id === 'mis1') Icon = MapPin;
                  if (item.id === 'mis2') Icon = Activity;
                  if (item.id === 'mis3') Icon = Home;
                  if (item.id === 'mis4') Icon = BookOpen;
                  if (item.id === 'mis5') Icon = Flame;
                  if (item.id === 'mis6') Icon = ArrowUpRight;
                }
                if (slide.title === "Visão") {
                  if (item.id === 'vis1') Icon = Heart;
                  if (item.id === 'vis2') Icon = Users;
                  if (item.id === 'vis3') Icon = TrendingUp;
                  if (item.id === 'vis4') Icon = Zap;
                  if (item.id === 'vis5') Icon = Globe;
                }
                // Slide 19: 7 Pilares
                // Slide 19: 7 Pilares
                if (slide.title === "Os 7 Pilares") {
                  if (item.id === 'pil1') Icon = Users; // Comunhão
                  if (item.id === 'pil2') Icon = HeartHandshake; // Cuidado
                  if (item.id === 'pil3') Icon = Speaker; // Evangelização
                  if (item.id === 'pil4') Icon = BookOpen; // Ensino
                  if (item.id === 'pil5') Icon = Zap; // Fortalecimento
                  if (item.id === 'pil6') Icon = TrendingUp; // Crescimento
                  if (item.id === 'pil7') Icon = Network; // Multiplicação
                }
                // Slide 28: Líder
                if (slide.title === "Líder do MOVE") {
                  if (item.id === 'lr1') Icon = ShieldAlert;
                  if (item.id === 'lr2') Icon = Speaker; // Talk
                  if (item.id === 'lr3') Icon = UserPlus; // Acompanhar
                  if (item.id === 'lr4') Icon = Heart;
                  if (item.id === 'lr5') Icon = ArrowUpRight; // Delegar
                }
                // Slide 29: Anfitrião
                if (slide.title === "Anfitrião") {
                  Icon = Home;
                  if (item.id === 'ar2') Icon = Clock; // Pontualidade
                  if (item.id === 'ar3') Icon = Smile; // Alegria
                  if (item.id === 'ar4') Icon = Sparkles; // Zelo/Limpeza
                }
                // Slide 30: Líder em treinamento
                if (slide.title === "Líder em treinamento") {
                  Icon = Zap;
                  if (item.id === 'lt1') Icon = Star;
                  if (item.id === 'lt2') Icon = Eye; // Observar
                  if (item.id === 'lt3') Icon = Speaker; // Conduzir
                  if (item.id === 'lt4') Icon = TrendingUp; // Crescente
                }
                // Slide 32: Roteiro
                if (slide.title.includes("Roteiro")) {
                  Icon = Clock;
                  if (item.id === 'rot1') Icon = HeartHandshake;
                  if (item.id === 'rot2') Icon = Sparkles;
                  if (item.id === 'rot3') Icon = BookOpen;
                  if (item.id === 'rot4') Icon = MessageSquare;
                  if (item.id === 'rot5') Icon = Heart;
                  if (item.id === 'rot6') Icon = Coffee;
                }
                // Slide 37: Comunicação
                if (slide.title.includes("Comunicação")) {
                  Icon = MessageSquare;
                  if (item.id === 'com1') Icon = XCircle;
                  if (item.id === 'com2') Icon = ShieldAlert;
                  if (item.id === 'com3') Icon = Lock;
                  if (item.id === 'com4') Icon = PartyPopper;
                }

                // Definir cores dinamicamente (Padrão vs Regras de Ouro)
                const isGold = slide.id === 33;
                const cardBorder = isGold ? "border-amber-500/20 hover:border-amber-500/50" : "border-white/[0.04] hover:border-purple-600/30";
                const cardBg = isGold ? "bg-amber-900/10 hover:bg-amber-900/20" : "bg-white/[0.02] hover:bg-white/[0.05]";
                const iconBg = isGold ? "bg-amber-500/10 border-amber-500/20" : "bg-purple-900/10 border-purple-500/10";
                const iconColor = isGold ? "text-amber-500" : "text-purple-500";
                const textColor = isGold ? "text-amber-100" : "text-zinc-200";

                return (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className={`group flex ${isGold ? 'flex-row items-center gap-6 p-6' : 'flex-col items-start gap-5 p-7'} rounded-[2.5rem] border transition-all h-full ${cardBg} ${cardBorder}`}
                  >
                    <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center border group-hover:scale-110 transition-transform ${iconBg}`}>
                      <Icon className={iconColor} size={24} />
                    </div>
                    <span className={`text-lg ${isGold ? 'lg:text-xl' : 'lg:text-[2.2vh]'} font-bold font-display uppercase tracking-tight leading-tight ${textColor}`}>
                      {item.text}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          )}
        </div>

        {(slide.callout /* Only show sidebar callout if NOT slide 7 (moved) */ && slide.id !== 7 && slide.id !== 34 || slide.question || isEditMode) && (
          <div className="lg:col-span-5 xl:col-span-5 space-y-8 lg:pt-4">
            {((slide.callout && slide.id !== 7) || isEditMode) && (
              <motion.div
                variants={itemVariants}
                className="p-10 lg:p-14 bg-purple-700 rounded-[3.5rem] shadow-[0_40px_100px_rgba(88,28,135,0.3)] relative overflow-hidden group"
              >
                <div className="absolute -right-10 -bottom-10 opacity-10 rotate-12 group-hover:scale-110 transition-transform duration-1000">
                  <Quote size={200} />
                </div>
                <div className="flex items-center gap-3 mb-10">
                  <Sparkles size={16} className="text-purple-200" />
                  <h4 className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">NOTA DE LIDERANÇA</h4>
                </div>
                <p className="text-white font-display text-2xl lg:text-[3.5vh] leading-[1] uppercase italic tracking-tighter relative z-10">
                  {slide.callout}
                </p>
              </motion.div>
            )}

            {(slide.question || isEditMode) && (
              <motion.div
                variants={itemVariants}
                className="p-10 lg:p-14 bg-[#0a0a0a] rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 blur-[60px] rounded-full" />
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center mb-10 border border-white/5">
                  <HelpCircle className="text-purple-500" size={28} />
                </div>
                <h4 className="text-zinc-600 font-bold uppercase tracking-[0.3em] text-[9px] mb-6">MOMENTO DE CONEXÃO</h4>
                <p className="text-white text-2xl lg:text-[3.8vh] font-display leading-[1.05] uppercase tracking-tighter">
                  "{slide.question}"
                </p>
              </motion.div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SlideContent;
