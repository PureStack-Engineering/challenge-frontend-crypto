# 🎨 PureStack Frontend Challenge: React, TypeScript & Performance Audit

![Build Status](https://img.shields.io/badge/Build-Passing-success?style=for-the-badge&logo=github)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Vitest](https://img.shields.io/badge/Tests-Vitest-yellow?style=for-the-badge)

**PureStack.es - Frontend Validation Protocol.**
> *"We don't care if you can center a div. We audit State Management, Component Architecture, and Render Performance."*

---

### 📋 Context & Mission
Welcome to the PureStack Technical Validation Protocol for Frontend Engineering.
This assessment is designed to audit your ability to build **scalable React applications**. We have zero tolerance for `any` types or spaghetti code inside `useEffect`.

**The Mission:** Build a **Real-Time Crypto Dashboard** using React + TypeScript.
**The Source:** Consume the public [CoinGecko API](https://www.coingecko.com/en/api) (or use mocked data if rate-limited).

### 🚦 Certification Levels (Choose your Difficulty)
Your seniority is defined by how you handle state, side effects, and re-renders. State your target level in your Pull Request.

#### 🥉 Level 3: Essential / Mid-Level
* **Focus:** Component Structure & API Consumption.
* **Requirement:** A functional dashboard that fetches and displays data.
* **Tasks:**
    - [ ] **List View:** Display top cryptocurrencies (Name, Symbol, Price, 24h Change).
    - [ ] **Search:** Implement a search bar to filter coins by name instantly.
    - [ ] **Auto-Refresh:** Data should refresh automatically every 60 seconds.
    - [ ] **Typing:** Define interfaces for the API response. No implicit `any`.
* **Deliverable:** A clean, working application that passes the build.

#### 🥈 Level 2: Pro / Senior
* **Focus:** Custom Hooks, State Abstraction & User Experience.
* **Requirement:** Everything in Level 3 + **Logic Extraction & Global State**.
* **Extra Tasks:**
    - [ ] **Custom Hooks:** Extract the fetching logic into a reusable hook (e.g., `useCryptoData`). The component should only care about UI, not `fetch`.
    - [ ] **Global State:** Implement a "Favorites" feature. Users can star coins, and this state persists across reloads (LocalStorage). Use **Context API** or **Zustand**.
    - [ ] **Error Handling:** Implement an **Error Boundary** or a robust error state UI. If the API fails, the app shouldn't crash white.
* **Deliverable:** A robust app with separated logic and UI.

#### 🥇 Level 1: Elite / Architect
* **Focus:** Performance, Virtualization & Re-render Optimization.
* **Requirement:** Everything above + **Virtual Scrolling & Memoization**.
* **Extra Tasks:**
    - [ ] **Virtualization:** Instead of rendering 100 rows, implement **Virtual Scrolling** (using a library like `react-window` or custom implementation) to render only what is visible in the viewport.
    - [ ] **Render Optimization:** Use `React.memo`, `useCallback`, and `useMemo` correctly. Ensure that typing in the search bar does **NOT** cause the entire list rows to re-render unnecessarily.
    - [ ] **Strict Mode:** Enable strict TypeScript rules (no `any`, strict null checks).
* **Deliverable:** A high-performance dashboard that feels native and buttery smooth (`60fps`).

---

### 🛠️ Tech Stack Requirements
* **Framework:** React 18+ (Vite).
* **Language:** TypeScript (Strict Mode).
* **Styling:** CSS Modules, Tailwind, or Styled Components (Your choice, but keep it organized).
* **Testing:** Vitest + React Testing Library.

---

### 🚀 Execution Instructions

1.  **Use this template** (Fork the repo).
2.  Install dependencies: `npm install`.
3.  Start dev server: `npm run dev`.
4.  Implement your solution inside `src/`.
5.  Run tests/linting: `npm run test` / `npm run lint`.
6.  Submit via **Pull Request** stating your target Level.

### 🧪 Evaluation Criteria (PureStack Audit)

| Criteria | Weight | Audit Focus |
| :--- | :--- | :--- |
| **Type Safety** | 30% | Zero usage of `any`. Correct interfaces for Props and API data. |
| **Component Logic** | 30% | Is logic extracted to Hooks? Are components small and focused? |
| **Performance** | 25% | Effective use of `useEffect` dependencies. Virtualization (Level 1). |
| **UX & State** | 15% | Handling loading states, errors, and empty search results. |

---

### 🚨 Project Structure (Standard)
To ensure our **Automated Auditor** works, please keep the core configuration files intact:

```text
### 🚨 Project Structure (Standard)
To ensure our **Automated Auditor** works, please keep the core configuration files intact.
You should create the folders inside `src/` as needed.

```text
/
├── .github/workflows/    # PureStack Audit System (DO NOT TOUCH)
├── src/
│   ├── components/       # (Create this) UI Components
│   ├── hooks/            # (Create this) Logic Abstraction
│   ├── context/          # (Create this) Global State
│   ├── App.tsx           # Main Layout
│   ├── main.tsx          # Entry Point
│   └── setupTests.ts     # Test Config
├── .eslintrc.cjs         # Linting Rules
├── .gitignore
├── index.html            # Entry HTML
├── package.json
├── tsconfig.json         # TS Config
├── tsconfig.node.json    # TS Node Config
└── vite.config.ts        # Vite Config
