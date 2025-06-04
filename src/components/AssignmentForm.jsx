import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiHash, FiBook, FiEdit, FiCode, FiTerminal, FiPlusCircle, FiArrowRight } from 'react-icons/fi';

export const AssignmentForm = ({
  userName,
  setUserName,
  rollNo,
  setRollNo,
  pdfTitle,
  setPdfTitle,
  question,
  setQuestion,
  code,
  setCode,
  output,
  setOutput,
  handleAddEntry,
}) => {
  const [isFocused, setIsFocused] = useState({
    userName: false,
    rollNo: false,
    pdfTitle: false,
    question: false,
    code: false,
    output: false
  });

  const handleFocus = (field) => {
    setIsFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setIsFocused(prev => ({ ...prev, [field]: false }));
  };

  const isFormValid = question && code && output;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-950 flex items-center justify-center p-4 font-sans">
      <motion.div
        className="absolute top-10 left-5 w-40 h-40 sm:top-20 sm:left-10 sm:w-64 sm:h-64 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-600/10 blur-3xl"
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
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 relative py-4 px-4 sm:py-6 sm:px-8">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <motion.div
                  initial={{ rotate: -20, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <FiEdit className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                
                <div className="text-center sm:text-left">
                  <motion.h1 
                    className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    Assignment Generator
                  </motion.h1>
                  <motion.p 
                    className="text-gray-400 text-xs sm:text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Create professional assignments with code and output
                  </motion.p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className={`absolute -top-2 left-4 px-2 text-xs bg-gray-800 transition-all ${
                  isFocused.userName || userName 
                    ? 'text-cyan-400 opacity-100' 
                    : 'text-gray-500 opacity-0 top-3'
                }`}>
                  Your Name
                </div>
                <div className={`flex items-center border rounded-xl px-4 py-3 transition-all ${
                  isFocused.userName 
                    ? 'border-cyan-400 shadow-[0_0_0_3px_rgba(56,189,248,0.1)]' 
                    : 'border-gray-700'
                }`}>
                  <FiUser className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    className="w-full bg-transparent text-gray-200 placeholder-gray-600 focus:outline-none"
                    placeholder="Your Name"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    onFocus={() => handleFocus('userName')}
                    onBlur={() => handleBlur('userName')}
                  />
                </div>
              </motion.div>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className={`absolute -top-2 left-4 px-2 text-xs bg-gray-800 transition-all ${
                  isFocused.rollNo || rollNo 
                    ? 'text-cyan-400 opacity-100' 
                    : 'text-gray-500 opacity-0 top-3'
                }`}>
                  Roll Number
                </div>
                <div className={`flex items-center border rounded-xl px-4 py-3 transition-all ${
                  isFocused.rollNo 
                    ? 'border-cyan-400 shadow-[0_0_0_3px_rgba(56,189,248,0.1)]' 
                    : 'border-gray-700'
                }`}>
                  <FiHash className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    className="w-full bg-transparent text-gray-200 placeholder-gray-600 focus:outline-none"
                    placeholder="Roll Number"
                    value={rollNo}
                    onChange={e => setRollNo(e.target.value)}
                    onFocus={() => handleFocus('rollNo')}
                    onBlur={() => handleBlur('rollNo')}
                  />
                </div>
              </motion.div>
              
              {/* Title Field */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className={`absolute -top-2 left-4 px-2 text-xs bg-gray-800 transition-all ${
                  isFocused.pdfTitle || pdfTitle 
                    ? 'text-cyan-400 opacity-100' 
                    : 'text-gray-500 opacity-0 top-3'
                }`}>
                  Assignment Title
                </div>
                <div className={`flex items-center border rounded-xl px-4 py-3 transition-all ${
                  isFocused.pdfTitle 
                    ? 'border-cyan-400 shadow-[0_0_0_3px_rgba(56,189,248,0.1)]' 
                    : 'border-gray-700'
                }`}>
                  <FiBook className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    className="w-full bg-transparent text-gray-200 placeholder-gray-600 focus:outline-none"
                    placeholder="Assignment Title"
                    value={pdfTitle}
                    onChange={e => setPdfTitle(e.target.value)}
                    onFocus={() => handleFocus('pdfTitle')}
                    onBlur={() => handleBlur('pdfTitle')}
                  />
                </div>
              </motion.div>
            </div>
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className={`absolute -top-2 left-4 px-2 text-xs bg-gray-800 transition-all ${
                isFocused.question || question 
                  ? 'text-purple-400 opacity-100 z-10' 
                  : 'text-gray-500 opacity-0 top-3'
              }`}>
                Question / Problem Statement
              </div>
              <div className={`relative border rounded-xl p-4 transition-all ${
                isFocused.question 
                  ? 'border-purple-400 shadow-[0_0_0_3px_rgba(192,132,252,0.1)]' 
                  : 'border-gray-700'
              }`}>
                <div className="flex items-start">
                  <FiEdit className="text-gray-500 mr-2 mt-1 flex-shrink-0" />
                  <textarea
                    className="w-full min-h-[100px] sm:min-h-[120px] bg-transparent text-gray-200 placeholder-gray-600 focus:outline-none resize-none"
                    placeholder="Enter the question/problem statement"
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                    onFocus={() => handleFocus('question')}
                    onBlur={() => handleBlur('question')}
                  />
                </div>
                <div className="text-xs text-gray-500 mt-2 flex justify-end">
                  {question.length} characters
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className={`absolute -top-2 left-4 px-2 text-xs bg-gray-800 transition-all ${
                isFocused.code || code 
                  ? 'text-blue-400 opacity-100 z-10' 
                  : 'text-gray-500 opacity-0 top-3'
              }`}>
                Code Solution
              </div>
              <div className={`relative border rounded-xl p-4 transition-all ${
                isFocused.code 
                  ? 'border-blue-400 shadow-[0_0_0_3px_rgba(59,130,246,0.1)]' 
                  : 'border-gray-700'
              }`}>
                <div className="flex items-start">
                  <FiCode className="text-gray-500 mr-2 mt-1 flex-shrink-0" />
                  <textarea
                    className="w-full min-h-[150px] sm:min-h-[180px] bg-gray-900/50 font-mono text-sm text-gray-200 placeholder-gray-600 focus:outline-none resize-none rounded-lg p-3"
                    placeholder="Paste your code here"
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    onFocus={() => handleFocus('code')}
                    onBlur={() => handleBlur('code')}
                  />
                </div>
                <div className="text-xs text-gray-500 mt-2 flex justify-between">
                  <span>Use proper indentation for readability</span>
                  <span>{code.split('\n').length} lines</span>
                </div>
              </div>
            </motion.div>
      
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className={`absolute -top-2 left-4 px-2 text-xs bg-gray-800 transition-all ${
                isFocused.output || output 
                  ? 'text-green-400 opacity-100 z-10' 
                  : 'text-gray-500 opacity-0 top-3'
              }`}>
                Expected Output
              </div>
              <div className={`relative border rounded-xl p-4 transition-all ${
                isFocused.output 
                  ? 'border-green-400 shadow-[0_0_0_3px_rgba(52,211,153,0.1)]' 
                  : 'border-gray-700'
              }`}>
                <div className="flex items-start">
                  <FiTerminal className="text-gray-500 mr-2 mt-1 flex-shrink-0" />
                  <textarea
                    className="w-full min-h-[80px] sm:min-h-[100px] bg-transparent text-gray-200 placeholder-gray-600 focus:outline-none resize-none"
                    placeholder="Enter the output"
                    value={output}
                    onChange={e => setOutput(e.target.value)}
                    onFocus={() => handleFocus('output')}
                    onBlur={() => handleBlur('output')}
                  />
                </div>
                <div className="text-xs text-gray-500 mt-2 flex justify-end">
                  {output.length} characters
                </div>
              </div>
            </motion.div>
            
        
            <motion.div 
              className="mb-6 md:hidden bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-start gap-3">
                <div className="bg-indigo-500/10 p-2 rounded-lg">
                  <FiArrowRight className="text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-200 mb-1">Pro Tip</h3>
                  <p className="text-gray-400 text-sm">
                    Fill all fields to enable the "Add to Assignment" button. You can add multiple entries to create a complete assignment.
                  </p>
                </div>
              </div>
            </motion.div>
 
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.button
                onClick={handleAddEntry}
                disabled={!isFormValid}
                className={`
                  relative flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-xl
                  font-medium text-base sm:text-lg overflow-hidden w-full max-w-md
                  ${isFormValid 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white cursor-pointer' 
                    : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  }
                `}
                whileHover={isFormValid ? { 
                  background: [
                    'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                    'linear-gradient(90deg, #8b5cf6, #ec4899)',
                    'linear-gradient(90deg, #ec4899, #f97316)',
                    'linear-gradient(90deg, #f97316, #3b82f6)',
                    'linear-gradient(90deg, #3b82f6, #8b5cf6)'
                  ] 
                } : {}}
                animate={isFormValid ? {
                  backgroundSize: ["300% 300%"],
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                } : {}}
                transition={isFormValid ? {
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  backgroundSize: { duration: 4, repeat: Infinity, ease: "linear" }
                } : {}}
                whileTap={isFormValid ? { scale: 0.97 } : {}}
              >
                {isFormValid && (
                  <motion.span
                    animate={{ rotate: [0, 15, 0, -15, 0] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  >
                    <FiPlusCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.span>
                )}
                <span>Add to Assignment</span>
                
                {isFormValid && (
                  <motion.span
                    className="ml-auto"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  >
                    <FiArrowRight />
                  </motion.span>
                )}
              </motion.button>
            </motion.div>
            
    
            <motion.div 
              className="mt-6 pt-6 border-t border-gray-700/50 text-center text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${userName ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                  <span className="text-xs sm:text-sm">Name {userName ? 'provided' : 'missing'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${rollNo ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                  <span className="text-xs sm:text-sm">Roll No {rollNo ? 'provided' : 'missing'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${pdfTitle ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                  <span className="text-xs sm:text-sm">Title {pdfTitle ? 'provided' : 'missing'}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    
      <motion.div 
        className="hidden md:flex absolute bottom-6 right-6 bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-4 max-w-xs"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="flex items-start gap-3">
          <div className="bg-indigo-500/10 p-2 rounded-lg">
            <FiArrowRight className="text-indigo-400" />
          </div>
          <div>
            <h3 className="font-medium text-gray-200 mb-1">Pro Tip</h3>
            <p className="text-gray-400 text-sm">
              Fill all fields to enable the "Add to Assignment" button. You can add multiple entries to create a complete assignment.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};