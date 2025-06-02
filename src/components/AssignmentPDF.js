import jsPDF from "jspdf";

// Helper to print lines with pagination and optional background highlight for each line (code/output)
function printLinesWithPagination(doc, lines, x, y, lineHeight, margin, pageHeight, font, fontSize, fillColor) {
  doc.setFont(font, "normal");
  doc.setFontSize(fontSize);

  for (let i = 0; i < lines.length; i++) {
    if (y > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
    if (fillColor) {
      // Always use the same background for all lines
      doc.setFillColor(...fillColor);
      doc.rect(x - 4, y - lineHeight + 4, doc.internal.pageSize.getWidth() - x * 2 + 8, lineHeight, "F");
    }
    doc.text(lines[i], x, y);
    y += lineHeight;
  }
  return y;
}

export function generateAssignmentPDF({
  pdfTitle,
  userName,
  rollNo,
  entries,
}) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4"
  });

  const margin = 40;
  const lineHeight = 18;
  let y = margin + 10;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Header
  doc.setFillColor(37, 99, 235);
  doc.rect(0, 0, pageWidth, 60, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  // Center the title
  const titleText = pdfTitle || "Assignment Title";
  const titleWidth = doc.getTextWidth(titleText);
  doc.text(titleText, pageWidth / 2 - titleWidth / 2, 42);

  // Name and Roll No (larger, under title, centered)
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  const nameAndRoll = `Name: ${userName || "___"}    Roll No: ${rollNo || "___"}`;
  const nameAndRollWidth = doc.getTextWidth(nameAndRoll);
  doc.text(nameAndRoll, pageWidth / 2 - nameAndRollWidth / 2, 62);

  y = 80;

  entries.forEach((entry, idx) => {
    // Question
    doc.setFillColor(243, 244, 246);
    doc.roundedRect(margin - 10, y - 8, pageWidth - margin * 2 + 20, 28, 5, 5, "F");
    doc.setTextColor(37, 99, 235);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`Q${idx + 1}: ${entry.question}`, margin, y + 10);

    y += 32;

    // Code (always gray background for all lines)
    doc.setFont("courier", "normal");
    doc.setFontSize(11);
    doc.setTextColor(30, 41, 59);
    const codeLines = doc.splitTextToSize(entry.code, pageWidth - margin * 2 - 20);
    y = printLinesWithPagination(
      doc,
      codeLines,
      margin + 10,
      y + 12,
      lineHeight,
      margin,
      pageHeight,
      "courier",
      11,
      [240, 240, 240] // Light gray for ALL code lines
    );
    y += 10;

    // Output
    doc.setFont("helvetica", "bold");
    doc.setTextColor(21, 128, 61);
    doc.setFontSize(12);
    doc.text("Output:", margin + 10, y + 10);

    doc.setFont("courier", "normal");
    doc.setFontSize(11);
    doc.setTextColor(30, 41, 59);
    const outputLines = doc.splitTextToSize(entry.output, pageWidth - margin * 2 - 60);
    y = printLinesWithPagination(
      doc,
      outputLines,
      margin + 70,
      y + 14,
      lineHeight,
      margin,
      pageHeight,
      "courier",
      11,
      [236, 253, 245] // Greenish for ALL output lines
    );
    y += 20;

    // If not enough space for next block, next page
    if (y > pageHeight - 80) {
      doc.addPage();
      y = margin + 10;
    }
  });

  doc.save(`${pdfTitle || "assignment"}.pdf`);
}