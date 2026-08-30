export async function exportPortfolioPdf() {
  const source = document.getElementById("portfolio-page");
  if (!source) throw new Error("Portfolio element not found");

  const printWindow = window.open("", "_blank", "noopener,noreferrer,width=1200,height=900");
  if (!printWindow) {
    window.alert("Permita pop-ups para gerar o PDF.");
    return;
  }

  const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'))
    .map((node) => node.outerHTML)
    .join("\n");

  printWindow.document.open();
  printWindow.document.write(`<!doctype html><html><head><meta charset="UTF-8"><title>Antonio Fontes | Portfólio</title>${styles}<style>
    @page { size: A4 portrait; margin: 0; }
    html, body { margin: 0 !important; padding: 0 !important; background: #141a35 !important; }
    body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    .pdf-exclude { display: none !important; }
    a { color: inherit !important; text-decoration: none !important; }
    @media print { .pdf-exclude { display: none !important; } }
  </style></head><body>${source.outerHTML}</body></html>`);
  printWindow.document.close();

  await new Promise<void>((resolve) => {
    printWindow.addEventListener("load", () => resolve(), { once: true });
    setTimeout(resolve, 1200);
  });

  printWindow.focus();
  setTimeout(() => {
    printWindow.print();
    setTimeout(() => printWindow.close(), 1000);
  }, 300);
}
