# Day 02 - Components and Props

## Goal

Understand React's one-way data flow, convert hardcoded components into dynamic, reusable blocks, and master passing and destructuring props.

---

## Topics Covered

- **Parent-to-Child Data Flow:** Passing data down the component hierarchy via props.
- **Component Reusability:** Replacing repetitive static markup with parametrized components.
- **Object Destructuring:** Unpacking props directly inside function parameter lists.
- **Default Prop Values:** Setting fallback values during destructuring to prevent missing data errors.
- **Prop Data Types:** Passing strings (`"..."`), numbers (`{1}`), and booleans (`{true}`).
- **Conditional Rendering with Props:** Utilizing ternary operators to toggle UI states based on boolean flags.
- **Prop Immutability:** Treating props as strictly read-only values within child components.

---

## Component Hierarchy

```text
App
├── Header
├── StatCard
├── StatCard
├── StatCard
└── GoalCard
```

---

## Props in Action

### 1. Passing Props from the Parent (`App.jsx`)
Strings can be passed directly inside quotes, while numbers, booleans, and expressions require JSX curly braces:

```jsx
<StatCard isCompleted="{true}" title="Day" value="{1}"/>
```

### 2. Receiving and Destructuring with Defaults (`StatCard.jsx`)
Using parameter destructuring allows setting defaults directly in the signature:

```jsx
function StatCard({
  title = "Unknown",
  value = "N/A",
  isCompleted = false
}) {
  return (
    <div>
      <p>
        {title}: {value}, Status: {isCompleted ? "Completed" : "In Progress"}
      </p>
    </div>
  );
}

export default StatCard;
```

---

## Core Concept: One-Way Data Flow

Data in React flows strictly in one direction—downward from parent to child:

```text
Parent Component (App)
        ↓ (passes props)
Child Component (StatCard)
```

- **Rule:** Props are **read-only** (immutable). A child component must never modify the props passed to it directly.

---

## JavaScript Gotcha: String vs. Boolean Props

In JSX, any non-empty string evaluates to `true` in JavaScript logic:

| Prop Syntax | Received Type | Evaluates To | Notes |
|---|---|---|---|
| `available="false"` | `string` | **Truthy** | Evaluates as a non-empty string, triggering truthy branches |
| `available={false}` | `boolean` | **Falsy** | Correct boolean expression inside curly braces |

---

## Progress

- [x] Day 1 - React Fundamentals
- [x] Day 2 - Components and Props
- [ ] Day 3 - Reusable Components
- [ ] Day 4 - State with `useState`
- [ ] Day 5 - Events and Controlled Inputs
- [ ] Day 6 - Lists and Conditional Rendering
- [ ] Day 7 - Mini Project