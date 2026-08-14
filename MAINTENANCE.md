# Cable Line Communication - Guía de Mantenimiento

## 1. Descripción del proyecto

Sitio web corporativo de **Cable Line Communication** desarrollado como aplicación frontend moderna con **React + TypeScript + Vite**.

El proyecto fue migrado desde una versión legacy basada en HTML, CSS y JavaScript a una estructura React más modular, mantenible y responsive.

El sitio incluye:

- Página de Inicio
- Página Nosotros
- Página Servicios
- Página Contacto
- Navegación con React Router
- Idiomas Inglés / Español
- Diseño responsive para desktop, tablet y móvil
- Footer global
- Botón flotante de WhatsApp
- Formulario de contacto
- Configuración centralizada de datos de la empresa
- Build de producción mediante Vite

---

## 2. Ubicación recomendada de este documento

Guardar este archivo en la **raíz del proyecto**, al mismo nivel que `package.json`.

Estructura recomendada:

```text
cable-line-communication-react/
├── README.md
├── MAINTENANCE.md          <- este documento
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── index.html
├── public/
├── src/
└── dist/
```

Se recomienda mantener también un `README.md` corto para descripción general y usar `MAINTENANCE.md` para detalles técnicos y de mantenimiento.

---

## 3. Tecnologías utilizadas

### Frontend

- React 19
- TypeScript
- Vite
- React Router DOM
- CSS modular por página/componente
- React Compiler

### Dependencias actuales

Según `package.json`:

```json
"dependencies": {
  "react": "^19.2.8",
  "react-dom": "^19.2.8",
  "react-router-dom": "^7.18.2"
}
```

Dependencias principales de desarrollo:

```json
"devDependencies": {
  "@vitejs/plugin-react": "^6.0.4",
  "typescript": "~6.0.2",
  "vite": "^8.2.0",
  "eslint": "^10.8.0",
  "babel-plugin-react-compiler": "^1.0.0",
  "@rolldown/plugin-babel": "^0.2.3"
}
```

### Versiones usadas durante el desarrollo

- Node.js: `v24.19.0`
- npm: `11.1.0`

---

## 4. Instalación inicial realizada

El proyecto fue creado con Vite usando React + TypeScript.

Después se instaló React Router:

```powershell
npm.cmd install react-router-dom
```

En PowerShell se utilizó `npm.cmd` porque la ejecución de `npm.ps1` estaba restringida por la política de ejecución del sistema.

Para una nueva computadora no es necesario reinstalar cada paquete manualmente.

Después de clonar/copiar el proyecto ejecutar:

```powershell
npm.cmd install
```

Esto instalará las dependencias definidas en `package.json`.

---

## 5. Comandos principales

### Ejecutar en desarrollo

```powershell
npm.cmd run dev
```

Normalmente Vite levantará el sitio en:

```text
http://localhost:5173/
```

### Crear build de producción

```powershell
npm.cmd run build
```

Este comando ejecuta:

```text
tsc -b
vite build
```

Si todo está correcto se crea la carpeta:

```text
dist/
```

### Probar el build localmente

```powershell
npm.cmd run preview
```

### Ejecutar ESLint

```powershell
npm.cmd run lint
```

---

## 6. Estructura principal

```text
src/
├── assets/
│   └── images/
│       ├── cta/
│       ├── logo/
│       ├── services/
│       ├── team/
│       └── vehicle/
│
├── components/
│   ├── common/
│   ├── home/
│   └── layout/
│
├── config/
│   └── siteConfig.ts
│
├── context/
│   ├── LanguageContext.ts
│   └── LanguageProvider.tsx
│
├── hooks/
│   └── useLanguage.ts
│
├── i18n/
│   └── translations.ts
│
├── pages/
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── HomePage.tsx
│   └── ServicesPage.tsx
│
├── styles/
│   ├── home/
│   ├── pages/
│   ├── global.css
│   ├── layout.css
│   └── variables.css
│
├── App.tsx
├── index.css
└── main.tsx
```

---

## 7. Arquitectura

### `main.tsx`

Responsable de iniciar React.

Actualmente envuelve la aplicación con:

```text
BrowserRouter
└── LanguageProvider
    └── App
```

### `App.tsx`

Contiene el layout global:

```text
Header
Routes
Footer
WhatsAppButton
```

Rutas principales:

```text
/           Home
/about      About
/services   Services
/contact    Contact
```

---

## 8. Páginas desarrolladas

### Home

Archivo:

```text
src/pages/HomePage.tsx
```

Componentes:

```text
Hero
ServicesPreview
Benefits
Fleet
HomeCta
```

Objetivo:

- Presentar rápidamente la empresa
- Mostrar servicios principales
- Mostrar beneficios
- Mostrar vehículos/equipo
- Cerrar con CTA

### About

Archivo:

