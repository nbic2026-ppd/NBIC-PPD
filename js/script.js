(() => {
  "use strict";
  const html = document.documentElement;
  const header = document.getElementById("siteHeader") || document.querySelector(".site-header");
  const langButtons = document.querySelectorAll("[data-set-lang]");
  const revealItems = document.querySelectorAll(".reveal");

  const setLanguage = (lang) => {
    const safeLang = lang === "en" ? "en" : "ms";
    html.dataset.lang = safeLang;
    html.lang = safeLang;
    langButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.setLang === safeLang);
      button.setAttribute("aria-pressed", button.dataset.setLang === safeLang ? "true" : "false");
    });
    try { localStorage.setItem("nbic-language", safeLang); } catch {}
  };

  let savedLanguage = null;
  try { savedLanguage = localStorage.getItem("nbic-language"); } catch {}
  setLanguage(savedLanguage || "ms");
  langButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.setLang)));

  const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 12);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }
  /* Mobile navigation is handled only by mobile-nav-fix.js to avoid duplicate click handlers. */
})();
