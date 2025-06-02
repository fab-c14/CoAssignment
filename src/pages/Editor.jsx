import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiCode } from "react-icons/fi";
import { Button } from "@/components/ui/button"; // shadcn/ui button

const initialPages = [
  { id: 1, title: 'Page 1', code: '' },
];

const pageMotion = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 32 },
  transition: { type: "spring", stiffness: 260, damping: 25 }
};

export default function Editor() {
  const [pages, setPages] = useState(initialPages);
  const [activePageId, setActivePageId] = useState(pages[0].id);

  const addPage = () => {
    const newId = pages.length > 0 ? Math.max(...pages.map(p => p.id)) + 1 : 1;
    const newPage = { id: newId, title: `Page ${newId}`, code: '' };
    setPages([...pages, newPage]);
    setActivePageId(newId);
  };

  const addCode = () => {
    // Placeholder for future code-adding logic
  };

  const handleCodeChange = (e) => {
    setPages(pages.map(page =>
      page.id === activePageId ? { ...page, code: e.target.value } : page
    ));
  };

  const activePage = pages.find(page => page.id === activePageId);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-background rounded-xl shadow-lg border border-border relative">
      <div className="mb-4 flex items-center gap-2">
        <Tabs.Root
          value={String(activePageId)}
          onValueChange={v => setActivePageId(Number(v))}
          className="flex-1"
        >
          <Tabs.List className="flex gap-2 bg-muted rounded-t-md px-2 py-1">
            {pages.map(page => (
              <Tabs.Trigger
                value={String(page.id)}
                key={page.id}
                className={`px-4 py-2 rounded-t-md text-sm font-medium transition-all
                  ${
                    page.id === activePageId
                      ? 'bg-background text-primary shadow'
                      : 'text-muted-foreground hover:bg-muted'
                  }`}
              >
                {page.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {pages.map(page => (
            <Tabs.Content value={String(page.id)} key={page.id} forceMount>
              <AnimatePresence mode="wait">
                {activePageId === page.id && (
                  <motion.div
                    key={page.id}
                    {...pageMotion}
                    className="mt-2"
                  >
                    <textarea
                      className="w-full min-h-[220px] max-h-[400px] rounded-lg border border-border bg-muted/70 p-3 font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-primary transition"
                      placeholder="Write your code here..."
                      value={page.code}
                      onChange={handleCodeChange}
                      spellCheck={false}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </Tabs.Content>
          ))}
        </Tabs.Root>
        <div className="flex gap-2 ml-4">
          <Button
            size="icon"
            variant="outline"
            className="border-dashed border-2"
            onClick={addPage}
            aria-label="Add Page"
            type="button"
          >
            <FiPlus className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="border-dashed border-2"
            onClick={addCode}
            aria-label="Add Code"
            type="button"
          >
            <FiCode className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <div className="text-xs text-muted-foreground pt-2 flex justify-between">
        <span>
          {activePage?.code.length ?? 0} chars
        </span>
        <span>
          Assignment Editor &mdash; By Fab-c
        </span>
      </div>
    </div>
  );
}