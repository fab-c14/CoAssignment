import React, { useState, useRef } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { FiPlus, FiCode, FiX, FiChevronRight, FiSave, FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const tabMotion = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 10 },
  transition: { duration: 0.2, ease: "easeInOut" }
};

const editorMotion = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: "easeOut" }
};

const initialPages = [
  { id: 1, title: 'Main Assignment', code: '// Write your assignment here...' },
  { id: 2, title: 'Solution', code: '// Solution code goes here...' },
];

export default function Editor() {
  const [pages, setPages] = useState(initialPages);
  const [activePageId, setActivePageId] = useState(pages[0].id);
  const [isAddingCode, setIsAddingCode] = useState(false);
  const textareaRef = useRef(null);

  const addPage = () => {
    const newId = pages.length > 0 ? Math.max(...pages.map(p => p.id)) + 1 : 1;
    const newPage = { id: newId, title: `Page ${newId}`, code: '' };
    setPages([...pages, newPage]);
    setActivePageId(newId);
  };

  const removePage = (id) => {
    if (pages.length <= 1) return;
    setPages(pages.filter(page => page.id !== id));
    if (activePageId === id) {
      setActivePageId(pages[0].id);
    }
  };

  const addCode = () => {
    setIsAddingCode(true);
    const snippet = `\n// New code snippet\nfunction example() {\n  console.log("Hello World");\n}`;
    
    setPages(pages.map(page => 
      page.id === activePageId 
        ? { ...page, code: page.code + snippet } 
        : page
    ));
    
    setTimeout(() => {
      setIsAddingCode(false);
      if (textareaRef.current) {
        textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
      }
    }, 1000);
  };

  const handleCodeChange = (e) => {
    setPages(pages.map(page =>
      page.id === activePageId ? { ...page, code: e.target.value } : page
    ));
  };

  const activePage = pages.find(page => page.id === activePageId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-950 flex flex-col items-center justify-center p-4 font-sans">
    
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-600/10 blur-3xl"
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
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 relative py-5 px-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ rotate: -20, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <FiCode className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div>
                    <motion.h1 
                      className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      Assignment Editor
                    </motion.h1>
                    <motion.p 
                      className="text-gray-400 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Create, edit, and organize your assignments
                    </motion.p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg"
                    >
                      <FiSave className="mr-2" /> Save Draft
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white shadow-lg"
                    >
                      <FiDownload className="mr-2" /> Export PDF
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-col">
        
              <div className="mb-4 flex items-center gap-2">
                <LayoutGroup>
                  <Tabs.Root
                    value={String(activePageId)}
                    onValueChange={v => setActivePageId(Number(v))}
                    className="flex-1"
                  >
                    <Tabs.List className="flex gap-2 bg-gray-800/50 rounded-lg px-2 py-2 border border-gray-700">
                      {pages.map(page => (
                        <Tabs.Trigger
                          value={String(page.id)}
                          key={page.id}
                          className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all z-10
                            ${page.id === activePageId ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                        >
                          {page.id === activePageId && (
                            <motion.div
                              layoutId="activeTab"
                              className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 rounded-md z-0"
                              initial={false}
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                          <span className="relative z-10 flex items-center gap-2">
                            {page.title}
                            {pages.length > 1 && (
                              <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removePage(page.id);
                                }}
                                className="text-gray-300 hover:text-white"
                                aria-label="Remove page"
                              >
                                <FiX size={14} />
                              </motion.button>
                            )}
                          </span>
                        </Tabs.Trigger>
                      ))}
                    </Tabs.List>
                    
                    <div className="mt-4 min-h-[400px]">
                      {pages.map(page => (
                        <Tabs.Content value={String(page.id)} key={page.id} forceMount>
                          <AnimatePresence mode="wait">
                            {activePageId === page.id && (
                              <motion.div
                                key={page.id}
                                {...editorMotion}
                                className="relative"
                              >
                                <div className="absolute top-3 right-3 flex gap-2">
                                  <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <Button
                                      size="icon"
                                      variant="outline"
                                      className="bg-gray-800/50 border-gray-700 text-gray-300 hover:text-white"
                                      onClick={addPage}
                                      aria-label="Add Page"
                                      type="button"
                                    >
                                      <FiPlus className="w-4 h-4" />
                                    </Button>
                                  </motion.div>
                                  
                                  <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <Button
                                      size="icon"
                                      variant="outline"
                                      className="bg-gray-800/50 border-gray-700 text-gray-300 hover:text-white"
                                      onClick={addCode}
                                      aria-label="Add Code"
                                      type="button"
                                    >
                                      <FiCode className="w-4 h-4" />
                                    </Button>
                                  </motion.div>
                                </div>
                                
                                <textarea
                                  ref={textareaRef}
                                  className="w-full min-h-[400px] rounded-xl border border-gray-700 bg-gray-900/80 p-6 font-mono text-sm text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition"
                                  placeholder="Write your code here..."
                                  value={page.code}
                                  onChange={handleCodeChange}
                                  spellCheck={false}
                                />
                                
                                {isAddingCode && page.id === activePageId && (
                                  <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute bottom-6 right-6 px-3 py-1.5 bg-green-500/20 text-green-400 text-xs rounded-full backdrop-blur-sm"
                                  >
                                    Code snippet added!
                                  </motion.div>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </Tabs.Content>
                      ))}
                    </div>
                  </Tabs.Root>
                </LayoutGroup>
              </div>
              
              {/* Footer */}
              <motion.div 
                className="mt-4 pt-4 border-t border-gray-700/50 flex justify-between text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Saved</span>
                  </div>
                  <div>
                    {activePage?.code.length ?? 0} characters
                  </div>
                  <div>
                    {activePage?.code.split(/\s+/).filter(Boolean).length} words
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span>Assignment Editor</span>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <span className="flex items-center">
                    By <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent ml-1">Fab-c</span>
                  </span>
                   <span className="flex items-center">
                    & <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent ml-1">Hazim Bhat</span>
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Floating helper */}
      <motion.div 
        className="absolute bottom-6 left-6 bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-4 max-w-xs"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-start gap-3">
          <div className="bg-indigo-500/10 p-2 rounded-lg">
            <FiChevronRight className="text-indigo-400" />
          </div>
          <div>
            <h3 className="font-medium text-gray-200 mb-1">Quick Tip</h3>
            <p className="text-gray-400 text-sm">
              Use the + button to add pages and the code button to insert pre-defined snippets
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}