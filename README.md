# React State Management Benchmark

## Overview

This project compares four state management approaches in React by implementing the same shopping cart application multiple times and benchmarking their behavior.

Implementations:

* Context API (Naive)
* Context API (Split Contexts)
* Zustand
* Redux Toolkit

The project analyzes:

* Component re-renders
* Bundle size impact
* Boilerplate and developer experience
* State management scalability
* Dockerized deployment

---

## Project Structure

```text
react-state-management-benchmark
│
├── context-naive/
├── context-split/
├── zustand-version/
├── redux-toolkit-version/
│
├── profiling/
├── bundle-analysis/
│
├── RESULTS.md
├── Dockerfile
├── docker-compose.yml
└── .env.example
```

---

## Running Individual Implementations

### Context Naive

```bash
cd context-naive
npm install
npm run dev
```

### Context Split

```bash
cd context-split
npm install
npm run dev
```

### Zustand

```bash
cd zustand-version
npm install
npm run dev
```

### Redux Toolkit

```bash
cd redux-toolkit-version
npm install
npm run dev
```

---

## Docker Deployment

Build and run the production container:

```bash
docker-compose up --build -d
```

Application URL:

```text
http://localhost:8080
```

Check container status:

```bash
docker ps
```

---

## Benchmark Artifacts

### Profiling

Located in:

```text
profiling/
```

Contains:

* context-optimized-profile.png
* zustand-profile.png
* redux-toolkit-profile.png

### Bundle Analysis

Located in:

```text
bundle-analysis/
```

Contains:

* zustand-bundle.png
* redux-toolkit-bundle.png

---

## Results

See:

```text
RESULTS.md
```

for benchmark comparisons, analysis, and the final decision guide.
