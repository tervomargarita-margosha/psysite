// ===== Мобильное меню =====
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger?.addEventListener('click', () => {
  nav.classList.toggle('is-open');
});

// Закрываем меню при клике на ссылку
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
  });
});

// ===== Lightbox для дипломов =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox?.querySelector('.lightbox__img');
const lightboxClose = lightbox?.querySelector('.lightbox__close');

document.querySelectorAll('.diploma').forEach(btn => {
  btn.addEventListener('click', () => {
    const imgSrc = btn.getAttribute('data-img');
    if (!imgSrc || !lightbox || !lightboxImg) return;
    lightboxImg.src = imgSrc;
    lightboxImg.alt = btn.querySelector('img')?.alt || '';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// ===== Тень у шапки при скролле =====
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 4px 20px -8px rgba(68, 48, 37, 0.12)';
    } else {
      header.style.boxShadow = 'none';
    }
  }, { passive: true });
}

// ===== Плавный скролл =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#' || targetId.length < 2) return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});