import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function AssignmentForm({
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
}) {
  return (
    <div className="bg-background rounded-xl shadow p-6 space-y-4 border">
      <h1 className="text-2xl font-bold mb-4">Assignment Generator</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input placeholder="Your Name" value={userName} onChange={e => setUserName(e.target.value)} />
        <Input placeholder="Roll Number" value={rollNo} onChange={e => setRollNo(e.target.value)} />
        <Input placeholder="Assignment Title" value={pdfTitle} onChange={e => setPdfTitle(e.target.value)} />
      </div>
      <div className="space-y-2 pt-4">
        <Textarea
          placeholder="Enter the question/problem statement"
          value={question}
          onChange={e => setQuestion(e.target.value)}
        />
        <Textarea
          placeholder="Paste your code here"
          value={code}
          onChange={e => setCode(e.target.value)}
          rows={4}
        />
        <Textarea
          placeholder="Enter the output"
          value={output}
          onChange={e => setOutput(e.target.value)}
        />
        <Button
          onClick={handleAddEntry}
          disabled={!question || !code || !output}
          className="w-full md:w-auto"
        >
          Add to Assignment
        </Button>
      </div>
    </div>
  );
}