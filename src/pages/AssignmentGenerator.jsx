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
      entries
    });
  };

  return (
    <div className="max-w-3xl mx-auto py-12 space-y-8">
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
      <div className="bg-gray-50 rounded-xl shadow p-6 border space-y-4">
        <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
        <AssignmentPreview
          pdfTitle={pdfTitle}
          userName={userName}
          rollNo={rollNo}
          entries={entries}
        />
        <div className="mt-4 w-full">
          <Button
            className="w-full"
            type="button"
            disabled={!userName || !pdfTitle || entries.length === 0}
            onClick={handleDownloadPDF}
          >
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
}