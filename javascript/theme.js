//DARK LIGHT MODE
(function () {
  const btn = document.getElementById("themeToggle");
  const photo = document.querySelector(".myphoto");
  if (!btn) return;

  function setPhoto(isLight) {
    if (!photo) return;
    photo.src = isLight ? "img/moi3.png" : "img/moi.png";
  }

  //PREFERENCE SAUVEGARDEE
  //on lit la preference sauvegardee
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.body.classList.add("light-mode");
    setPhoto(true);
  }

  btn.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    setPhoto(isLight);
  });
})();