```text
src/pages/AboutPage.tsx
```

Incluye:

- Hero
- Quiénes somos
- Misión
- Visión
- Valores
- CTA

### Services

Archivo:

```text
src/pages/ServicesPage.tsx
```

Incluye seis servicios principales:

1. Underground Construction
2. Aerial Construction
3. Horizontal Directional Drilling
4. Fiber Optic Installation
5. Splicing & Testing
6. Network Maintenance

También incluye sectores atendidos y CTA.

### Contact

Archivo:

```text
src/pages/ContactPage.tsx
```

Incluye:

- Teléfono
- Email
- WhatsApp
- Formulario
- Selección de servicio
- What Happens Next
- Beneficios de servicio
- CTA final

---

## 9. Diferencia entre `ServicesPreview` y `ServicesPage`

`ServicesPreview` solamente se usa en el Home.

Archivo:

```text
src/components/home/ServicesPreview.tsx
```

Muestra tres servicios destacados.

La página completa:

```text
src/pages/ServicesPage.tsx
```

muestra todos los servicios y más información.

No reemplazar `ServicesPage` por `ServicesPreview`.

---

## 10. Sistema de idiomas

El sitio funciona en:

- English
- Español

Archivos principales:

```text
src/context/LanguageContext.ts
src/context/LanguageProvider.tsx
src/hooks/useLanguage.ts
src/i18n/translations.ts
```

Ejemplo de uso:

```tsx
const { t } = useLanguage()

return <h1>{t.navigation.home}</h1>
```

### Regla importante

Todo texto que deba cambiar entre inglés y español debe agregarse en:

```text
src/i18n/translations.ts
```

Se debe mantener la misma estructura en `en` y `es`.

Ejemplo:

```ts
en: {
  home: {
    hero: {
      title: '...'
    }
  }
},

es: {
  home: {
    hero: {
      title: '...'
    }
  }
}
```

Si una propiedad existe en inglés pero no en español, TypeScript puede reportar errores o la interfaz puede quedar inconsistente.

---

## 11. Configuración centralizada de la empresa

Archivo:

```text
src/config/siteConfig.ts
```

Debe ser la fuente principal para datos que no cambian por idioma.

Estructura recomendada:

```ts
export const siteConfig = {
  businessName: 'Cable Line Communication',

  phone: {
    display: '267-588-5005',
    href: '+12675885005',
  },

  email: 'Juliocableline@gmail.com',

  whatsapp: {
    number: '12675885005',
    message:
      'Hola, me gustaría recibir más información sobre sus servicios.',
  },

  businessHours: {
    days: 'Monday - Friday',
    hours: '8:00 AM - 6:00 PM',
  },

  navigation: {
    home: '/',
    about: '/about',
    services: '/services',
    contact: '/contact',
  },
} as const
```

### Regla importante

No repetir manualmente teléfono, email o número de WhatsApp en varios componentes.

Usar:

```tsx
siteConfig.phone.display
siteConfig.phone.href
siteConfig.email
siteConfig.whatsapp.number
```

Así un cambio futuro se realiza en un solo lugar.

---

## 12. Header

Archivo:

```text
src/components/layout/Header.tsx
```

Incluye:

- Logo
- Navegación
- Selector EN/ES
- Botón Request Service
- Menú responsive para móvil

Los textos de navegación deben venir de `translations.ts`, no de `siteConfig`, porque son bilingües.

---

## 13. Footer

Archivo:

```text
src/components/layout/Footer.tsx
```

Es global y aparece en todas las páginas desde `App.tsx`.

Incluye:

- Logo
- Descripción
- Quick Links
- Services
- Teléfono
- Email
- Copyright dinámico

---

## 14. WhatsApp

Archivo:

```text
src/components/layout/WhatsAppButton.tsx
```

El botón debe utilizar:

```ts
siteConfig.whatsapp.number
siteConfig.whatsapp.message
```

Formato del enlace:

```text
https://wa.me/NUMERO
```

El número debe incluir código de país y solamente dígitos.

Ejemplo:

```text
12675885005
```

---

## 15. Formulario de contacto

Actualmente el formulario fue diseñado para recopilar:

- Nombre
- Email
- Teléfono
- Servicio
- Detalles del proyecto

### Estado actual del envío

Durante el desarrollo se utilizó `mailto:`.

Esto abre la aplicación de correo del visitante.

Ejemplo:

```ts
window.location.href = mailto
```

### Mejora pendiente recomendada

Para producción se recomienda cambiar `mailto:` por envío directo utilizando un servicio como:

- Formspree
- EmailJS
- API/serverless propia

Objetivo final:

```text
Usuario llena formulario
        ↓
Send Project Details
        ↓
Email se envía directamente
        ↓
La página muestra mensaje de éxito
```

No colocar credenciales SMTP o contraseñas de Gmail directamente dentro del código React.

