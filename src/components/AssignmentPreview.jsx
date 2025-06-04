import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFileText, FiUser, FiHash, FiCode, FiTerminal, FiPrinter, FiDownload, FiArrowRight, FiX } from 'react-icons/fi';

export function AssignmentPreview({
  pdfTitle,
  userName,
  rollNo,
  entries,
  onPrint,
  onDownload
}) {
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  const headerMotion = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  // Show toast notification
  const showToast = (message, type = 'info') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  // Handle preview click
  const handlePreview = () => {
    showToast('Preview feature will be available in the upcoming update!', 'info');
  };

  // Handle download click
  const handleDownload = () => {
    showToast('scroll to the bottom to download...', 'info');
    // if (onDownload) onDownload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-950 flex items-center justify-center p-4 font-sans relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between px-4 py-3 rounded-lg shadow-lg min-w-[300px] max-w-md ${
              toast.type === 'success' 
                ? 'bg-green-900/90 border border-green-700/50 text-green-200' 
                : 'bg-blue-900/90 border border-blue-700/50 text-blue-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <span>{toast.message}</span>
            </div>
            <button 
              onClick={() => setToast({ show: false, message: '', type: '' })}
              className="ml-4 text-gray-300 hover:text-white"
            >
              <FiX />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive background elements */}
      <motion.div
        className="absolute top-10 right-5 w-40 h-40 sm:top-20 sm:right-10 sm:w-64 sm:h-64 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-600/10 blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.7, 0.9, 0.7]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl z-10"
      >
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden">
          {/* Responsive header */}
          <div className="relative p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 relative py-4 px-4 sm:py-5 sm:px-6 md:px-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ rotate: -20, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <FiFileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                  
                  <div>
                    <motion.h1 
                      className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      Assignment Preview
                    </motion.h1>
                    <motion.p 
                      className="text-gray-400 text-xs sm:text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Review and export your completed assignment
                    </motion.p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto"
                  >
                    <button
                      onClick={handlePreview}
                      className="w-full px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
                    >
                      <FiPrinter className="w-4 h-4" /> Preview
                    </button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto"
                  >
                    <button
                      onClick={handleDownload}
                      className="w-full px-2  py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white rounded-lg flex items-center justify-center gap-2 shadow-lg text-sm lg:text-base"
                    >
                      <FiDownload className="w-4 h-4" /> Download
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6">
            <div className="flex flex-col">

              <motion.div 
                {...headerMotion}
                className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-br from-gray-800/70 to-gray-900/80 rounded-xl border border-gray-700/50 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/5 to-transparent blur-sm"></div>
                <div className="relative z-10">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{pdfTitle || "Assignment Title"}</h2>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-gray-300 text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <FiUser className="text-cyan-400 flex-shrink-0" />
                      <span>Name: <span className="text-white font-medium">{userName || "___"}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiHash className="text-purple-400 flex-shrink-0" />
                      <span>Roll No: <span className="text-white font-medium">{rollNo || "___"}</span></span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="space-y-4 sm:space-y-6 mb-6 sm:mb-8"
                variants={container}
                initial="hidden"
                animate="show"
              >
                <AnimatePresence>
                  {entries.length === 0 ? (
                    <motion.div 
                      className="text-center py-8 sm:py-12 rounded-xl border border-dashed border-gray-700 text-gray-500 text-sm sm:text-base"
                      variants={item}
                    >
                      <div className="mb-2">No entries yet</div>
                      <div className="text-xs sm:text-sm">Add questions to see them previewed here</div>
                    </motion.div>
                  ) : (
                    entries.map((entry, idx) => (
                      <motion.div 
                        key={idx} 
                        className="bg-gradient-to-br from-gray-800/50 to-gray-900/60 rounded-xl border border-gray-700/50 p-4 sm:p-6 relative overflow-hidden"
                        variants={item}
                        initial="hidden"
                        animate="show"
                        exit={{ opacity: 0, height: 0 }}
                      >
            
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500"></div>

                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 flex items-center justify-center text-gray-300 text-xs sm:text-sm font-bold">
                          {idx + 1}
                        </div>
                        
                        <div className="relative z-10">

                          <div className="mb-3 sm:mb-4">
                            <div className="flex items-center gap-2 text-cyan-300 mb-2">
                              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse flex-shrink-0"></div>
                              <h3 className="font-bold text-sm sm:text-base">Question</h3>
                            </div>
                            <p className="text-gray-200 pl-3 sm:pl-4 text-sm sm:text-base">{entry.question}</p>
                          </div>
         
                          <div className="mb-3 sm:mb-4">
                            <div className="flex items-center gap-2 text-blue-300 mb-2">
                              <FiCode className="text-blue-400 flex-shrink-0" />
                              <h3 className="font-bold text-sm sm:text-base">Code Solution</h3>
                            </div>
                            <pre className="bg-gray-900/60 rounded-lg p-3 sm:p-4 text-gray-200 font-mono text-xs sm:text-sm overflow-x-auto mt-2 border border-gray-700">
                              {entry.code}
                            </pre>
                          </div>
                          
                          {/* Output section */}
                          <div>
                            <div className="flex items-center gap-2 text-green-300 mb-2">
                              <FiTerminal className="text-green-400 flex-shrink-0" />
                              <h3 className="font-bold text-sm sm:text-base">Output</h3>
                            </div>
                            <pre className="bg-green-900/20 rounded-lg p-3 sm:p-4 text-green-200 font-mono text-xs sm:text-sm overflow-x-auto mt-2 border border-green-800/30">
                              {entry.output}
                            </pre>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </motion.div>
              
              {/* on sc only */}
              <motion.div 
                className="mb-6 md:hidden bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-indigo-500/10 p-2 rounded-lg">
                    <FiArrowRight className="text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-200 mb-1 text-sm sm:text-base">Preview Tip</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Review your assignment before exporting. Each question is displayed with code and output for clarity.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Footer */}
              <motion.div 
                className="mt-4 pt-4 border-t border-gray-700/50 text-center sm:text-left text-xs sm:text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 text-gray-400">
                  <div className="flex items-center gap-4 flex-wrap justify-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Ready to export</span>
                    </div>
                    <div>
                      {entries.length} question{entries.length !== 1 ? 's' : ''}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 justify-center">
                    <span>Assignment Generator</span>
                    <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
                    <span className="flex items-center">
                      By <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent ml-1">Fab-c</span>
                    </span>
                    <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
                    <span className="flex items-center">
                      & <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent ml-1">Hazim Bhat</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Desktop Helper - shown only on medium screens and above */}
      <motion.div 
        className="hidden md:flex absolute bottom-6 left-6 bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-4 max-w-xs"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-start gap-3">
          <div className="bg-indigo-500/10 p-2 rounded-lg">
            <FiArrowRight className="text-indigo-400" />
          </div>
          <div>
            <h3 className="font-medium text-gray-200 mb-1 text-sm sm:text-base">Preview Tip</h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Review your assignment before exporting. Each question is displayed with code and output for clarity.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}