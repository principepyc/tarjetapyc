// Año dinámico en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Brillo dorado que sigue al cursor en cada tarjeta
document.querySelectorAll(".link").forEach((el) => {
  el.addEventListener("pointermove", (e) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
});

// Compartir (usa el menú nativo en celulares; si no, copia el link)
const shareBtn = document.getElementById("share-btn");
const shareLabel = document.getElementById("share-label");

shareBtn.addEventListener("click", async () => {
  const data = {
    title: "Príncipe & Centauro",
    text: "Todas las redes de Príncipe & Centauro",
    url: location.href,
  };
  try {
    if (navigator.share) {
      await navigator.share(data);
    } else {
      await navigator.clipboard.writeText(location.href);
      shareLabel.textContent = "¡Link copiado!";
      setTimeout(() => (shareLabel.textContent = "Compartir tarjeta"), 2000);
    }
  } catch (_) {
    /* el usuario canceló */
  }
});
