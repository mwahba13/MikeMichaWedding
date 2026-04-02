/* ============================================================
   WEDDING WEBSITE — script.js
   Michaella & Michael · May 29, 2027
   ============================================================ */

// ── COUNTDOWN ──────────────────────────────────────────────
const WEDDING_DATE = new Date('2027-05-29T14:00:00-06:00'); // 2pm MDT

function updateCountdown() {
  const now  = new Date();
  const diff = WEDDING_DATE - now;

  if (diff <= 0) {
    document.getElementById('cd-days').textContent  = '0';
    document.getElementById('cd-hours').textContent = '0';
    document.getElementById('cd-mins').textContent  = '0';
    document.getElementById('cd-secs').textContent  = '0';
    return;
  }

  const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs  = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('cd-days').textContent  = days;
  document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('cd-mins').textContent  = String(mins).padStart(2, '0');
  document.getElementById('cd-secs').textContent  = String(secs).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ── NAV SCROLL ─────────────────────────────────────────────
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });

// ── MOBILE MENU ─────────────────────────────────────────────
const mobileMenu  = document.getElementById('mobile-menu');
const navToggle   = document.querySelector('.nav-toggle');
const mobileClose = document.querySelector('.mobile-close');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

navToggle.addEventListener('click', () => mobileMenu.classList.add('open'));
mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
mobileLinks.forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ── SCROLL FADE-IN ANIMATIONS ──────────────────────────────
const fadeSections = [
  '#countdown .countdown-inner',
  '#story .story-image',
  '#story .story-text',
  '#details h2',
  '.detail-card',
  '.tl-item',
  '.travel-card',
  '.venue-text',
  '#rsvp h2',
  '.rsvp-sub',
  '.rsvp-form-wrap',
];

fadeSections.forEach(sel => {
  document.querySelectorAll(sel).forEach((el, i) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${i * 80}ms`;
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── RSVP FORM ──────────────────────────────────────────────
const form    = document.getElementById('rsvp-form');
const success = document.getElementById('rsvp-success');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const fname     = document.getElementById('fname').value.trim();
  const lname     = document.getElementById('lname').value.trim();
  const email     = document.getElementById('email').value.trim();
  const attending = document.querySelector('input[name="attending"]:checked')?.value;

  if (!fname || !lname || !email) {
    alert('Please fill in your name and email address.');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  /*
   * ─── STATIC SITE NOTE ──────────────────────────────────────────────────────
   * This website is a static site, so there is no backend to handle RSVP data.
   * Options to collect RSVPs:
   *
   * Option A — Formspree (easiest, free tier):
   *   1. Sign up at https://formspree.io
   *   2. Create a form, get your endpoint URL
   *   3. Change the fetch URL below to your Formspree endpoint
   *   4. Remove the e.preventDefault() above and let the form submit normally
   *      OR use their AJAX approach below
   *
   * Option B — Google Forms embedded (zero setup):
   *   Replace this entire <section id="rsvp"> with an embedded Google Form iframe.
   *
   * Option C — Netlify Forms (if hosting on Netlify):
   *   Add  data-netlify="true"  to the <form> tag.
   *   Netlify handles submissions automatically, no code changes needed.
   *
   * For now, the form shows a success message on submission (demo mode).
   * ───────────────────────────────────────────────────────────────────────────
   *
   * UNCOMMENT AND CONFIGURE to use Formspree:
   *
   * const data = new FormData(form);
   * fetch('https://formspree.io/f/YOUR_FORM_ID', {
   *   method: 'POST',
   *   body: data,
   *   headers: { 'Accept': 'application/json' }
   * })
   * .then(res => {
   *   if (res.ok) { showSuccess(); }
   *   else { alert('Something went wrong. Please try again.'); }
   * })
   * .catch(() => alert('Network error. Please try again.'));
   */

  // Demo: just show success
  showSuccess();
});

function showSuccess() {
  form.classList.add('hidden');
  success.classList.remove('hidden');
  success.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ── SMOOTH ANCHOR OFFSET (accounts for fixed nav) ──────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = nav.offsetHeight + 8;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
