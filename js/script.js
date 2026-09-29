/**
 * ==============================================================================
 * PORTFOLIO - ALEJANDRO PONCE | DESARROLLADOR WEB FULL STACK
 * Archivo: script.js (JavaScript Vanilla modular y accesible)
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Inicialización de módulos
  initNavbar();
  initScrollspy();
  initScrollReveal();
  initContactForm();
  initBackToTop();
  initCurrentYear();
});

/**
 * ------------------------------------------------------------------------------
 * 1. NAVEGACIÓN Y MENÚ HAMBURGUESA
 * ------------------------------------------------------------------------------
 */
function initNavbar() {
  const header = document.querySelector('.header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navBackdrop = document.getElementById('nav-backdrop');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!navToggle || !navMenu) return;

  // Alternar apertura/cierre del menú mobile
  const toggleMenu = (shouldOpen) => {
    const isOpen = typeof shouldOpen === 'boolean' 
      ? shouldOpen 
      : !navMenu.classList.contains('active');

    navToggle.classList.toggle('active', isOpen);
    navMenu.classList.toggle('active', isOpen);
    if (navBackdrop) navBackdrop.classList.toggle('active', isOpen);

    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  navToggle.addEventListener('click', () => toggleMenu());

  if (navBackdrop) {
    navBackdrop.addEventListener('click', () => toggleMenu(false));
  }

  // Cerrar menú al hacer clic en un enlace de navegación
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleMenu(false);
      }
    });
  });

  // Cerrar menú con la tecla 'Escape'
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      toggleMenu(false);
    }
  });

  // Efecto visual en la barra de navegación al hacer scroll
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * ------------------------------------------------------------------------------
 * 2. SCROLLSPY (Resaltado dinámico del enlace activo según la sección visible)
 * ------------------------------------------------------------------------------
 */
function initScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const onScroll = () => {
    const scrollPosition = window.scrollY + 180;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * ------------------------------------------------------------------------------
 * 3. ANIMACIONES DE APARICIÓN AL HACER SCROLL (Scroll Reveal)
 * ------------------------------------------------------------------------------
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  if (!revealElements.length) return;

  // Si el navegador soporta IntersectionObserver
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          // Dejar de observar una vez que ya apareció
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Respaldo para navegadores antiguos
    revealElements.forEach((el) => el.classList.add('reveal-visible'));
  }
}

/**
 * ------------------------------------------------------------------------------
 * 4. VALIDACIÓN Y GESTIÓN DEL FORMULARIO DE CONTACTO
 * ------------------------------------------------------------------------------
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nombreInput = document.getElementById('nombre');
  const emailInput = document.getElementById('email');
  const mensajeInput = document.getElementById('mensaje');
  const submitBtn = document.getElementById('submit-btn');
  const successAlert = document.getElementById('form-success-alert');
  const errorAlert = document.getElementById('form-error-alert');

  // Regex para validación de email estándar
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateField = (input, isValid, errorMessage) => {
    const errorEl = document.getElementById(`${input.id}-error`);
    if (!isValid) {
      input.classList.add('is-invalid');
      if (errorEl) {
        errorEl.textContent = errorMessage;
        errorEl.classList.add('visible');
      }
      return false;
    } else {
      input.classList.remove('is-invalid');
      if (errorEl) {
        errorEl.classList.remove('visible');
      }
      return true;
    }
  };

  // Limpiar errores al escribir
  [nombreInput, emailInput, mensajeInput].forEach((input) => {
    if (!input) return;
    input.addEventListener('input', () => {
      input.classList.remove('is-invalid');
      const errorEl = document.getElementById(`${input.id}-error`);
      if (errorEl) errorEl.classList.remove('visible');
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const isNombreValid = validateField(
      nombreInput,
      nombreInput.value.trim().length >= 2,
      'Por favor, ingresá un nombre válido (mínimo 2 caracteres).'
    );

    const isEmailValid = validateField(
      emailInput,
      emailRegex.test(emailInput.value.trim()),
      'Por favor, ingresá una dirección de correo electrónico válida.'
    );

    const isMensajeValid = validateField(
      mensajeInput,
      mensajeInput.value.trim().length >= 10,
      'Por favor, ingresá un mensaje detallado (mínimo 10 caracteres).'
    );

    if (!isNombreValid || !isEmailValid || !isMensajeValid) return;

    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> Enviando...';
    if (successAlert) successAlert.classList.remove('visible');
    if (errorAlert) errorAlert.classList.remove('visible');

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      });
      const result = await response.json();

      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error('El servicio de correo no aceptó el mensaje.');
      }

      form.reset();
      if (successAlert) {
        successAlert.classList.add('visible');
        successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      setTimeout(() => {
        if (successAlert) successAlert.classList.remove('visible');
      }, 6000);
    } catch (error) {
      if (errorAlert) {
        errorAlert.classList.add('visible');
        errorAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}

/**
 * ------------------------------------------------------------------------------
 * 5. BOTÓN FLOTANTE "VOLVER ARRIBA"
 * ------------------------------------------------------------------------------
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  const toggleBackToTop = () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', toggleBackToTop, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * ------------------------------------------------------------------------------
 * 6. ACTUALIZACIÓN AUTOMÁTICA DEL AÑO EN EL FOOTER
 * ------------------------------------------------------------------------------
 */
function initCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
