
import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="w-full h-[3px] bg-white/[0.03] rounded-full overflow-hidden relative">
      <motion.div 
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-600 to-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.5)]"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
};

export default ProgressBar;
