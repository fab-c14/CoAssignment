import React from "react";
import { Link } from "react-router-dom";

export const AppInfoPanel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-950 flex flex-col items-center justify-center p-4 sm:p-6 font-sans">


      <div className="w-full max-w-4xl z-10">
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden">
  
          <div className="relative p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500" />
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 relative py-6 px-4 sm:px-8">
              <div className="absolute top-0 left-0 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl sm:text-3xl">📝</span>
              </div>
              
              <div className="flex flex-col items-center justify-center text-center pt-8 sm:pt-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 mb-2">
                  Assignment Generator
                </h1>
                <p className="text-gray-300 max-w-2xl text-sm sm:text-base md:text-lg px-2 sm:px-0">
                  Create professional assignment sheets with code snippets and export to PDF
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
              {/* Left column */}
              <div className="space-y-5 sm:space-y-6">
                <div className="bg-gray-800/50 p-4 sm:p-5 md:p-6 rounded-xl border border-gray-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Tool Overview
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    A professional-grade solution for creating, previewing, and exporting assignment sheets with code snippets to PDF. Designed specifically for educators, students, and developers who require polished technical documentation.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-4 sm:p-5 md:p-6 rounded-xl border border-gray-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Created By
                  </h3>
                  <div className="flex flex-col gap-3">
                    {[
                      { name: "fab-c14", url: "https://github.com/fab-c14" },
                      { name: "Hazim Bhatt", url: "https://github.com/HazimBhatt" }
                    ].map((creator, index) => (
                      <a
                        key={index}
                        href={creator.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-all border border-gray-600 hover:-translate-y-0.5 active:scale-95"
                      >
                        <div className="bg-gray-600 p-1.5 sm:p-2 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </div>
                        <span className="font-medium text-gray-200 text-sm sm:text-base">{creator.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-5 sm:space-y-6">
                <div className="bg-gray-800/50 p-4 sm:p-5 md:p-6 rounded-xl border border-gray-700">
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
                      <li 
                        key={index}
                        className="flex items-start text-gray-300 text-sm sm:text-base"
                      >
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-800/50 p-4 sm:p-5 md:p-6 rounded-xl border border-gray-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Tailwind CSS", "jsPDF", "Framer Motion", "Radix UI", "shadcn/ui", "Vite"].map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg text-xs sm:text-sm text-gray-200 border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 sm:mt-10 flex justify-center">
              <div className="relative p-1 rounded-full w-full max-w-xs sm:max-w-none bg-gradient-to-r from-blue-500 to-purple-500">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-70"></div>
                  <Link to={"/editor"}>
                  <button
                    className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white font-bold text-base sm:text-lg py-3 px-6 sm:py-4 sm:px-10 rounded-full flex items-center justify-center gap-3 group w-full transform transition-transform hover:scale-105 active:scale-95"
                  >
                    <span>Go to Assignment Tool</span>
                    <span>→</span>
                  </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-gray-700/50 text-center text-gray-400 text-sm sm:text-base">
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
            </div>
          </div>
        </div>
      </div>


      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 text-xs sm:text-sm text-gray-400">
        <div className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700">
          with ❤️
        </div>
        <div className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700">
          v1.1.2
        </div>
      </div>
    </div>
  );
};