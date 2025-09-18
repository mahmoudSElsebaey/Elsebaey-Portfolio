# Mahmoud Elsebaey – Portfolio Website

This is my personal portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**, showcasing my skills, services, projects, and resume.

🚀 Live Demo: [https://elsebaey-portfolio.vercel.app](https://elsebaey-portfolio.vercel.app)

---

## 📌 Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion & AOS
* **Theme Handling:** next-themes
* **Icons:** react-icons

---

## ⚡ Features

### 🌙 Theme Toggle

* **Description:** Allows users to switch between dark and light mode.
* **Tech Used:** `next-themes`, `react-icons` (IoMoon, GoSun).

### 📱 Draggable Navigation Menu

* **Description:** An interactive, draggable navigation menu that enhances UX.
* **Tech Used:** `framer-motion`.

### 🔄 Page Transitions

* **Description:** Smooth transitions between pages for better user experience.
* **Tech Used:** `framer-motion`.

### 📊 Scroll Progress Bar

* **Description:** Displays a progress bar at the top to indicate how much of the page is scrolled.
* **Tech Used:** Custom hook + Tailwind CSS.

### ⬆️ Scroll To Top Button

* **Description:** Floating button that scrolls the page back to the top.
* **Tech Used:** React hooks + Tailwind CSS.

### 🎬 AOS Animations

* **Description:** Animations on scroll to make sections more engaging.
* **Tech Used:** `AOS` (Animate On Scroll Library).

### 📰 Announcement Bar (optional)

* **Description:** Placeholder for future announcements or notifications.
* **Status:** Currently commented out in code.

### 🖼️ Reusable Title Component

* **Description:** Displays section titles with a main title and subtitle for consistent design.

---

## 📂 Project Structure (Key Parts)

```
/components
   /Header
   /Footer
   /Home
   /DraggableMenu
   /ui (ThemeProvider, PageTransition, AOSProvider, etc.)
   /ScrollToTopButton
   /ScrollProgressBar
   /ThemeToggle

/app
   /about
   /services
   /projects
   /features
   /contact
   layout.tsx
   page.tsx
```

---

## 📌 Sections Included

* **Home Page** – Hero + introduction
* **About Me (Resume)** – My background and experience and skills
* **Services** – What I can do for clients
* **Projects** – Showcase of my work
* **Features** – Things I can build (interactive elements, UI/UX features)
* **Contact** – Get in touch with me

---

## ⚙️ Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/mahmoudSElsebaey/Elsebaey-Portfolio.git
cd Elsebaey-Portfolio
npm install
```

Run the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 📧 Contact

* **Name:** Mahmoud Elsebaey
* **Role:** Frontend Developer (React/Next.js)
* **Portfolio:** [elsebaey-portfolio.vercel.app](https://elsebaey-portfolio.vercel.app)
* **LinkedIn:** [linkedin.com/in/mahmoud-elsebaey](https://linkedin.com/in/mahmoud-elsebaey)
* **GitHub:** [github.com/mahmoudSElsebaey](https://github.com/mahmoudSElsebaey)
