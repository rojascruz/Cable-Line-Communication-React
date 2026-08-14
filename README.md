# Cable Line Communication

Sitio web corporativo de **Cable Line Communication**, desarrollado con **React, TypeScript y Vite**.

El proyecto moderniza la versión legacy del sitio y organiza la aplicación en componentes reutilizables, páginas independientes, traducciones EN/ES, configuración centralizada y estilos responsive.

---

## Tecnologías

- React 19
- TypeScript
- Vite
- React Router DOM
- React Compiler
- CSS
- ESLint

---

## Funcionalidades principales

- Página de Inicio
- Página Nosotros
- Página Servicios
- Página Contacto
- Navegación con React Router
- Soporte Inglés / Español
- Header responsive
- Footer global
- Botón flotante de WhatsApp
- Formulario de contacto
- Servicios destacados en el Home
- Sección de beneficios
- Sección de equipo / flota
- CTA con imágenes
- Diseño responsive para desktop, tablet y móvil
- Configuración centralizada de teléfono, email, WhatsApp y rutas

---

## Requisitos

Se recomienda utilizar una versión reciente de Node.js.

Versiones utilizadas durante el desarrollo:

```text
Node.js: v24.19.0
npm:     11.1.0
```

---

## Instalación

Clonar o copiar el proyecto y entrar a la carpeta:

```powershell
cd cable-line-communication-react
```

Instalar dependencias:

```powershell
npm.cmd install
```

> En el ambiente de desarrollo se utilizó `npm.cmd` porque PowerShell tenía restringida la ejecución de `npm.ps1`.

---

## Ejecutar en desarrollo

```powershell
npm.cmd run dev
```

Vite normalmente inicia en:

```text
http://localhost:5173/
```

---

## Build de producción

```powershell
npm.cmd run build
```

El resultado se genera en:

```text
dist/
```

La carpeta `dist` contiene los archivos que se publican en el hosting.

---

## Probar el build

```powershell
npm.cmd run preview
```

---

## Lint

```powershell
npm.cmd run lint
```

---

## Rutas

```text
/           Home
/about      About
/services   Services
/contact    Contact
```

---

## Estructura principal

```text
src/
├── assets/
│   └── images/
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

## Configuración de la empresa

Los datos generales de Cable Line Communication deben mantenerse en:

```text
src/config/siteConfig.ts
```

Ejemplos:

- Nombre de la empresa
- Teléfono
- Email
- WhatsApp
- Horario
- Rutas principales

Evitar repetir estos valores manualmente en varios componentes.

---

## Traducciones

Los textos en Inglés y Español se encuentran en:

```text
src/i18n/translations.ts
```

La estructura de `en` y `es` debe mantenerse equivalente.

---

## Estilos

Los estilos globales se cargan desde:

```text
src/index.css
```

Cada página o componente importa su propio CSS específico.

Ejemplos:

```text
src/styles/home/
src/styles/pages/
src/styles/layout.css
```

---

## Contacto y WhatsApp

La configuración principal se encuentra en:

```text
src/config/siteConfig.ts
```

Actualmente se utilizan:

```text
Phone:
267-588-5005

Email:
Juliocableline@gmail.com

WhatsApp:
+1 267-588-5005
```

---

## Formulario de contacto

El formulario recopila:

- Nombre
- Email
- Teléfono
- Servicio solicitado
- Detalles del proyecto

La versión inicial utiliza `mailto:`.

Antes de considerar el formulario completamente terminado para producción, se recomienda sustituirlo por envío directo mediante un servicio como Formspree, EmailJS o un endpoint propio.

Nunca colocar contraseñas SMTP o credenciales privadas directamente en React.

---

## Publicación

La aplicación se publica como sitio estático.

Proceso:

```text
React / TypeScript
       ↓
npm.cmd run build
       ↓
dist/
       ↓
Hosting
```

Para producción se publica el contenido generado dentro de `dist/`.

---

## React Router en hosting

La aplicación utiliza `BrowserRouter`.

El hosting debe estar configurado para devolver `index.html` cuando el visitante entra directamente a rutas como:

```text
/about
/services
/contact
```

En servidores Apache puede requerirse una regla `.htaccess`.

Consultar `MAINTENANCE.md` para los detalles de despliegue.

---

## Documentación técnica

La documentación completa para mantenimiento, arquitectura, despliegue y futuras modificaciones se encuentra en:

```text
MAINTENANCE.md
```

Un desarrollador nuevo debe leer primero:

```text
README.md
MAINTENANCE.md
```

---

## Validación antes de publicar

Ejecutar:

```powershell
npm.cmd run build
npm.cmd run lint
npm.cmd run preview
```

Y probar:

- Home
- About
- Services
- Contact
- Inglés / Español
- WhatsApp
- Teléfono
- Email
- Formulario
- Navegación móvil
- Desktop
- Tablet
- Mobile

---

## Mantenimiento

Reglas principales:

1. No editar `node_modules`.
2. No modificar manualmente `dist`; volver a ejecutar el build.
3. Mantener los datos de la empresa en `siteConfig.ts`.
4. Mantener los textos bilingües en `translations.ts`.
5. Mantener CSS específico separado por página/componente.
6. Ejecutar build y lint antes de publicar.
7. No incluir contraseñas o secretos en el frontend.

---

## Estado

El sitio se encuentra en una etapa avanzada de desarrollo.

Antes de producción definitiva se recomienda confirmar:

- Build limpio
- Formulario con envío directo
- SEO final
- Favicon
- Responsive final
- Configuración de React Router en el hosting
- Pruebas después del despliegue

---

© Cable Line Communication
