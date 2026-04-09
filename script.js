const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const revealNodes = Array.from(document.querySelectorAll(".reveal"));
const yearNodes = Array.from(document.querySelectorAll("[data-year]"));
const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const filterCards = Array.from(document.querySelectorAll(".case-card[data-category]"));

yearNodes.forEach((node) => {
  node.textContent = new Date().getFullYear();
});

if (prefersReducedMotion.matches) {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
} else if (revealNodes.length > 0) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.15,
    },
  );

  revealNodes.forEach((node) => observer.observe(node));
}

if (filterButtons.length > 0 && filterCards.length > 0) {
  const setFilter = (value) => {
    filterButtons.forEach((button) => {
      const isActive = button.dataset.filter === value;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    filterCards.forEach((card) => {
      const categories = (card.dataset.category || "").split(" ");
      const isVisible = value === "all" || categories.includes(value);
      card.classList.toggle("is-hidden", !isVisible);
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setFilter(button.dataset.filter || "all");
    });
  });

  setFilter("all");
}
