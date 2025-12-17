# 🎨 PureStack Frontend Challenge: React, TypeScript & Performance Audit

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
    1. **List View:** Display top cryptocurrencies (Name, Symbol, Price, 24h Change).
    2. **Search:** Implement a search bar to filter coins by name instantly.
    3. **Auto-Refresh:** Data should refresh automatically every 60 seconds.
    4. **Typing:** Define interfaces for the API response. No implicit `any`.
* **Deliverable:** A clean, working application that passes the build and type check.

#### 🥈 Level 2: Pro / Senior
* **Focus:** Custom Hooks, State Abstraction & User Experience.
* **Requirement:** Everything in Level 3 + **Logic Extraction & Global State**.
* **Extra Tasks:**
    1. **Custom Hooks:** Extract the fetching logic into a reusable hook (e.g., `useCryptoData`). The component should only care about UI, not `fetch`.
    2. **Global State:** Implement a "Favorites" feature. Users can star coins, and this state persists across reloads (LocalStorage). Use **Context API** or **Zustand**.
    3. **Error Handling:** Implement an **Error Boundary** or a robust error state UI. If the API fails, the app shouldn't crash white.
* **Deliverable:** A robust app with separated logic and UI.

#### 🥇 Level 1: Elite / Architect
* **Focus:** Performance, Virtualization & Re-render Optimization.
* **Requirement:** Everything above + **Virtual Scrolling & Memoization**.
* **Extra Tasks:**
    - 1. **Virtualization:** Instead of rendering 100 rows, implement **Virtual Scrolling** (using a library like `react-window` or custom implementation) to render only what is visible in the viewport.
    - 2. **Render Optimization:** Use `React.memo`, `useCallback`, and `useMemo` correctly. Ensure that typing in the search bar does **NOT** cause the entire list rows to re-render unnecessarily.
    - 3. **Strict Mode:** Enable strict TypeScript rules (no `any`, strict null checks).
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
2.  Install dependencies:
    ```bash
    npm ci
    ```
3.  Start dev server: `npm run dev`.
4.  Implement your solution inside `src/`.
5.  Run validation:
    ```bash
    npm run type-check  # Must pass without errors
    npm run test        # Must pass all tests
    ```
6.  Submit via **Pull Request** stating your target Level.

> **Note:** You will see a ❌ (**Red Cross**) initially because the App does not render the expected data yet. Your goal is to write the code that turns it ✅ (**Green**).

---

### 📝 Audit & Validation Rules (Strict)

> **⚠️ The "No-Any" Policy**
>
> Our automated auditor (`audit.yml`) enforces strict TypeScript and Architecture standards. Your PR will be automatically rejected if:
>
> 1.  **Usage of `any`:** We strictly forbid `: any` or `as any`. You must define proper Interfaces for the CoinGecko API response.
> 2.  **Dirty Code:** `console.log` is not allowed in production code. Clean up your debug traces.
> 3.  **Architecture Integrity:** You must respect the folder structure. Do not delete `src/hooks`, `src/components`, or `src/context`. Logic must be extracted from the main UI.
> 4.  **Broken Types:** The pipeline executes `tsc --noEmit`. If there is a single TypeScript error, the build fails.

---

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
/
├── .github/workflows/    # PureStack Audit System (DO NOT TOUCH)
├── src/
│   ├── components/       # (Required) UI Components
│   ├── hooks/            # (Required) Logic Abstraction
│   ├── context/          # (Required) Global State
│   ├── App.tsx           # Main Layout
│   ├── main.tsx          # Entry Point
│   └── setupTests.ts     # Test Config
├── .eslintrc.cjs         # Linting Rules
├── index.html            # Entry HTML
├── package-lock.json     # Dependency Lock (Do not delete)
├── tsconfig.json         # TS Config
└── vite.config.ts        # Vite Config
