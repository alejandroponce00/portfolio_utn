# Portfolio Profesional — Alejandro Ponce

> **Desarrollador Web Full Stack**  
> Sitio web personal, moderno, responsive y optimizado para reclutadores, empresas y la comunidad de desarrolladores.

Construido exclusivamente con estándares web modernos: **HTML5 semántico**, **CSS3 (Custom Properties & Flexbox/Grid)** y **JavaScript Vanilla (ES6+)**. Sin frameworks pesados ni dependencias innecesarias.

---

## 🚀 Características Principales

- **Diseño UI/UX Profesional & Moderno:** Estética oscura (*Dark Mode*) con acentos tecnológicos en gradiente azul cian y violeta, superficies con desenfoque de fondo (*glassmorphism*) y sombras sutiles.
- **100% Responsive:** Diseñado con enfoque *mobile-first* y adaptabilidad fluida para smartphones, tablets, laptops y pantallas de escritorio de gran resolución.
- **Rendimiento Ultrarrápido:** Al no utilizar frameworks JavaScript pesados, la carga inicial es instantánea.
- **Interactividad con JS Vanilla:**
  - Menú hamburguesa accesible con bloqueo de scroll, soporte para tecla `Esc` y cierre automático al navegar.
  - *Scrollspy* que resalta la sección activa en la barra de navegación mientras el usuario se desplaza.
  - Animaciones suaves de aparición al hacer scroll (*Scroll Reveal*) mediante la API nativa de `IntersectionObserver`.
  - Validación completa del formulario en el lado del cliente con avisos de error y estado visual de éxito.
  - Botón flotante para volver arriba (*Back to top*) con aparición condicionada por scroll.
  - Actualización automática del año de copyright en el pie de página.
- **Accesibilidad y SEO:**
  - Estructura HTML5 semántica (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Navegación amigable con teclado y soporte ARIA (`aria-expanded`, `aria-label`, `aria-live`).
  - Etiquetas Open Graph y metadatos para compartir en redes sociales de forma atractiva.

---

## 📁 Estructura del Proyecto

```text
portfolio/
│
├── index.html                  # Estructura semántica, metadatos y contenido
├── css/
│   └── styles.css              # Variables de diseño, layout, componentes y media queries
├── js/
│   └── script.js               # Lógica interactiva en Vanilla JavaScript modular
├── img/
│   └── projects/               # Ilustraciones y capturas de proyectos
│       ├── cocinero-virtual.svg
│       ├── sistema-alquiler.svg
│       ├── scrapiofertas.svg
│       └── sistema-rag.svg
└── README.md                   # Documentación y guía de personalización
```

---

## 🛠️ Cómo Ejecutar el Proyecto Localmente

Podés visualizar y probar el proyecto en tu computadora de cualquiera de las siguientes formas:

### Opción 1: Directamente en tu Navegador (Sin instalación)
1. Abrí la carpeta `portfolio`.
2. Hacé doble clic en el archivo `index.html` (o clic derecho > **Abrir con** > Google Chrome / Firefox / Edge).

### Opción 2: Con la extensión Live Server de VS Code (Recomendado)
1. Abrí la carpeta `portfolio` en **Visual Studio Code**.
2. Si tenés instalada la extensión **Live Server** (de Ritwick Dey), hacé clic derecho en `index.html` y seleccioná **"Open with Live Server"**.
3. Se abrirá automáticamente en tu navegador en `http://127.0.0.1:5500`.

### Opción 3: Con Python (Consola de comandos / PowerShell)
Si tenés Python instalado, abrí la terminal en la carpeta `portfolio` y ejecutá:
```bash
python -m http.server 3000
```
Luego abrí en tu navegador: `http://localhost:3000`

### Opción 4: Con Node.js
```bash
npx serve .
```

---

## ✏️ Datos a Personalizar

Dentro de `index.html`, buscá los comentarios señalados con `<!-- REEMPLAZAR: ... -->` para colocar tus datos reales:

1. **Perfiles de Redes Sociales:**
   - Enlace a tu GitHub: Cambiá `https://github.com/tu-usuario` por tu URL real.
   - Enlace a tu LinkedIn: Cambiá `https://linkedin.com/in/tu-usuario` por tu perfil oficial.
2. **Correo Electrónico:**
   - En la sección **Contacto**, cambiá `tu-email@ejemplo.com` tanto en el texto visible como en el atributo `href="mailto:tu-email@ejemplo.com"`.
3. **Imágenes de Proyectos:**
   - Las imágenes actuales utilizan gráficos vectoriales SVG limpios incluidos en `img/projects/`.
   - Podés reemplazarlas por capturas de pantalla reales de tus aplicaciones (ej. formato `.webp`, `.png` o `.jpg`) en esa misma carpeta y actualizar el atributo `src` de las etiquetas `<img>`.
4. **Enlaces de Proyectos ("Ver proyecto" y "GitHub"):**
   - Actualizá las URLs de los botones de cada tarjeta de proyecto con tus repositorios y enlaces a demos activas en Vercel, Firebase o GitHub.

---

## 🌐 Guía para Publicar Gratis en Internet

### En GitHub Pages:
1. Creá un repositorio en GitHub (por ejemplo, `portfolio` o `tu-usuario.github.io`).
2. Subí todos los archivos de esta carpeta a la rama `main`.
3. En GitHub, andá a **Settings** > **Pages**.
4. En **Build and deployment** > **Branch**, seleccioná `main` y la carpeta `/ (root)`.
5. Hacé clic en **Save**. En 1 o 2 minutos tu portfolio estará publicado online con certificado SSL gratuito.

### En Vercel o Netlify:
- Conectá tu repositorio de GitHub directamente a Vercel o Netlify. Al ser un sitio estático puro (HTML/CSS/JS), el despliegue es automático e instantáneo con detección sin configuración previa.
