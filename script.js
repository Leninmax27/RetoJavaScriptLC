const panels = document.querySelectorAll(".panel");
const infoBox = document.getElementById("info-box");

// Información de cada panel
const descriptions = {
  1: "iPhone 17 Pro Max — Pantalla SuperClarity con tecnología TrueTone.",
  2: "Huawei P80 Pro — PureColor Display con visión reforzada.",
  3: "Samsung Galaxy Z Fold 8 — AmoledVision con Dynamic Brightness.",
  4: "Xiaomi 17 Pro Max — HyperVision con nitidez profesional.",
  5: "Honor Magic 8 Pro — PixelGlow con claridad extendida."
};

panels.forEach((panel, index) => {
  panel.addEventListener("click", () => {
    const isActive = panel.classList.contains("active");

    if (isActive) {
      panel.classList.remove("active");
      infoBox.textContent = "Selecciona un modelo";
      return;
    }

    panels.forEach((p) => p.classList.remove("active"));

    panel.classList.add("active");

    
    infoBox.textContent = descriptions[index + 1];
  });
});
