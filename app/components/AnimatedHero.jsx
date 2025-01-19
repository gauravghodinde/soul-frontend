"use client"

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHero = ({ title = "The World's First Spiritual Insurance Platform", subtitle = "Your soul deserves protection too, not just your mind and body." }) => {
  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const gradientVariants = {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 5,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  return (
    <div className="space-y-4 relative">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        <motion.h1 
          className="text-4xl lg:text-5xl font-bold mb-8 relative"
          animate="animate"
          variants={gradientVariants}
          style={{
            backgroundImage: 'linear-gradient(90deg, #6800ad, #c02af5, #6800ad)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {title}
        </motion.h1>
      </motion.div>

      <motion.div
        className="relative"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <motion.p 
          className="text-lg text-gray-300"
          whileHover={{ 
            scale: 1.02,
            color: '#a78bda',
            transition: { duration: 0.3 }
          }}
        >
          {subtitle}
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 rounded-lg blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ zIndex: -1 }}
      />
    </div>
  );
};

export default AnimatedHero;