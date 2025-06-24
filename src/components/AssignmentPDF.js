import jsPDF from "jspdf";

// Adds page number at bottom
function addPageNumber(doc, pageWidth, pageHeight) {
  const pageCount = doc.internal.getNumberOfPages();
  doc.setFontSize(10);
  doc.setTextColor(120);
  doc.text(`Page ${pageCount}`, pageWidth / 2, pageHeight - 20, { align: "center" });
}

// Code block rendering that safely wraps across pages
function printCodeBlock(doc, lines, x, y, lineHeight, pageWidth, pageHeight, margin) {
  const boxPadding = 10;
  const boxMarginTop = 10;
  let startY = y;
  let boxLines = [];

  const flushBox = () => {
    const blockHeight = boxLines.length * lineHeight + 2 * boxPadding;
    doc.setFillColor(245, 245, 245);
    doc.roundedRect(x - boxPadding, startY - boxPadding, pageWidth - x * 2 + 2 * boxPadding, blockHeight, 6, 6, "F");

    doc.setTextColor(30, 30, 30);
    doc.setFont("courier", "normal");
    doc.setFontSize(11);

    boxLines.forEach((line, i) => {
      doc.text(line, x + 5, startY + i * lineHeight);
    });

    y = startY + boxLines.length * lineHeight + boxPadding;
    boxLines = [];
    startY = y + boxMarginTop;
    return y;
  };

  for (let i = 0; i < lines.length; i++) {
    if (startY + boxLines.length * lineHeight + boxPadding * 2 > pageHeight - margin) {
      if (boxLines.length > 0) y = flushBox();
      doc.addPage();
      addPageNumber(doc, pageWidth, pageHeight);
      startY = margin;
    }
    boxLines.push(lines[i]);
  }

  if (boxLines.length > 0) y = flushBox();
  return y + 10;
}

// Adds a new page if the upcoming block won't fit
function addPageIfNeeded(doc, y, blockHeight, pageHeight, margin, pageWidth) {
  if (y + blockHeight > pageHeight - margin) {
    doc.addPage();
    addPageNumber(doc, pageWidth, pageHeight);
    return margin;
  }
  return y;
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
  doc.setFillColor(37, 99, 235);
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

  y = headerHeight + 30;

  entries.forEach((entry, idx) => {
    // QUESTION BLOCK
    const questionLines = doc.splitTextToSize(`Q${idx + 1}: ${entry.question}`, pageWidth - margin * 2);
    const questionHeight = questionLines.length * lineHeight + 20;
    y = addPageIfNeeded(doc, y, questionHeight, pageHeight, margin, pageWidth);

    doc.setFillColor(255, 255, 255);
    doc.roundedRect(margin - 5, y - 5, pageWidth - margin * 2 + 10, questionHeight, 8, 8, "F");

    doc.setFont("times", "bold");
    doc.setFontSize(14);
    doc.setTextColor(17, 24, 39);
    doc.text(questionLines, margin + 5, y + lineHeight - 2);
    y += questionHeight + 10;

    // CODE BLOCK
    const codeLines = doc.splitTextToSize(entry.code, pageWidth - margin * 2 - 20);
    y = printCodeBlock(doc, codeLines, margin + 10, y, lineHeight, pageWidth, pageHeight, margin);

    // OUTPUT BLOCK: ensure "Output:" and box appear together
    const outputLines = doc.splitTextToSize(entry.output, pageWidth - margin * 2 - 40);
    const outputLabelHeight = lineHeight * 2;
    const outputHeight = outputLines.length * lineHeight + 20;
    const totalOutputBlockHeight = outputLabelHeight + outputHeight;

    y = addPageIfNeeded(doc, y, totalOutputBlockHeight, pageHeight, margin, pageWidth);

    // Output Label
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(22, 163, 74);
    doc.text("Output:", margin + 10, y + lineHeight);
    y += outputLabelHeight;

    // Output Box
    doc.setFillColor(240, 253, 244);
    doc.setDrawColor(34, 197, 94);
    doc.roundedRect(margin + 10, y, pageWidth - margin * 2 - 20, outputHeight, 6, 6, "FD");

    doc.setTextColor(20, 30, 40);
    doc.setFont("courier", "normal");
    doc.setFontSize(11);
    outputLines.forEach((line, i) => {
      doc.text(line, margin + 20, y + lineHeight + i * lineHeight);
    });

    y += outputHeight + 30;
  });

  // Final page number
  addPageNumber(doc, pageWidth, pageHeight);

  doc.save(`${pdfTitle || "assignment"}.pdf`);
}
