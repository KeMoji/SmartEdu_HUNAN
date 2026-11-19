'use strict';
(() => {
  // Navigation keeps the original multi-column menus without loading any inner pages.
  const nav = document.querySelector('.custom-nav-menu');
  const menuItems = [...document.querySelectorAll('[data-menu]')];
  let menuTimer;
  function closeMenus() {
    document.querySelectorAll('.submenu-container').forEach(p => p.hidden = true);
    menuItems.forEach(item => {
      item.classList.remove('has-submenu');
      item.querySelector('a').setAttribute('aria-expanded', 'false');
    });
  }
  function openMenu(item) {
    clearTimeout(menuTimer);
    closeMenus();
    const panel = document.getElementById('menu-' + item.dataset.menu);
    panel.hidden = false;
    item.classList.add('has-submenu');
    item.querySelector('a').setAttribute('aria-expanded', 'true');
  }
  menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => openMenu(item));
    item.addEventListener('focusin', () => openMenu(item));
    item.querySelector('a').addEventListener('click', event => {
      if (item.querySelector('a').getAttribute('href') === '#') {
        event.preventDefault(); openMenu(item);
      }
    });
  });
  nav.addEventListener('mouseenter', () => clearTimeout(menuTimer));
  nav.addEventListener('mouseleave', () => menuTimer = setTimeout(closeMenus, 100));
  nav.addEventListener('focusout', () => setTimeout(() => {
    if (!nav.contains(document.activeElement)) closeMenus();
  }, 0));
  document.querySelector('.nav-item:not([data-menu])').addEventListener('mouseenter', closeMenus);
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenus(); });

  const hero = document.querySelector('.hero');
  const slides = [...hero.querySelectorAll('.hero-slide')];
  const dots = [...hero.querySelectorAll('.hero-dot')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let active = 0, heroTimer;
  function showSlide(index) {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === active);
      slide.setAttribute('aria-hidden', String(i !== active));
      slide.tabIndex = i === active ? 0 : -1;
      dots[i].classList.toggle('is-active', i === active);
      dots[i].setAttribute('aria-pressed', String(i === active));
    });
  }
  const stopHero = () => clearInterval(heroTimer);
  function startHero() {
    stopHero();
    if (!reducedMotion && !document.hidden && !hero.matches(':hover') && !hero.contains(document.activeElement)) {
      heroTimer = setInterval(() => showSlide(active + 1), 5000);
    }
  }
  dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));
  hero.querySelector('.prev').addEventListener('click', () => showSlide(active - 1));
  hero.querySelector('.next').addEventListener('click', () => showSlide(active + 1));
  hero.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault(); showSlide(active + (event.key === 'ArrowLeft' ? -1 : 1));
    }
  });
  hero.addEventListener('mouseenter', stopHero);
  hero.addEventListener('mouseleave', startHero);
  hero.addEventListener('focusin', stopHero);
  hero.addEventListener('focusout', () => setTimeout(startHero, 0));
  document.addEventListener('visibilitychange', () => document.hidden ? stopHero() : startHero());
  startHero();

  // Six original feature entrances, five visible at a time, with an infinite track.
  const topic = document.querySelector('.middle-max');
  const track = topic.querySelector('.carousel-track');
  const topicCount = 6;
  let topicIndex = topicCount, moving = false;
  function updateTopicAccessibility() {
    [...track.children].forEach((item, i) => {
      const visible = i >= topicIndex && i < topicIndex + 5;
      item.setAttribute('aria-hidden', String(!visible));
      item.querySelector('a').tabIndex = visible ? 0 : -1;
    });
  }
  function moveTopic(direction) {
    if (moving) return;
    moving = true;
    topicIndex += direction;
    track.style.transition = reducedMotion ? 'none' : 'transform .5s ease-in-out';
    track.style.transform = `translateX(-${topicIndex * 20}%)`;
    updateTopicAccessibility();
    setTimeout(() => {
      if (topicIndex >= topicCount * 2) topicIndex -= topicCount;
      else if (topicIndex < topicCount) topicIndex += topicCount;
      track.style.transition = 'none';
      track.style.transform = `translateX(-${topicIndex * 20}%)`;
      updateTopicAccessibility(); moving = false;
    }, reducedMotion ? 0 : 510);
  }
  topic.querySelector('.carousel-arrow-left').addEventListener('click', () => moveTopic(-1));
  topic.querySelector('.carousel-arrow-right').addEventListener('click', () => moveTopic(1));
  updateTopicAccessibility();

  const backTop = document.querySelector('.backtop-btn');
  const floatTools = document.querySelector('.com-float-tools');
  function updateScroll() { floatTools.hidden = window.scrollY <= window.innerHeight; }
  addEventListener('scroll', updateScroll, {passive: true});
  backTop.addEventListener('click', () => scrollTo({top: 0, behavior: reducedMotion ? 'instant' : 'smooth'}));
  updateScroll();
  document.querySelector('.service-btn').addEventListener('click', event => event.currentTarget.classList.toggle('is-open'));

  const login = document.getElementById('login-dialog');
  document.querySelectorAll('[data-login]').forEach(button => button.addEventListener('click', () => login.showModal()));
  login.querySelector('.dialog-close').addEventListener('click', () => login.close());
  login.addEventListener('click', event => { if (event.target === login) {
    const rect = login.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) login.close();
  }});
  const assist = document.getElementById('accessibility-tools');
  const assistOpen = document.getElementById('assist-open');
  function toggleAssist(value) { assist.hidden = !value; assistOpen.setAttribute('aria-expanded', String(value)); }
  assistOpen.addEventListener('click', () => toggleAssist(assist.hidden));
  document.getElementById('assist-close').addEventListener('click', () => toggleAssist(false));
  document.getElementById('font-increase').addEventListener('click', event => {
    const enabled = document.body.classList.toggle('large-text');
    event.currentTarget.textContent = enabled ? '还原文字' : '放大文字';
  });
  document.getElementById('contrast-toggle').addEventListener('click', event => {
    const enabled = document.body.classList.toggle('high-contrast');
    event.currentTarget.setAttribute('aria-pressed', String(enabled));
  });
})();