---

## 16. CSS

### Global

```text
src/index.css
```

Importa solamente:

```css
@import './styles/variables.css';
@import './styles/global.css';
@import './styles/layout.css';
```

### Layout

```text
src/styles/layout.css
```

Contiene estilos globales de:

- Header
- Footer
- Language Switcher
- WhatsApp flotante
- Layout responsive

### Home

```text
src/styles/home/
```

Cada sección tiene su propio CSS.

### Pages

```text
src/styles/pages/
```

Contiene:

- `about.css`
- `services.css`
- `contact.css`

### Regla

Los estilos específicos de una página/componente deben importarse desde el propio `.tsx`.

Ejemplo:

```tsx
import '../styles/pages/contact.css'
```

Evitar volver a crear un único `pages.css` gigante.

---

## 17. Imágenes

Organización:

```text
src/assets/images/
```

Carpetas principales:

```text
logo/
services/
vehicle/
cta/
team/
```

Las cuatro imágenes del CTA del Home deben estar en:

```text
src/assets/images/cta/
├── Foto1.png
├── Foto2.png
├── Foto3.png
└── Foto4.png
```

### Recomendación pendiente

Actualmente varias imágenes PNG son pesadas.

Antes o después de publicar se recomienda:

- convertir a WebP o AVIF;
- reducir dimensiones innecesarias;
- mantener buena calidad visual;
- usar `loading="lazy"` fuera del contenido inicial.

---

## 18. Título y favicon

Archivo:

```text
index.html
```

El título correcto debe ser:

```html
<title>Cable Line Communication</title>
```

No debe permanecer:

```html
<title>cable-line-communication-react</title>
```

Para favicon se recomienda copiar el logo a:

```text
public/CLC-Logo.png
```

y utilizar:

```html
<link
  rel="icon"
  type="image/png"
  href="/CLC-Logo.png"
/>
```

---

## 19. SEO básico

En `index.html` se recomienda mantener:

```html
<meta
  name="description"
  content="Cable Line Communication provides professional telecommunications infrastructure, fiber optic installation, aerial construction, underground construction, directional drilling, splicing, testing, and network maintenance services."
/>

<meta
  name="theme-color"
  content="#071426"
/>
```

### Mejora futura

Implementar títulos y meta description específicos para:

```text
/
About
Services
Contact
```

Ejemplos:

```text
Cable Line Communication
About | Cable Line Communication
Services | Cable Line Communication
Contact | Cable Line Communication
```

---

## 20. Hosting

El proyecto está preparado como aplicación React estática.

No requiere Node.js ejecutándose en producción mientras no se agregue un backend propio.

### Build

Ejecutar:

```powershell
npm.cmd run build
```

Vite crea:

```text
dist/
```

Para hosting estático se publica **el contenido de `dist`**.

No es necesario subir:

```text
node_modules/
src/
tsconfig.json
```

para que el sitio funcione en producción.

---

## 21. Hostinger Premium

El sitio puede ser publicado en Hostinger Premium como sitio estático.

Flujo:

```text
Código React
    ↓
npm.cmd run build
    ↓
dist/
    ↓
Hostinger
```

### React Router

Como se utiliza `BrowserRouter`, el servidor debe redirigir rutas desconocidas hacia `index.html`.

Sin esta configuración, entrar directamente a:

```text
/services
/about
/contact
```

puede producir un 404 en algunos hostings.

En hosting Apache se puede utilizar un `.htaccess` similar a:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  RewriteRule ^index\.html$ - [L]

  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d

  RewriteRule . /index.html [L]
</IfModule>
```

Verificar la configuración específica del hosting antes de publicarlo.

---

## 22. Build y validación antes de publicar

Siempre ejecutar:

```powershell
npm.cmd run build
```

No publicar si existen errores TypeScript.

También ejecutar:

```powershell
npm.cmd run lint
```

Después probar:

```powershell
npm.cmd run preview
```

Validar manualmente:

```text
/
 /about
 /services
 /contact
