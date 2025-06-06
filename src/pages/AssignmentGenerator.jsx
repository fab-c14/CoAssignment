import React, { useState } from "react";
import { AssignmentForm } from "@/components/AssignmentForm";
import { AssignmentPreview } from "@/components/AssignmentPreview";
import { Button } from "@/components/ui/button";
import { generateAssignmentPDF } from "@/components/AssignmentPDF";

export default function AssignmentGenerator() {
  const [userName, setUserName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [pdfTitle, setPdfTitle] = useState("");
  const [entries, setEntries] = useState([]);
  const [question, setQuestion] = useState("");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handleAddEntry = () => {
    if (question && code && output) {
      setEntries((prev) => [...prev, { question, code, output }]);
      setQuestion("");
      setCode("");
      setOutput("");
    }
  };

  const handleDownloadPDF = () => {
    generateAssignmentPDF({
      pdfTitle,
      userName,
      rollNo,
      entries,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-950 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
       <h1
  className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#F95738] via-[#ff6ec4] to-[#7873f5] 
             tracking-wider animate-fade-in poppins-medium drop-shadow-[0_5px_10px_rgba(249,87,56,0.5)]"
>
  Assignment PDF Generator
</h1>
          <p className="mt-2 text-gray-500 text-lg">
            Enter your assignment content and instantly generate a polished PDF.
          </p>
        </div>

        {/* Form Section */}
        <section className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8 transition-all space-y-6">
          <AssignmentForm
            userName={userName}
            setUserName={setUserName}
            rollNo={rollNo}
            setRollNo={setRollNo}
            pdfTitle={pdfTitle}
            setPdfTitle={setPdfTitle}
            question={question}
            setQuestion={setQuestion}
            code={code}
            setCode={setCode}
            output={output}
            setOutput={setOutput}
            handleAddEntry={handleAddEntry}
          />
        </section>

        {/* Preview Section */}
        <section className="bg-white border border-gray-200 shadow-xl rounded-2xl p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-800">
              📄 Live Preview
            </h2>
            <span className="text-sm text-gray-500">
              {entries.length} {entries.length === 1 ? "entry" : "entries"}
            </span>
          </div>

          <div className="overflow-y-auto max-h-[450px] border rounded-lg bg-gray-50 p-4 text-sm text-gray-700">
            <AssignmentPreview
              pdfTitle={pdfTitle}
              userName={userName}
              rollNo={rollNo}
              entries={entries}
            />
          </div>

          <Button
            className="w-full py-3 text-lg font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            type="button"
            disabled={!userName || !pdfTitle || entries.length === 0}
            onClick={handleDownloadPDF}
          >
            🚀 Download PDF
          </Button>
        </section>
      </div>
    </div>
  );
}
