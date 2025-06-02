export function AssignmentPreview({
  pdfTitle,
  userName,
  rollNo,
  entries,
}) {
  return (
    <div className="bg-white rounded-lg p-6 border space-y-4 overflow-y-auto max-h-[500px] w-full">
      <div>
        <div className="text-lg font-bold">{pdfTitle || "Assignment Title"}</div>
        <div className="text-sm text-muted-foreground">
          <span className="font-semibold">Name:</span> {userName || "___"}
          <span className="mx-2 font-semibold">| Roll No:</span> {rollNo || "___"}
        </div>
      </div>
      {entries.length === 0 && (
        <div className="text-gray-400 italic text-center py-8">
          No entries yet. Add questions above!
        </div>
      )}
      {entries.map((entry, idx) => (
        <div key={idx} className="border-t pt-4 mt-4 space-y-2">
          <div>
            <span className="font-semibold">Q{idx + 1}:</span> {entry.question}
          </div>
          <pre className="bg-muted rounded p-3 text-sm font-mono whitespace-pre-wrap">{entry.code}</pre>
          <div>
            <span className="font-semibold">Output:</span>
            <pre className="bg-green-50 rounded p-2 text-sm font-mono whitespace-pre-wrap inline-block ml-2">{entry.output}</pre>
          </div>
        </div>
      ))}
    </div>
  );
}