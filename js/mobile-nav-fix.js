(() => {
  const mobileQuery = window.matchMedia("(max-width: 980px)");

  function setupNavigation() {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    if (!menuToggle || !navLinks || menuToggle.dataset.mobileFixReady === "true") return;

    menuToggle.dataset.mobileFixReady = "true";
    const dropdowns = [...navLinks.querySelectorAll(".nav-dropdown")];
    const toggles = [...navLinks.querySelectorAll(".nav-dropdown-toggle")];

    const closeDropdowns = (except = null) => {
      dropdowns.forEach((dropdown) => {
        if (dropdown === except) return;
        dropdown.classList.remove("open");
        const button = dropdown.querySelector(":scope > .nav-dropdown-toggle");
        if (button) button.setAttribute("aria-expanded", "false");
      });
    };

    const closeMenu = () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      closeDropdowns();
    };

    menuToggle.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const opening = !navLinks.classList.contains("open");
      navLinks.classList.toggle("open", opening);
      menuToggle.setAttribute("aria-expanded", String(opening));

      if (!opening) closeDropdowns();
    });

    toggles.forEach((button) => {
      button.addEventListener("click", (event) => {
        if (!mobileQuery.matches) return;

        event.preventDefault();
        event.stopPropagation();

        const dropdown = button.closest(".nav-dropdown");
        const opening = !dropdown.classList.contains("open");

        closeDropdowns(dropdown);
        dropdown.classList.toggle("open", opening);
        button.setAttribute("aria-expanded", String(opening));
      });
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (mobileQuery.matches) closeMenu();
      });
    });

    document.addEventListener("click", (event) => {
      if (!mobileQuery.matches) return;
      if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    const resetForViewport = () => {
      if (!mobileQuery.matches) {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        closeDropdowns();
      }
    };

    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener("change", resetForViewport);
    } else {
      mobileQuery.addListener(resetForViewport);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupNavigation);
  } else {
    setupNavigation();
  }
})();
