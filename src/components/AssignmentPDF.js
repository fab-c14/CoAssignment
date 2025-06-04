import jsPDF from "jspdf";

// Draws dark code block like IDE
function printDarkCodeBlock(doc, lines, x, y, lineHeight, pageWidth, pageHeight, margin) {
  const blockHeight = lines.length * lineHeight + 20;

  if (y + blockHeight > pageHeight - margin) {
    doc.addPage();
    y = margin;
  }

  doc.setFillColor(34, 34, 34); // dark background
  doc.roundedRect(x - 10, y - 10, pageWidth - x * 2 + 20, blockHeight, 6, 6, "F");

  doc.setTextColor(240, 240, 240); // light text
  doc.setFont("courier", "normal");
  doc.setFontSize(11);

  lines.forEach((line, i) => {
    doc.text(line, x, y + i * lineHeight);
  });

  return y + lines.length * lineHeight + 20;
}

export function generateAssignmentPDF({ pdfTitle, userName, rollNo, entries }) {
  const doc = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });

  const margin = 50;
  const lineHeight = 16;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let y = 0;

  // Banner Header
  const headerHeight = 100;
  doc.setFillColor(37, 99, 235); // Blue banner
  doc.rect(0, 0, pageWidth, headerHeight, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.text(pdfTitle || "Assignment Title", margin, 60);

  doc.setFontSize(13);
  const nameLine = `Name: ${userName || "_____"}`;
  const rollLine = `Roll No: ${rollNo || "_____"}`;
  doc.text(nameLine, pageWidth - margin - doc.getTextWidth(nameLine), 45);
  doc.text(rollLine, pageWidth - margin - doc.getTextWidth(rollLine), 65);

  y = headerHeight + 20;

  entries.forEach((entry, idx) => {
    // Question Block
    const questionLines = doc.splitTextToSize(`Q${idx + 1}: ${entry.question}`, pageWidth - margin * 2);
    const questionHeight = questionLines.length * lineHeight + 20;

    doc.setFillColor(255, 255, 255);
    doc.roundedRect(margin - 5, y - 5, pageWidth - margin * 2 + 10, questionHeight, 8, 8, "F");

    doc.setFont("times", "bold");
    doc.setFontSize(14);
    doc.setTextColor(17, 24, 39);
    doc.text(questionLines, margin + 5, y + lineHeight - 2);

    y += questionHeight + 10;

    // Code Block
    const codeLines = doc.splitTextToSize(entry.code, pageWidth - margin * 2 - 20);
    y = printDarkCodeBlock(doc, codeLines, margin + 10, y, lineHeight, pageWidth, pageHeight, margin);

    // Output Heading
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(22, 163, 74);
    doc.text("Output:", margin + 10, y);

    y += 8;

    // Output Box
    const outputLines = doc.splitTextToSize(entry.output, pageWidth - margin * 2 - 40);
    const outputHeight = outputLines.length * lineHeight + 20;

    if (y + outputHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }

    doc.setFillColor(240, 253, 244); // light green
    doc.setDrawColor(34, 197, 94);
    doc.roundedRect(margin + 10, y, pageWidth - margin * 2 - 20, outputHeight, 6, 6, "FD");

    doc.setTextColor(20, 30, 40);
    doc.setFont("courier", "normal");
    doc.setFontSize(11);
    outputLines.forEach((line, i) => {
      doc.text(line, margin + 20, y + lineHeight + i * lineHeight);
    });

    y += outputHeight + 30;

    // New page if needed
    if (y > pageHeight - 100) {
      doc.addPage();
      y = margin;
    }
  });

  doc.save(`${pdfTitle || "assignment"}.pdf`);
}
