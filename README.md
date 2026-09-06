# Sales-Tracker-Sleek
**AUTHOR . . . . . . .** Shahar Ankonina  
**DESCRIPTION. . .** A sleek, modern web-based sales tracker application built with React, Vite, and Framer Motion, featuring dynamic item management, real-time revenue calculation, and fluid UI animations.

---
## About
Sales Tracker Sleek is a responsive, modern web application originally built for the local theater company **GIFT** to assist with small bake sales. Built using React and Vite, the application features smooth component transitions powered by Framer Motion, interactive price and quantity controls, and automated currency formatting.

The project utilizes a clean, modular component architecture (`Home`, `ItemList`, `Item`), advanced hooks-driven state management leveraging `useRef` and `useEffect` for precise incremental calculations, and a custom price input handler that enforces strict numerical and decimal constraints. Every item addition, price modification, or deletion is accompanied by fluid layout animations, bringing a polished, desktop-grade user experience to web-based sales tracking.

---
## Features
- *Dynamic Item Management:* Seamlessly add new items or remove existing ones with automated state synchronization and smooth layout animations.
- *Real-Time Revenue Calculation:* Automatically computes and updates overall sales revenue as individual item prices or sales counts change via optimized incremental tracking.
- *Fluid UI Animations:* Utilizes Framer Motion (`AnimatePresence` and layout transitions) for polished enter and exit animations when managing inventory.
- *Custom Price Parsing:* Enforces strict numerical and decimal constraints for currency inputs paired with dynamic USD localization formatting.

---
## Tech Stack
- *Frontend:* React, JavaScript (JSX), CSS, Vite
- *Animations:* Framer Motion
- *Tools & Environment:* Node.js, npm, Git/GitHub

---
## Usage
- This project is a modern web application designed for interactive sales tracking and inventory management.
- Configure and run the project locally using Node.js and npm.
- The interface features interactive "Add Item" controls, real-time incremental pricing fields, and instant tally updates printed directly to the central dashboard view.
- No complex backend database is required; state is managed locally via React hooks.

### Build & Run
Requires Node.js and npm installed on your machine. Open your terminal in the project root directory and run the following commands:

```bash
git clone https://github.com/AnkoninaShahar/Sales-Tracker-Sleek.git
cd Sales-Tracker-Sleek
npm install
npm run dev
```

Then open the local development URL (typically `http://localhost:5173`) printed in your terminal to view and interact with the application.

- Even without running it, you can explore the source code (`Home.jsx`, `ItemList.jsx`, `Item.jsx`) to examine the hooks-driven state architecture, custom input parsing logic, and Framer Motion integration.
