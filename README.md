# JavaScript Q&A — OOP Assignment

An interactive Q&A study tool built using Object-Oriented Programming in JavaScript. Covers core web development concepts from HTML and CSS to async JavaScript and OOP.

## Live Demo
[View Live](https://suryanshi-web.github.io/JavaScript-OOP-QA/)

## Features
- 22 Q&A cards covering web development fundamentals to advanced JS
- Accordion behavior — click to expand, auto-closes previous card
- Built entirely with OOP — each card is an instance of the `QAItem` class
- Smooth CSS transitions and staggered fade-in animations
- Fully responsive

## OOP Concepts Used
- **Class** — `QAItem` class as a blueprint for each Q&A card
- **Constructor** — initializes `question`, `answer`, and `isOpen` state per instance
- **Methods** — `toggle()` manages state, `render()` builds and returns the DOM element
- **Encapsulation** — each card manages its own open/closed state internally

## Tech Stack
HTML · CSS · Vanilla JavaScript (ES6)

## Project Structure
```
├── index.html
├── style.css
├── script.js
├── .gitignore
└── README.md
```

## Branch Workflow
`dev` → `stage` → `main`