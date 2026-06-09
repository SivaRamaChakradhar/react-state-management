# React State Management Benchmark Results

## Benchmark Overview

This project compares four state management approaches for a shopping cart application:

1. Context API (Naive)
2. Context API (Split Contexts)
3. Zustand
4. Redux Toolkit

The benchmark evaluates rendering behavior, developer experience, bundle impact, and scalability.

## Comparison Table

| Metric                              | Context (naive)   | Context (split)   | Zustand       | Redux Toolkit |
| ----------------------------------- | ----------------- | ----------------- | ------------- | ------------- |
| State Structure                     | Single AppContext | Multiple Contexts | Central Store | Central Store |
| Cart Update Rerenders Header        | Yes               | No                | No            | TBD           |
| Cart Update Rerenders UserInfo      | Yes               | No                | No            | TBD           |
| Cart Update Rerenders ThemeSwitcher | Yes               | No                | No            | TBD           |
| Cart Update Rerenders ProductCard   | Yes               | Yes               | No            | TBD           |
| Cart Update Rerenders CartSidebar   | Yes               | Yes               | Yes           | TBD           |
| Cart Update Rerenders CartItem      | Yes               | Yes               | Yes           | TBD           |
| Theme Change Rerenders ProductCard  | Yes               | Yes               | Yes*          | TBD           |
| Boilerplate                         | Low               | Medium            | Low           | Medium        |
| Reducers Required                   | Yes               | Yes               | No            | Yes           |
| Action Types Required               | Yes               | Yes               | No            | No            |
| Provider Required                   | Yes               | Yes               | No            | Yes           |
| Selector-Based Subscriptions        | No                | No                | Yes           | Yes           |
| Scalability                         | Low               | Medium            | High          | High          |
| Bundle Size Impact                  | Minimal           | Minimal           | Low           | TBD           |

* Theme changes rerendered the application tree because the root component subscribed to theme state.

---

## Qualitative Analysis

### Context API (Naive)

The naive Context API implementation stores cart, user, and UI state in a single context provider. Any state update creates a new context value, causing all consumers to rerender.

Observed behavior:

* Header rerendered when cart items changed.
* UserInfo rerendered when cart items changed.
* ThemeSwitcher rerendered when cart items changed.
* ProductCard rerendered when cart items changed.
* Cart-related components rerendered as expected.

Advantages:

* Easy to implement.
* No external libraries.

Disadvantages:

* Significant unnecessary rerenders.
* Poor scalability as application size grows.

---

### Context API (Split)

The split Context approach separates cart, user, and UI concerns into individual providers.

Observed behavior:

* Header no longer rerendered during cart updates.
* UserInfo no longer rerendered during cart updates.
* ThemeSwitcher no longer rerendered during cart updates.
* Cart-related components still rerendered.

Advantages:

* Better separation of concerns.
* Reduced unnecessary rerenders.

Disadvantages:

* Increased provider nesting.
* Still limited compared with selector-based stores.

---

### Zustand

Zustand uses a centralized store with selector-based subscriptions.

Observed behavior:

* Header did not rerender when cart items changed.
* ProductCard did not rerender when cart items changed.
* Only cart-related subscribers rerendered.
* Store implementation required significantly less boilerplate than Context API.

Advantages:

* Minimal boilerplate.
* Selector-based subscriptions.
* Excellent developer experience.
* Small bundle footprint.

Disadvantages:

* Additional dependency.
* Less structured than Redux Toolkit for large teams.

---

### Redux Toolkit

Implementation pending.

Observations and benchmark data will be added after Redux Toolkit completion.

---

### Decision Guide

#### Choose Context API (Naive) when:

* Building small applications.
* Learning React Context fundamentals.
* Performance is not a major concern.

#### Choose Context API (Split) when:

* Applications have a moderate amount of shared state.
* You want to improve Context performance without introducing external libraries.

#### Choose Zustand when:

* You want minimal boilerplate.
* Performance and developer productivity are priorities.
* Applications require fine-grained subscriptions.

#### Choose Redux Toolkit when:

* Applications are large and complex.
* Predictable state updates are critical.
* Teams require strong conventions and tooling support.

---

## Current Conclusion

Based on the benchmark completed so far:

1. Zustand provides the best balance between simplicity and rendering performance.
2. Split Context improves significantly over naive Context.
3. Naive Context demonstrates the highest amount of unnecessary rerendering.
4. Redux Toolkit results will be added after implementation and profiling are complete.
