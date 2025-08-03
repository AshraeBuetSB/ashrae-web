import React from 'react';
import { motion } from 'framer-motion';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function FloatingCard({ children, className = '', delay = 0 }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 ${className}`}
    >
      {children}
    </motion.div>
  );
}