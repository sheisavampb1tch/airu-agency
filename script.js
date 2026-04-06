const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const revealNodes = Array.from(document.querySelectorAll(".reveal"));
const yearNode = document.querySelector("#year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (prefersReducedMotion.matches) {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
} else {
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
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.15,
    },
  );

  revealNodes.forEach((node) => observer.observe(node));
}
