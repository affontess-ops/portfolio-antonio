import html2pdf from "html2pdf.js";

export async function exportPortfolioPdf() {
  const element = document.getElementById("portfolio-page");
  if (!element) throw new Error("Portfolio element not found");

  const clone = element.cloneNode(true) as HTMLElement;
  clone.querySelectorAll("button, .pdf-exclude").forEach((node) => node.remove());
  clone.querySelectorAll("a").forEach((a) => {
    const span = document.createElement("span");
    span.innerHTML = a.innerHTML;
    span.className = a.className;
    span.style.textDecoration = "none";
    a.replaceWith(span);
  });

  const wrapper = document.createElement("div");
  wrapper.style.position = "fixed";
  wrapper.style.left = "-100000px";
  wrapper.style.top = "0";
  wrapper.style.width = "1200px";
  wrapper.style.background = "#141a35";
  wrapper.style.zIndex = "-1";
  wrapper.appendChild(clone);
  document.body.appendChild(wrapper);

  try {
    await document.fonts.ready;
    await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));

    await html2pdf()
      .set({
        margin: 0,
        filename: "antonio-fontes-portfolio.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          allowTaint: false,
          backgroundColor: "#141a35",
          logging: false,
          imageTimeout: 15000,
          windowWidth: 1200,
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
          compress: true,
        },
        pagebreak: {
          mode: ["css", "legacy"],
          avoid: ["h1", "h2", "h3", "img", ".rounded-xl"],
        },
      })
      .from(clone)
      .save();
  } finally {
    wrapper.remove();
  }
}