```

También:

- cambiar EN / ES;
- probar menú móvil;
- probar teléfono;
- probar email;
- probar WhatsApp;
- probar formulario;
- probar botones;
- revisar imágenes;
- revisar footer;
- revisar desktop/tablet/mobile.

---

## 23. Pendientes antes de considerar producción 100% terminada

El diseño principal está desarrollado, pero antes de considerar el sitio completamente terminado se recomienda completar:

### Prioridad alta

- [ ] `npm.cmd run build` sin errores
- [ ] Probar `npm.cmd run lint`
- [ ] Configurar envío directo del formulario en lugar de `mailto:`
- [ ] Verificar título `Cable Line Communication`
- [ ] Verificar favicon con el logo
- [ ] Revisar responsive final
- [ ] Configurar React Router en Hostinger
- [ ] Probar todas las rutas después de publicar

### Prioridad media

- [ ] Optimizar PNG a WebP/AVIF
- [ ] SEO específico por página
- [ ] Open Graph para compartir enlaces
- [ ] Página 404 personalizada
- [ ] Scroll al inicio al cambiar de ruta
- [ ] Revisar Lighthouse

### Limpieza

- [ ] Eliminar componentes/archivos no utilizados
- [ ] Verificar que no existan imágenes duplicadas
- [ ] No versionar `node_modules`
- [ ] No versionar `dist` salvo que la estrategia de despliegue lo requiera

---

## 24. Cómo comenzar a mantener el proyecto

Una nueva persona debe:

### 1. Instalar Node.js

Verificar:

```powershell
node --version
npm --version
```

### 2. Abrir el proyecto

```powershell
cd cable-line-communication-react
```

### 3. Instalar dependencias

```powershell
npm.cmd install
```

### 4. Ejecutar

```powershell
npm.cmd run dev
```

### 5. Realizar cambios

Modificar solamente los archivos necesarios dentro de:

```text
src/
```

### 6. Validar

```powershell
npm.cmd run build
npm.cmd run lint
```

---

## 25. Dónde modificar cada cosa

### Cambiar teléfono

```text
src/config/siteConfig.ts
```

### Cambiar email

```text
src/config/siteConfig.ts
```

### Cambiar mensaje de WhatsApp

```text
src/config/siteConfig.ts
```

### Cambiar textos

```text
src/i18n/translations.ts
```

### Cambiar navegación

Rutas:

```text
src/config/siteConfig.ts
```

Textos EN/ES:

```text
src/i18n/translations.ts
```

### Cambiar logo

```text
src/assets/images/logo/
```

Favicon:

```text
public/CLC-Logo.png
```

### Cambiar Home

```text
src/components/home/
src/styles/home/
```

### Cambiar About

```text
src/pages/AboutPage.tsx
src/styles/pages/about.css
```

### Cambiar Services

```text
src/pages/ServicesPage.tsx
src/styles/pages/services.css
```

### Cambiar Contact

```text
src/pages/ContactPage.tsx
src/styles/pages/contact.css
```

### Cambiar Header/Footer

```text
src/components/layout/
src/styles/layout.css
```

---

## 26. Reglas de mantenimiento

1. No hardcodear teléfono/email en múltiples archivos.
2. Usar `siteConfig.ts` para datos de negocio.
3. Usar `translations.ts` para textos bilingües.
4. Mantener inglés y español con la misma estructura.
5. No colocar CSS de página dentro de `index.css`.
6. Cada página/componente debe importar su CSS específico.
7. Ejecutar build antes de cada publicación.
8. No modificar directamente archivos dentro de `dist`; volver a generar el build.
9. No editar `node_modules`.
10. Mantener las imágenes organizadas por categoría.
11. No incluir secretos, contraseñas o credenciales privadas en React.
12. Probar desktop y móvil después de cambios importantes.

---

## 27. Resumen del trabajo realizado

Durante la modernización se realizó:

- Migración conceptual de HTML/CSS/JS legacy a React.
- Creación del proyecto Vite con React + TypeScript.
- Integración de React Compiler.
- Instalación y configuración de React Router.
- Creación de rutas principales.
- Migración y modernización del Header.
- Navegación responsive.
- Selector de idioma EN/ES.
- Contexto global de idioma.
- Persistencia de idioma mediante `localStorage`.
- Modernización del Hero.
- Creación de Services Preview.
- Creación de página completa de Services.
- Creación de Benefits.
- Creación de Fleet.
- Creación del CTA visual del Home con cuatro fotografías.
- Modernización completa de About.
- Modernización completa de Contact.
- Integración de WhatsApp.
- Creación del Footer global.
- Organización de CSS por componentes/páginas.
- Centralización de datos de empresa mediante `siteConfig`.
- Preparación del proyecto para build estático con Vite.
- Preparación conceptual para publicación en Hostinger Premium.
- Definición de estrategia para React Router en hosting.
- Preparación de favicon y metadata básica.

---

## 28. Estado general

El proyecto se encuentra en una etapa avanzada y la interfaz principal está desarrollada.

Antes de publicación definitiva se debe confirmar:

```text
Build limpio
Formulario directo
SEO final
Responsive final
Configuración del hosting
Pruebas post-deploy
```

Una vez completados esos puntos, el sitio puede considerarse listo para producción.

---

## 29. Contacto configurado actualmente

```text
Business:
Cable Line Communication

Phone:
267-588-5005

Email:
Juliocableline@gmail.com

WhatsApp:
+1 267-588-5005
```

Si alguno cambia, modificarlo en:

```text
src/config/siteConfig.ts
```

y volver a generar:

```powershell
npm.cmd run build
```

---

Última actualización del documento: agosto de 2026.
