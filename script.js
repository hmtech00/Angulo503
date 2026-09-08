/* =====================================================
   ANGULO 503 — script.js
   Sistema de conteúdo + interações (vanilla JS, sem dependências)
   ===================================================== */

(function () {
  'use strict';

  /* =====================================================
     EDITAR AQUI — CONTATO
     ===================================================== */
  const restaurantData = {
    name: "Angulo 503",
    phone: "+39 371 560 1539",
    phoneHref: "tel:+393715601539",
    address: {
      line1: "Viale Luigi Torelli, 5",
      line2: "20158 Milano MI, Italia"
    },
    googleMapsUrl: "https://www.google.com/maps/place/angulo+503+restaurante/@45.4958027,9.170763,19z/",
    // EDITAR AQUI — MENU: inserire qui il link del menu digitale ufficiale, se disponibile
    menuUrl: "", // esempio: "https://www.angulo503.it/menu.pdf"
    // EDITAR AQUI — SOCIAL: inserire qui il link Instagram ufficiale, se disponibile
    instagramUrl: ""
  };

  /* =====================================================
     EDITAR AQUI — PIATTI SIGNATURE (sezione "SAPORI DA SCOPRIRE")
     size: "large" | "regular" | "small" — controlla la composizione a griglia
     price: lasciare "" se non confermato
     ===================================================== */
  const signatureDishes = [
    { name: "Churrasco “503”", desc: "Carne alla griglia, il piatto forte della casa.", price: "€25", size: "large", ph: "Churrasco 503 — foto do prato" },
    { name: "Pupusas", desc: "L'anima di El Salvador, fatte a mano.", price: "da €2", size: "regular", ph: "Pupusas — foto do prato", img: "assets/images/pupusas-plancha.jpg", imgAlt: "Pupusas alla piastra, Angulo 503" },
    { name: "Chicharrón con Yuca", desc: "Croccante, servito con yuca e curtido.", price: "€15", size: "regular", ph: "Chicharrón con yuca — foto do prato", img: "assets/images/yuca-frita.jpg", imgAlt: "Chicharrón con yuca, Angulo 503" },
    { name: "Pescado Frito", desc: "Pesce fritto secondo la tradizione salvadoreña.", price: "€20", size: "small", ph: "Pescado frito — foto do prato" },
    { name: "Camarones Empanizados", desc: "Gamberi impanati, croccanti fuori, teneri dentro.", price: "€18", size: "small", ph: "Camarones — foto do prato", img: "assets/images/camarones-empanizados.jpg", imgAlt: "Camarones empanizados, Angulo 503" },
    { name: "Cena Típica", desc: "Un assaggio completo della cucina di casa.", price: "€17", size: "regular", ph: "Cena típica — foto do prato", img: "assets/images/churrasco-plato.jpg", imgAlt: "Cena típica, Angulo 503" }
  ];

  /* =====================================================
     EDITAR AQUI — MENU COMPLETO
     Categorie e prezzi. "Il menu può essere soggetto a variazioni."
     ===================================================== */
  const menuData = [
    {
      category: "Entradas",
      items: [
        { name: "Pastelitos de pollo o carne", price: "€8" },
        { name: "Enchiladas de carne o pollo", price: "€8" },
        { name: "Yuca o pescaditas", price: "€12" },
        { name: "Chicharrón con yuca", price: "€15" },
        { name: "Chicharrón con tortilla", price: "€15" },
        { name: "Empanadas de leche o frijol", price: "€9" },
        { name: "Nuegados de yuca", price: "€7" }
      ]
    },
    {
      category: "Pupusas",
      items: [
        { name: "Revueltas", price: "€2,50" },
        { name: "Frijol con queso", price: "€2" },
        { name: "Chicharrón con queso", price: "€3" },
        { name: "Queso con loroco", price: "€3" },
        { name: "Queso con ajo", price: "€2,50" },
        { name: "Pollo con queso", price: "€2,50" },
        { name: "Jalapeño con queso", price: "€2,50" },
        { name: "Zucchine con queso", price: "€2,50" }
      ]
    },
    {
      category: "Platos Fuertes",
      items: [
        { name: "Churrasco “503”", price: "€25" },
        { name: "Carne a la plancha", price: "€17" },
        { name: "Pechuga a la plancha", price: "€17" },
        { name: "Pescado frito", price: "€20" },
        { name: "Pescado frito relleno de camarones al ajillo", price: "€28" },
        { name: "Camarones empanizados", price: "€18" },
        { name: "Sopa de tortilla", price: "€15" },
        { name: "Cena típica", price: "€17" }
      ]
    },
    {
      category: "Postre",
      items: [
        { name: "Tres leches", price: "€6" }
      ]
    },
    {
      category: "Bebidas",
      items: [
        { name: "Horchata", price: "€8" },
        { name: "Cebada", price: "€8" },
        { name: "Fresa", price: "€4,50" },
        { name: "Banana y vainilla", price: "€4,50" },
        { name: "Naranja con huevo", price: "€4,50" }
      ]
    },
    {
      category: "Cocktails",
      items: [
        { name: "503", price: "€10" },
        { name: "El Pulgarcito", price: "€10" },
        { name: "Sangria", price: "€8" },
        { name: "Sangria Blanca", price: "€8" },
        { name: "Mai Tai", price: "€8" },
        { name: "Gin Tonic", price: "€8" },
        { name: "Caipiroska", price: "€8" },
        { name: "Caipirinha", price: "€8" },
        { name: "Paloma", price: "€8" },
        { name: "Cuba Libre", price: "€8" },
        { name: "Mimosa", price: "€8" },
        { name: "Piña Colada", price: "€8" },
        { name: "Mojito", price: "€8" },
        { name: "Spritz Aperol/Campari", price: "€8" },
        { name: "Moscow Mule", price: "€8" }
      ]
    }
  ];

  /* =====================================================
     EDITAR AQUI — FOTOS: GALLERY
     size: "normal" | "wide" | "tall"
     ===================================================== */
  const galleryData = [
    { ph: "Ingresso di Angulo 503", size: "wide", img: "assets/images/facciata-ingresso.jpg", alt: "Ingresso di Angulo 503, Viale Luigi Torelli 5" },
    { ph: "Pupusas alla piastra — dettaglio", size: "normal", img: "assets/images/pupusas-plancha.jpg", alt: "Pupusas alla piastra" },
    { ph: "Camarones empanizados — dettaglio", size: "tall", img: "assets/images/camarones-empanizados.jpg", alt: "Camarones empanizados" },
    { ph: "Sopa de res", size: "normal", img: "assets/images/sopa-de-res.jpg", alt: "Sopa de res servita in tavola" },
    { ph: "Cocktail della casa", size: "normal", img: "assets/images/cocktail-503.jpg", alt: "Cocktail servito da Angulo 503" },
    { ph: "Piatto misto della casa", size: "wide", img: "assets/images/churrasco-plato.jpg", alt: "Piatto misto servito da Angulo 503" },
    { ph: "Formaggio filante — pupusa", size: "normal", img: "assets/images/pupusas-queso-fundido.jpg", alt: "Pupusa con formaggio filante" },
    { ph: "Enchiladas de chorizo", size: "tall", img: "assets/images/enchiladas-chorizo.jpg", alt: "Enchiladas de chorizo servite da Angulo 503" }
  ];

  /* =====================================================
     HEADER — scroll state
     ===================================================== */
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* =====================================================
     MOBILE MENU
     ===================================================== */
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  function closeMobileNav() {
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  function toggleMobileNav() {
    const isOpen = mobileNav.classList.toggle('open');
    menuToggle.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
  menuToggle.addEventListener('click', toggleMobileNav);
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileNav));

  /* =====================================================
     SIGNATURE DISHES — render
     ===================================================== */
  const dishGrid = document.getElementById('dishGrid');
  const sizeClass = { large: 'large', small: 'small', regular: '' };
  dishGrid.innerHTML = signatureDishes.map(d => `
    <article class="dish-card ${sizeClass[d.size] || ''}" ${d.img ? '' : `data-ph="${escapeHtml(d.ph)}"`}>
      ${d.img ? `<img class="dish-photo" src="${escapeHtml(d.img)}" alt="${escapeHtml(d.imgAlt || d.name)}" loading="lazy" decoding="async">` : ''}
      <div class="dish-info">
        <h3 class="dish-name">${escapeHtml(d.name)}</h3>
        <p class="dish-desc">${escapeHtml(d.desc)}</p>
        ${d.price ? `<span class="dish-price">${escapeHtml(d.price)}</span>` : ''}
      </div>
    </article>
  `).join('');

  /* =====================================================
     MENU PREVIEW — tabs + panels
     ===================================================== */
  const menuTabs = document.getElementById('menuTabs');
  const menuPanels = document.getElementById('menuPanels');

  menuData.forEach((cat, i) => {
    const tabId = `tab-${i}`;
    const panelId = `panel-${i}`;

    const tab = document.createElement('button');
    tab.className = 'menu-tab' + (i === 0 ? ' active' : '');
    tab.textContent = cat.category.toUpperCase();
    tab.id = tabId;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    tab.setAttribute('aria-controls', panelId);
    tab.addEventListener('click', () => activateTab(i));
    menuTabs.appendChild(tab);

    const panel = document.createElement('div');
    panel.className = 'menu-panel' + (i === 0 ? ' active' : '');
    panel.id = panelId;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tabId);
    panel.innerHTML = `<div class="menu-items">${cat.items.map(it => `
      <div class="menu-item">
        <span class="menu-item-name">${escapeHtml(it.name)}</span>
        <span class="menu-item-price">${escapeHtml(it.price)}</span>
      </div>`).join('')}</div>`;
    menuPanels.appendChild(panel);
  });

  function activateTab(index) {
    menuTabs.querySelectorAll('.menu-tab').forEach((t, i) => {
      t.classList.toggle('active', i === index);
      t.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });
    menuPanels.querySelectorAll('.menu-panel').forEach((p, i) => {
      p.classList.toggle('active', i === index);
    });
  }

  /* =====================================================
     MENU CTA — abre o cardápio digital
     ===================================================== */
  const MENU_URL = restaurantData.menuUrl; // EDITAR AQUI — MENU
  const menuCtaBtn = document.getElementById('menuCtaBtn');
  menuCtaBtn.addEventListener('click', () => {
    if (MENU_URL) {
      window.open(MENU_URL, '_blank', 'noopener,noreferrer');
    } else {
      document.getElementById('menu-preview').scrollIntoView({ behavior: 'smooth' });
    }
  });

  /* =====================================================
     GALLERY — render + lightbox
     ===================================================== */
  const galleryGrid = document.getElementById('galleryGrid');
  galleryData.forEach((g, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item' + (g.size === 'wide' ? ' wide' : '') + (g.size === 'tall' ? ' tall' : '');
    if (!g.img) item.dataset.ph = g.ph;
    item.dataset.index = i;
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', `Apri immagine: ${g.alt || g.ph}`);
    item.innerHTML = (g.img ? `<img src="${escapeHtml(g.img)}" alt="${escapeHtml(g.alt || g.ph)}" loading="lazy" decoding="async">` : '')
      + `<div class="gallery-item-view"><span>VIEW</span></div>`;
    galleryGrid.appendChild(item);
  });

  const lightbox = document.getElementById('lightbox');
  const lightboxMedia = document.getElementById('lightboxMedia');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  let currentIndex = 0;
  let lastFocused = null;

  function openLightbox(index) {
    currentIndex = index;
    renderLightbox();
    lastFocused = document.activeElement;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
    document.addEventListener('keydown', onLightboxKeydown);
  }
  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onLightboxKeydown);
    if (lastFocused) lastFocused.focus();
  }
  function renderLightbox() {
    const g = galleryData[currentIndex];
    lightboxMedia.classList.toggle('has-image', Boolean(g.img));
    lightboxMedia.innerHTML = g.img
      ? `<img src="${escapeHtml(g.img)}" alt="${escapeHtml(g.alt || g.ph)}">`
      : `<span>${escapeHtml(g.ph)}</span>`;
  }
  function nextImage() { currentIndex = (currentIndex + 1) % galleryData.length; renderLightbox(); }
  function prevImage() { currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length; renderLightbox(); }

  function onLightboxKeydown(e) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  }

  galleryGrid.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;
    openLightbox(Number(item.dataset.index));
  });
  galleryGrid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const item = e.target.closest('.gallery-item');
      if (!item) return;
      e.preventDefault();
      openLightbox(Number(item.dataset.index));
    }
  });
  lightboxClose.addEventListener('click', closeLightbox);
  lightboxNext.addEventListener('click', nextImage);
  lightboxPrev.addEventListener('click', prevImage);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  // Swipe on mobile
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  lightbox.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(dx) > 50) { dx > 0 ? prevImage() : nextImage(); }
  }, { passive: true });

  /* =====================================================
     SOCIAL — Instagram (oculto se não configurado)
     ===================================================== */
  if (restaurantData.instagramUrl) {
    const footerIg = document.getElementById('footerInstagram');
    footerIg.href = restaurantData.instagramUrl;
    footerIg.hidden = false;
  }

  /* =====================================================
     SCROLL REVEAL — experience items
     ===================================================== */
  const observed = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && observed.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    observed.forEach(el => io.observe(el));
  } else {
    observed.forEach(el => el.classList.add('in-view'));
  }

  /* =====================================================
     MOBILE FIXED MENU FAB — hide near #menu-preview
     ===================================================== */
  const fab = document.getElementById('mobileMenuFab');
  const menuSection = document.getElementById('menu-preview');
  const footerSection = document.querySelector('.site-footer');
  if ('IntersectionObserver' in window && fab && menuSection) {
    const hideTargets = new Set();
    const fabObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) hideTargets.add(entry.target);
        else hideTargets.delete(entry.target);
      });
      fab.classList.toggle('hide', hideTargets.size > 0);
    }, { threshold: 0.1 });
    fabObserver.observe(menuSection);
    if (footerSection) fabObserver.observe(footerSection);
  }

  /* =====================================================
     Helpers
     ===================================================== */
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

})();
