/* ======================================================
   LOADER + HERO ENTRY
====================================================== */
window.addEventListener("load", () => {
  document.body.classList.remove("loading");

  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 700);
  }

  startHeroTyping();
});

/* ======================================================
   HERO TYPING EFFECT (SAFE — NO HTML BREAK)
====================================================== */
function startHeroTyping() {
  const typingEl = document.querySelector(".typing-text");
  if (!typingEl) return;

  const text = typingEl.dataset.text;
  let index = 0;
  typingEl.textContent = "";

  function type() {
    if (index < text.length) {
      typingEl.textContent += text.charAt(index);
      index++;
      setTimeout(type, 80);
    }
  }

  type();
}

/* ======================================================
   THEME TOGGLE (WITH MEMORY)
====================================================== */
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
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
}

/* ======================================================
   SKILLS BAR ANIMATION
====================================================== */
const skillsSection = document.querySelector("#skills");

if (skillsSection) {
  const skillObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll(".bar span");

          bars.forEach(bar => {
            const level = bar.getAttribute("data-level");
            bar.style.width = level;
            bar.classList.add("filled");
          });

          skillObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  skillObserver.observe(skillsSection);
}

/* ======================================================
   FADE-UP SECTIONS ON SCROLL
====================================================== */
const fadeElements = document.querySelectorAll(".fade-up");

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

fadeElements.forEach(el => fadeObserver.observe(el));

/* ======================================================
   SIDE NAV ACTIVE LINK
====================================================== */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".side-nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
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
   SMOOTH SCROLL (CUSTOM EASING)
====================================================== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    const offset = 90;
    const targetPosition = target.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 700;
    let start = null;

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    function animation(currentTime) {
      if (!start) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
  });
});

/* ======================================================
   SCROLL PROGRESS BAR
====================================================== */
const progressBar = document.getElementById("scroll-progress");

if (progressBar) {
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${scrollPercent}%`;
  });
}

/* ======================================================
   HERO IMAGE PARALLAX
====================================================== */
const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove", e => {
  if (!heroImage) return;

  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;

  heroImage.style.transform = `translate(${x}px, ${y}px) scale(1.03)`;
});

/* ======================================================
   CERTIFICATE VIEWER MODAL
====================================================== */
const modal = document.getElementById("certModal");
const iframe = document.getElementById("certFrame");
const closeBtn = modal.querySelector(".cert-close");

document.querySelectorAll(".view-cert").forEach(btn => {
  btn.addEventListener("click", () => {
    iframe.src = btn.dataset.pdf;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.remove("active");
  iframe.src = "";
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeModal);

// click outside modal
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

// ESC key
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});
/* ======================================================
   HERO TYPING EFFECT (SAFE VERSION)
====================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const typingEl = document.getElementById("typing-text");
  if (!typingEl) return;

  const text = "Hi, I'm ";
  let index = 0;

  typingEl.textContent = "";

  function type() {
    if (index < text.length) {
      typingEl.textContent += text.charAt(index);
      index++;
      setTimeout(type, 80);
    }
  }

  // Start typing AFTER hero becomes visible
  setTimeout(type, 900);
});
/* ======================================================
   HERO TYPING SEQUENCE (NO CURSOR, SAFE)
====================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.getElementById("type-h1");
  const h2 = document.getElementById("type-h2");
  const desc = document.getElementById("type-desc");

  const tags = document.querySelector(".hero-tags");
  const connect = document.querySelector(".connect-label");
  const socials = document.querySelector(".social-icons");

  if (!h1 || !h2 || !desc) return;

  const textH1 = "Hi, I'm ";
  const textH2 = "A Data Science Student";
  const textDesc =
    "From Vignana Bharathi Institute of Technology, Hyderabad, Telangana, India.\n" +
    "Building intelligent solutions using data, analytics, and modern technologies.";

  function typeText(el, text, speed, callback) {
    let i = 0;
    el.textContent = "";

    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else if (callback) {
        callback();
      }
    }
    type();
  }

  // SEQUENCE
  setTimeout(() => {
    typeText(h1, textH1, 70, () => {
      typeText(h2, textH2, 45, () => {
        typeText(desc, textDesc, 18, () => {
          // SHOW EXTRAS AFTER TYPING
          [tags, connect, socials].forEach(el => {
            if (el) {
              el.classList.remove("hidden");
              el.classList.add("fade-in");
            }
          });
        });
      });
    });
  }, 600);
});
/* ======================================================
   HERO TYPING (FULL TEXT + SAFE FADE-IN)
====================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.getElementById("type-h1");
  const h2 = document.getElementById("type-h2");
  const desc = document.getElementById("type-desc");
  const fadeEls = document.querySelectorAll(".fade-after");

  if (!h1 || !h2 || !desc) return;

  const textH1 = "Hi, I’m Suraj Rao";
  const textH2 = "A Data Science Student";
  const textDesc =
    "From Vignana Bharathi Institute of Technology, Hyderabad, Telangana, India.\n" +
    "Building intelligent solutions using data, analytics, and modern technologies.";

  function type(el, text, speed, cb) {
    let i = 0;
    el.textContent = "";

    function run() {
      if (i < text.length) {
        el.textContent += text[i++];
        setTimeout(run, speed);
      } else if (cb) cb();
    }
    run();
  }

  setTimeout(() => {
    type(h1, textH1, 65, () => {
      type(h2, textH2, 45, () => {
        type(desc, textDesc, 18, () => {
          fadeEls.forEach(el => el.classList.add("show"));
        });
      });
    });
  }, 500);
});

