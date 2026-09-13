(() => {
  const navInner = document.querySelector('.navin');
  const desktopLinks = navInner?.querySelector('.links');
  const cta = navInner?.querySelector('.navcta');

  if (!navInner || !desktopLinks || !cta || navInner.querySelector('.mobile-menu-toggle')) return;

  const actions = document.createElement('div');
  actions.className = 'nav-actions';
  cta.replaceWith(actions);
  actions.appendChild(cta);

  const button = document.createElement('button');
  button.className = 'mobile-menu-toggle';
  button.type = 'button';
  button.setAttribute('aria-label', 'Open navigation menu');
  button.setAttribute('aria-expanded', 'false');
  button.innerHTML = '<span class="menu-lines" aria-hidden="true"><span></span></span>';

  const menu = document.createElement('nav');
  menu.className = 'mobile-menu';
  menu.setAttribute('aria-label', 'Mobile navigation');
  menu.hidden = true;

  desktopLinks.querySelectorAll('a').forEach((link) => {
    const clone = link.cloneNode(true);
    menu.appendChild(clone);
  });

  actions.appendChild(button);
  navInner.appendChild(menu);

  const closeMenu = () => {
    button.classList.remove('is-open');
    menu.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open navigation menu');
    window.setTimeout(() => {
      if (!menu.classList.contains('is-open')) menu.hidden = true;
    }, 180);
  };

  const openMenu = () => {
    menu.hidden = false;
    requestAnimationFrame(() => {
      button.classList.add('is-open');
      menu.classList.add('is-open');
    });
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', 'Close navigation menu');
  };

  button.addEventListener('click', (event) => {
    event.stopPropagation();
    if (button.getAttribute('aria-expanded') === 'true') closeMenu();
    else openMenu();
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!navInner.contains(event.target)) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      button.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });
})();
