// Mobile navigation, active section states, and premium scroll reveal effects.
const navToggle = document.querySelector(".nav-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-links a, .footer-links a, .nav-cta");
const revealItems = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("section[id]");

function closeMenu() {
  navPanel.classList.remove("open");
  document.body.classList.remove("menu-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation menu");
}

navToggle.addEventListener("click", () => {
  const isOpen = navPanel.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
  const menuIsOpen = navPanel.classList.contains("open");
  const clickedInsideMenu = navPanel.contains(event.target);
  const clickedToggle = navToggle.contains(event.target);

  if (menuIsOpen && !clickedInsideMenu && !clickedToggle) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

// Reveal content when it enters the viewport.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 24, 180)}ms`;
  revealObserver.observe(item);
});

// Highlight the current navigation item while scrolling.
const activeNavObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);

      if (entry.isIntersecting && activeLink) {
        document.querySelectorAll(".nav-links a").forEach((link) => link.classList.remove("active"));
        activeLink.classList.add("active");
      }
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0
  }
);

sections.forEach((section) => activeNavObserver.observe(section));

// FAQ accordion controls.
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.closest(".faq-item");
    const isOpen = item.classList.toggle("open");

    question.setAttribute("aria-expanded", String(isOpen));
  });
});

// Copy the visible email address from the contact section.
const copyEmailButton = document.querySelector(".copy-email");
const copyStatus = document.querySelector(".copy-status");

if (copyEmailButton && copyStatus) {
  copyEmailButton.addEventListener("click", async () => {
    const email = copyEmailButton.dataset.email;

    try {
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = "Email copied";
    } catch {
      copyStatus.textContent = email;
    }

    window.setTimeout(() => {
      copyStatus.textContent = "";
    }, 2200);
  });
}
