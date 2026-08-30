export async function exportPortfolioPdf() {
  const html2pdf = (await import("html2pdf.js")).default;

  const element = document.getElementById("portfolio-page");
  if (!element) throw new Error("Portfolio element not found");

  const clone = element.cloneNode(true) as HTMLElement;
  clone.querySelectorAll("a").forEach((a) => {
    const span = document.createElement("span");
    span.innerHTML = a.innerHTML;
    span.className = a.className;
    a.replaceWith(span);
  });
  clone.querySelectorAll("button, .pdf-exclude").forEach((node) => node.remove());

  const wrapper = document.createElement("div");
  wrapper.style.position = "fixed";
  wrapper.style.left = "-100000px";
  wrapper.style.top = "0";
  wrapper.style.width = "1200px";
  wrapper.style.background = "white";
  wrapper.appendChild(clone);
  document.body.appendChild(wrapper);

  try {
    await html2pdf().set({
      margin: 0,
      filename: "antonio-fontes-portfolio.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff", logging: false },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["css", "legacy"] },
    }).from(clone).save();
  } finally {
    wrapper.remove();
  }
}
