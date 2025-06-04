import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export const AppInfoPanel = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-950 flex flex-col items-center justify-center p-4 sm:p-6 font-sans">
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              className="absolute top-10 left-4 w-40 h-40 sm:top-20 sm:left-10 sm:w-64 sm:h-64 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-600/10 blur-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <motion.div
              className="absolute bottom-10 right-4 w-44 h-44 sm:bottom-20 sm:right-10 sm:w-72 sm:h-72 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10 blur-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            />
          </>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl z-10"
      >
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden">
          {/* Header with animated gradient border */}
          <div className="relative p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "300% 300%"
              }}
            />
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 relative py-6 px-4 sm:px-8">
              <motion.div
                initial={{ rotate: -20, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="absolute top-0 left-0 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl sm:text-3xl">📝</span>
              </motion.div>
              
              <div className="flex flex-col items-center justify-center text-center pt-8 sm:pt-4">
                <motion.h1 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 mb-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Assignment Generator
                </motion.h1>
                <motion.p 
                  className="text-gray-300 max-w-2xl text-sm sm:text-base md:text-lg px-2 sm:px-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Create professional assignment sheets with code snippets and export to PDF
                </motion.p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8"
            >
              {/* Left column */}
              <div className="space-y-5 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-gray-800/50 p-4 sm:p-5 md:p-6 rounded-xl border border-gray-700"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Tool Overview
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    A professional-grade solution for creating, previewing, and exporting assignment sheets with code snippets to PDF. Designed specifically for educators, students, and developers who require polished technical documentation.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-gray-800/50 p-4 sm:p-5 md:p-6 rounded-xl border border-gray-700"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Created By
                  </h3>
                  <div className="flex flex-col gap-3">
                    {[
                      { name: "fab-c14", url: "https://github.com/fab-c14" },
                      { name: "Hazim Bhatt", url: "https://github.com/HazimBhatt" }
                    ].map((creator, index) => (
                      <motion.a
                        key={index}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        href={creator.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-all border border-gray-600"
                      >
                        <div className="bg-gray-600 p-1.5 sm:p-2 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </div>
                        <span className="font-medium text-gray-200 text-sm sm:text-base">{creator.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right column */}
              <div className="space-y-5 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-gray-800/50 p-4 sm:p-5 md:p-6 rounded-xl border border-gray-700"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    Who is this for?
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "Students preparing coding assignments",
                      "Teachers creating programming tasks",
                      "Developers documenting technical solutions",
                      "Open-source maintainers and contributors",
                      "Technical writers creating documentation",
                      "Bootcamp instructors preparing materials"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + (index * 0.1) }}
                        className="flex items-start text-gray-300 text-sm sm:text-base"
                      >
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        </div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-gray-800/50 p-4 sm:p-5 md:p-6 rounded-xl border border-gray-700"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Tailwind CSS", "jsPDF", "Framer Motion", "Radix UI", "shadcn/ui", "Vite"].map((tech, i) => (
                      <motion.span 
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + (i * 0.1) }}
                        className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg text-xs sm:text-sm text-gray-200 border border-gray-600"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              className="mt-8 sm:mt-10 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="relative p-1 rounded-full w-full max-w-xs sm:max-w-none"
                animate={{
                  background: [
                    "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                    "linear-gradient(90deg, #8b5cf6, #ec4899)",
                    "linear-gradient(90deg, #ec4899, #f97316)",
                    "linear-gradient(90deg, #f97316, #3b82f6)",
                    "linear-gradient(90deg, #3b82f6, #8b5cf6)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "300% 300%"
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse blur-md opacity-70"></div>
                  <Link to={"/editor"}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white font-bold text-base sm:text-lg py-3 px-6 sm:py-4 sm:px-10 rounded-full flex items-center justify-center gap-3 group w-full"
                  >
                    <span>Go to Assignment Tool</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut"
                      }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            {/* Footer */}
            <motion.div 
              className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-gray-700/50 text-center text-gray-400 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <p className="flex items-center justify-center gap-1">
                Made with <span className="text-red-400">❤️</span> for educators and developers
              </p>
              <a
                href="https://github.com/fab-c14/Coassignment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 sm:mt-3 text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="sm:w-4 sm:h-4">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div 
        className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 text-xs sm:text-sm text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
      >
        <div className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700">
          with ❤️
        </div>
        <div className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700">
          v1.1.0
        </div>
      </motion.div>
    </div>
  );
};