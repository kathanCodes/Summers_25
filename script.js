document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("modeToggle");
  const body = document.body;

  toggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
  });
});
