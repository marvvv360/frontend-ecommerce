# Frontend E-commerce (Next.js & Laravel API)

Aplicación web de comercio electrónico desarrollada como cliente frontend utilizando Next.js (App Router) y TypeScript, diseñada para consumir de manera segura la API RESTful construida en Laravel.

---

## 🚀 Tecnologías Principales

| Componente / Tecnología | Descripción y Propósito |
| :--- | :--- |
| **Next.js 16+ (App Router)** | Framework de React optimizado para Server Components y Server Actions. |
| **TypeScript** | Tipado estricto para garantizar la integridad de los datos de la API. |
| **Tailwind CSS** | Framework de estilos utilitarios para un diseño moderno y responsivo. |
| **Gestión de Estado y Sesión** | Context API para el carrito local y cookies `httpOnly` para autenticación segura. |
| **Pasarela de Pago** | Integración con Stripe mediante redirección segura desde el servidor. |

---

## ⚙️ Requisitos Previos

Antes de ejecutar este proyecto en tu entorno local, asegúrate de tener instalado:
- Node.js (Versión 18 o superior recomendada).
- npm o yarn.
- El backend de Laravel en ejecución (por defecto en http://127.0.0.1:8000).

---

## 🛠️ Instalación y Configuración

1. Clona este repositorio:
   git clone <url-del-repositorio>
   cd frontend-ecommerce

2. Instala las dependencias:
   npm install

3. Configura las variables de entorno:
   Crea un archivo .env.local en la raíz del proyecto con la siguiente variable:
   NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api

---

## 🏃‍♂️ Ejecución del Proyecto

- Modo Desarrollo:
  npm run dev
  (La aplicación estará disponible en http://localhost:3000)

- Modo Producción (Build y Start):
  npm run build
  npm run start

---

## 📂 Estructura del Proyecto

- `src/app/`: Rutas, páginas y layouts organizados con Next.js App Router (incluyendo grupos de rutas como `(auth)` y vistas dinámicas como `catalog/[id]`).
- `src/actions/`: Server Actions para mutaciones asíncronas y comunicación segura con el backend (autenticación y órdenes).
- `src/components/`: Componentes reutilizables de interfaz (botones interactivos, elementos de cliente).
- `src/context/`: Contexto de React para la administración local del carrito de compras (`CartContext`).
- `src/middleware.ts`: Middleware de Next.js para la protección de rutas privadas (checkout e historial de compras).

---

## 📦 Características Principales

### 1. Catálogo y Detalle de Productos
- Visualización asíncrona consumiendo la API de Laravel.
- Manejo robusto de estados de carga (`loading.tsx`) y errores (`error.tsx`).

### 2. Autenticación Segura
- Registro e inicio de sesión mediante Server Actions.
- Almacenamiento seguro de tokens JWT en cookies de tipo `httpOnly`.

### 3. Carrito de Compras
- Gestión de productos mediante estado local en React.
- Sincronización automática con el almacenamiento del navegador (`localStorage`).

### 4. Checkout y Pagos
- Procesamiento de órdenes conectadas directamente a la pasarela de pagos de Stripe.

### 5. Historial de Compras
- Vista protegida para listar las órdenes del usuario autenticado.
- Implementación de componentes `Suspense` para optimizar el rendimiento y la carga asíncrona.