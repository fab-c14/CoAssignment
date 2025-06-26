import jsPDF from "jspdf";

// Page number footer
function addPageNumber(doc, pageWidth, pageHeight) {
  const pageCount = doc.internal.getNumberOfPages();
  doc.setFontSize(10);
  doc.setTextColor(120);
  doc.text(`Page ${pageCount}`, pageWidth / 2, pageHeight - 20, { align: "center" });
}

// Code block with wrapping + page breaks
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
      const wrapped = doc.splitTextToSize(line, pageWidth - 2 * margin - 40);
      wrapped.forEach((wrapLine, j) => {
        doc.text(wrapLine, x + 5, startY + i * lineHeight + j * lineHeight);
      });
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

// Page break check
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

  // Header
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

    const codeLines = doc.splitTextToSize(entry.code, pageWidth - margin * 2 - 20);
    y = printCodeBlock(doc, codeLines, margin + 10, y, lineHeight, pageWidth, pageHeight, margin);

    // Output label
    const outputLines = doc.splitTextToSize(entry.output, pageWidth - margin * 2 - 40);
    const outputLabelHeight = lineHeight * 2;
    y = addPageIfNeeded(doc, y, outputLabelHeight, pageHeight, margin, pageWidth);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(22, 163, 74);
    doc.text("Output:", margin + 10, y + lineHeight);
    y += outputLabelHeight;

    // Output block with page-safe wrapping
    let outputStartY = y;
    let outputBoxLines = [];

    const flushOutputBox = () => {
      const blockHeight = outputBoxLines.length * lineHeight + 20;

      doc.setFillColor(255, 255, 255);  // pure white background
      doc.setDrawColor(0, 0, 0);        // black border
      doc.roundedRect(margin + 10, outputStartY, pageWidth - margin * 2 - 20, blockHeight, 6, 6, "FD");

      doc.setTextColor(0, 0, 0);        // pure black text
      doc.setFont("courier", "normal");
      doc.setFontSize(11);


      outputBoxLines.forEach((line, i) => {
        const wrap = doc.splitTextToSize(line, pageWidth - margin * 2 - 60);
        wrap.forEach((wrappedLine, j) => {
          doc.text(wrappedLine, margin + 20, outputStartY + lineHeight + (i + j) * lineHeight);
        });
      });

      y = outputStartY + blockHeight + 10;
      outputBoxLines = [];
      outputStartY = y;
    };

    for (let i = 0; i < outputLines.length; i++) {
      const blockHeight = outputBoxLines.length * lineHeight + 20;
      if (outputStartY + blockHeight + lineHeight > pageHeight - margin) {
        if (outputBoxLines.length > 0) flushOutputBox();
        doc.addPage();
        addPageNumber(doc, pageWidth, pageHeight);
        outputStartY = margin;
      }
      outputBoxLines.push(outputLines[i]);
    }

    if (outputBoxLines.length > 0) flushOutputBox();

    y += 20;
  });

  // Final page number + footer
  addPageNumber(doc, pageWidth, pageHeight);

  doc.setFont("helvetica", "italic");
  doc.setFontSize(10);
  doc.setTextColor(150);
  doc.setDrawColor(200);
  doc.setGState(new doc.GState({ opacity: 0.5 }));

  doc.text("Created With fab-c14 and hazimbhatt's coassignment", margin, pageHeight - 40);

  doc.save(`${pdfTitle || "assignment"}.pdf`);
}
