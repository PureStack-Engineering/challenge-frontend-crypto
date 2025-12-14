# 🎨 PureStack Frontend Challenge: React, TypeScript & Performance Audit.

PureStack.es - Frontend. Validated by Code

### Context
Welcome to the **PureStack Technical Validation Protocol** for Frontend Engineering.
We don't care if you can center a `div`. We care about **State Management**, **Component Architecture**, and **Strict Typing**.

**⚠️ The Standard:** No `any`. No spaghetti code. We expect clean, performant React.

---

### 🎯 The Objective
Build a Real-Time Crypto Dashboard using **React + TypeScript**.

1.  **Data Source:** Use mock data or consume the public [CoinGecko API](https://www.coingecko.com/en/api).
2.  **Features:**
    * **List View:** Display top cryptocurrencies (Name, Symbol, Price, 24h Change).
    * **Search/Filter:** Allow filtering by name instantly.
    * **Auto-Refresh:** Data should refresh every 30 seconds (or provide a manual refresh button).
    * **Detail View:** (Optional) Clicking a row shows more details.

### 🛠️ Tech Stack Requirements
* **Framework:** React 18+ (Vite).
* **Language:** TypeScript (Strict Mode).
* **Styling:** CSS Modules, Tailwind, or Styled Components (Your choice, but keep it organized).
* **Testing:** Vitest + React Testing Library.

## 🧪 Evaluation Criteria (How we audit you)

We will clone your repo and run `npm run build` and `npm run test`. We look for:

- **Green Lights:** The project must build without TypeScript errors.
- **Type Safety:** Usages of `any` will result in immediate disqualification.
- **Component Logic:** Is the "search" logic inside the component or extracted to a custom hook?
- **Performance:** Avoid unnecessary re-renders.

## 🚀 Getting Started

1. Use this template to create your repository.
2. Install dependencies: `npm install`.
3. Start dev server: `npm run dev`.
4. Implement the Dashboard features.
5. Submit via Pull Request.

---

### 🚨 CRITICAL: Project Structure
To ensure our **Automated Auditor** works, please keep the core configuration files intact:

```text
/
├── .github/workflows/   # PureStack Audit System (DO NOT TOUCH)
├── src/
│   ├── components/      # Place your reusable UI components here
│   ├── hooks/           # Place your custom hooks here
│   ├── App.tsx          # Main Component
│   ├── main.tsx         # Application Entry Point
│   └── setupTests.ts    # Test Environment Configuration
├── package.json         # Standard scripts: dev, build, test
├── vite.config.ts       # Vite & Vitest Configuration
└── tsconfig.json        # TypeScript Configuration
