/* ======================================================
   LOADER + HERO ENTRY
====================================================== */
window.addEventListener("load", () => {
  document.body.classList.remove("loading");

  const preloader = document.getElementById("preloader");
  preloader.classList.add("fade-out");

  setTimeout(() => {
    preloader.style.display = "none";
    document.querySelector(".hero").classList.add("hero-visible");
  }, 700);
});

/* ======================================================
   THEME TOGGLE (WITH MEMORY)
====================================================== */
const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  themeToggle.innerHTML = "☀";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    themeToggle.innerHTML = "☀";
  } else {
    localStorage.setItem("theme", "dark");
    themeToggle.innerHTML = "☾";
  }
});

/* =========================
   SKILLS BAR ANIMATION
========================= */
const skillObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll(".bar span");

        bars.forEach(bar => {
          const level = bar.getAttribute("data-level");
          bar.style.width = level;
          bar.classList.add("filled"); // 🔑 REQUIRED
        });

        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

const skillsSection = document.querySelector("#skills");
if (skillsSection) skillObserver.observe(skillsSection);

/* ======================================================
   FADE-UP SECTIONS ON SCROLL
====================================================== */
const fadeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".fade-up").forEach(el => fadeObserver.observe(el));

/* ======================================================
   SIDE NAV ACTIVE LINK
====================================================== */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".side-nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
/* ======================================================
   SMOOTH SCROLL EASING (PREMIUM FEEL)
====================================================== */
const smoothLinks = document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) return;

    e.preventDefault();

    const offset = 80; // adjust for fixed UI
    const targetPosition = target.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 700;
    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  });
});
/* ======================================================
   SCROLL PROGRESS INDICATOR
====================================================== */
const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = `${scrollPercent}%`;
});
