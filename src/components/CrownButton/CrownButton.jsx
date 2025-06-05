import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CrownButton = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const navigateTo = (path, e) => {
    e.stopPropagation();
    navigate(path);
    setExpanded(false);
  };

  return (
    <div 
      className="fixed right-5 top-1/2 z-50"
      onClick={handleClick}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <motion.div
        className="flex items-center overflow-hidden rounded-full bg-gradient-to-br from-gray-800/70 to-indigo-900/60 backdrop-blur-xl shadow-2xl border border-gray-600/40"
        animate={{ width: expanded ? 220 : 60 }} // Increased width to fit both buttons
        transition={{ type: 'spring', damping: 15 }}
      >
        <motion.div 
          className="flex items-center justify-center w-14 h-14 p-3"
          animate={{ rotate: expanded ? 360 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className="w-full h-full"
          >
            <motion.path
              d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"
              fill="none"
              stroke="url(#crown-gradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            />
            <defs>
              <linearGradient id="crown-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#FFEC8B" />
                <stop offset="100%" stopColor="#FFD700" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        
        <AnimatePresence>
          {expanded && (
            <motion.div
              className="flex" // Added flex container for both buttons
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                className="flex items-center px-4 py-3 gap-2 text-white"
                onClick={(e) => navigateTo('/', e)}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5"
                >
                  <path 
                    d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm font-medium">Home</span>
              </motion.button>
              
              <motion.button
                className="flex items-center px-4 py-3 gap-2 text-white"
                onClick={(e) => navigateTo('/editor', e)}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5"
                >
                  <path 
                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm font-medium">Tool</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
 
      <motion.div 
        className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-amber-400/30 to-yellow-500/20 blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default CrownButton;