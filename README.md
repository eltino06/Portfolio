# Santino Portfolio v1.0 🚀

A high-performance, minimalist, and interactive personal portfolio built with a modern tech stack focused on **User Experience (UX)** and **Visual Excellence**.

Developed with **Next.js 14**, **TypeScript**, and **Framer Motion**, this project demonstrates senior-level architectural patterns, including modular component design, advanced CSS/Tailwind animations, and optimized interaction flows.

---

## 🛠 Tech Stack

### Core Architecture
- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/) - Utilizing server-side rendering and optimized routing.
- **Language**: [TypeScript](https://www.typescript.org/) - Ensuring type safety and scalable code.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Custom-tuned design system with a dark-mode-first approach.
- **State Management**: [React Context API](https://reactjs.org/docs/context.html) - Handling global concerns like Internationalization (i18n).

### Interactive & Visual Layers
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Orchestrating complex layout transitions and physics-based interactions.
- **Graphics**: [Three.js](https://threejs.org/) - Powering high-performance background particles and immersive visuals.
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) - Curated, pixel-perfect iconography.

---

## ✨ Key Features

### 1. **Dynamic Hero & Visual Identity**
- **Animated Stats**: Custom counter components with synchronous horizontal alignment logic.
- **Subtle Shimmer FX**: Native Tailwind-registered animations for continuous interactive feedback on primary CTAs.
- **Minimalist Branding**: A balanced visual hierarchy with a 5% global scaling strategy for enhanced readability.

### 2. **Advanced Skills Visualization**
- **Fan-out Stack Pattern**: Interactive technology stacks using vertical card displacement with intelligent height detection.
- **Optimized Layout**: Compacted grid design for high-density information without sacrificing white space.

### 3. **Developer Experience (DX)**
- **Strict Linting**: ESLint and Prettier integration for codebase consistency.
- **Modular Components**: Highly reusable UI patterns (Buttons, Sections, Modals) with atomic design principles.
- **Zod & React Hook Form**: Robust validation for contact interactions and form handling.

---

## 📂 Project Structure

```bash
├── app/               # Next.js App Router (Pages, Layouts, Globals)
├── components/        # UI components following Atomic Design
│   ├── layout/        # Navbar, Footer, Section wrappers
│   ├── sections/      # Home, Skills, Projects, Experience
│   └── ui/            # Reusable primitive components (Buttons, Modals)
├── context/           # Global state (i18n, Theme)
├── lib/               # Utility functions, validation schemas, and constants
└── public/            # Static assets and branding
```

---

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/eltino06/Portfolio.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment**:
   Create a `.env` file with necessary keys (e.g., Resend API for contact form).

4. **Run Development Server**:
   ```bash
   npm run dev
   ```

---

## 📈 Optimization & Performance
- **Image Optimization**: Leveraging `next/image` for automatic resizing and lazy loading.
- **Font Optimization**: Utilizing `next/font` to reduce Layout Shift (CLS).
- **Bundle Analysis**: Modular imports to minimize JavaScript payloads.

---

## ✉️ Contact
Developed with ❤️ by **Santino**.
*   **LinkedIn**: [Santino](https://www.linkedin.com/in/santino-bondioni-283a11305/)
*   **Email**: [santibon12345@gmail.com]

---
*© 2026 - All Rights Reserved*
