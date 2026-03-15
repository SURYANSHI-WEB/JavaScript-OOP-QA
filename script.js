// ── QAItem Class ──
class QAItem {
  constructor(question, answer) {
    this.question = question;   // Stores the question text
    this.answer = answer;       // Stores the answer text
    this.isOpen = false;        // Tracks if this card is expanded or collapsed
  }

  // Flips true → false or false → true
  toggle() {
    this.isOpen = !this.isOpen;
  }

  // Builds and returns the HTML element for this Q&A card
  render() {
    const card = document.createElement('div');
    card.className = 'qa-card';
    
    card.innerHTML = `
      <div class="qa-question">
        <span class="question-text">${this.question}</span>
        <span class="qa-cue">+</span>
      </div>
      <div class="qa-answer">
        <div class="answer-text">${this.answer}</div>
      </div>
    `;

    // Toggle this card open/closed on click
    card.querySelector('.qa-question').addEventListener('click', () => {
      this.toggle();
      card.classList.toggle('open', this.isOpen);
    });

    return card;
  }
}

// ── Q&A Data ─────────────────────────────────────────────────────────────────
// Array of QAItem instances — to add a question, just add a new QAItem() here

const qaItems = [
  new QAItem(
    "What is the difference between Frontend, Backend, and Full Stack development?",
    `<ul>
      <li><strong>Frontend</strong> — what users see and interact with. Built with HTML, CSS, JavaScript, and frameworks like React, Angular, Vue.</li>
      <li><strong>Backend</strong> — handles data, business logic, and databases. Uses Node.js, Python, Java, .NET, PHP with databases like MySQL, MongoDB.</li>
      <li><strong>Full Stack</strong> — combines both. A full stack developer works on the complete application from UI to database.</li>
    </ul>`
  ),
  new QAItem(
    "What are the three layers of a webpage?",
    `<ul>
      <li><strong>HTML (Content Layer)</strong> — defines the structure and meaning of content.</li>
      <li><strong>CSS (Presentation Layer)</strong> — controls how content looks: colors, fonts, layout.</li>
      <li><strong>JavaScript (Behavior Layer)</strong> — adds interactivity and dynamic behavior.</li>
    </ul>`
  ),
  new QAItem(
    "What is HTML and what are semantic elements?",
    `<ul>
      <li>HTML (HyperText Markup Language) is the standard language for structuring web pages using elements inside angle brackets.</li>
      <li>Semantic elements clearly describe their purpose — e.g. &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;section&gt;, &lt;article&gt;, &lt;footer&gt;.</li>
      <li>They improve SEO and accessibility by helping browsers and screen readers understand the content structure.</li>
    </ul>`
  ),
  new QAItem(
    "What is the difference between id and class attributes in HTML?",
    `<ul>
      <li><strong>id</strong> — unique identifier for a single element. Used with # in CSS and getElementById() in JS.</li>
      <li><strong>class</strong> — can be shared across multiple elements. Used with . in CSS and getElementsByClassName() in JS.</li>
      <li>Use id for unique elements (like a navbar), class for repeated styles (like cards).</li>
    </ul>`
  ),
  new QAItem(
    "What are HTML forms and what attributes does the form element use?",
    `<ul>
      <li>&lt;form&gt; is a container for input fields that collects and submits user data.</li>
      <li><strong>action</strong> — URL where data is sent on submission.</li>
      <li><strong>method</strong> — GET appends data to URL; POST sends it securely in the request body.</li>
      <li>Common inputs: text, email, password, radio, checkbox, dropdown (&lt;select&gt;), textarea, submit.</li>
    </ul>`
  ),
  new QAItem(
    "What is CSS and what are the three ways to apply it?",
    `<ul>
      <li>CSS (Cascading Style Sheets) controls the visual appearance of HTML elements.</li>
      <li><strong>Inline</strong> — applied directly on the element using the style attribute. Highest specificity.</li>
      <li><strong>Internal</strong> — written inside a &lt;style&gt; tag in the &lt;head&gt;. Applies to one page.</li>
      <li><strong>External</strong> — a separate .css file linked with &lt;link&gt;. Best practice for multiple pages.</li>
    </ul>`
  ),
  new QAItem(
    "What is the CSS Box Model?",
    `<ul>
      <li>Every HTML element is a box made of four layers from inside out:</li>
      <li><strong>Content</strong> — the actual text or image inside the element.</li>
      <li><strong>Padding</strong> — space between content and border.</li>
      <li><strong>Border</strong> — the outline around the padding.</li>
      <li><strong>Margin</strong> — space outside the border, separating it from other elements.</li>
    </ul>`
  ),
  new QAItem(
    "What is Flexbox and what are its key properties?",
    `<ul>
      <li>Flexbox is a CSS layout model for arranging items along a main axis and cross axis.</li>
      <li><strong>display: flex</strong> — activates flexbox on a container.</li>
      <li><strong>justify-content</strong> — aligns items along the main axis (horizontal by default).</li>
      <li><strong>align-items</strong> — aligns items along the cross axis (vertical by default).</li>
      <li><strong>flex-direction</strong> — sets direction: row, column, row-reverse, column-reverse.</li>
      <li><strong>flex-wrap</strong> — allows items to wrap onto new lines instead of overflowing.</li>
    </ul>`
  ),
  new QAItem(
    "What is the difference between position: relative, absolute, and fixed?",
    `<ul>
      <li><strong>static</strong> — default. Follows normal document flow.</li>
      <li><strong>relative</strong> — moves from its normal position without affecting other elements.</li>
      <li><strong>absolute</strong> — removed from normal flow, positioned relative to nearest positioned ancestor.</li>
      <li><strong>fixed</strong> — stays in the same position on screen even while scrolling.</li>
      <li>Use z-index to control stacking order when elements overlap.</li>
    </ul>`
  ),
  new QAItem(
    "What is the difference between let, var, and const?",
    `<ul>
      <li><strong>var</strong> — function-scoped, can be redeclared. Avoid in modern JS.</li>
      <li><strong>let</strong> — block-scoped, can be reassigned but not redeclared in the same scope.</li>
      <li><strong>const</strong> — block-scoped, cannot be reassigned after declaration.</li>
      <li>Rule of thumb: use const by default, let when reassignment is needed, never var.</li>
    </ul>`
  ),
  new QAItem(
    "What are JavaScript data types?",
    `<ul>
      <li><strong>Primitive:</strong> Number, String, Boolean, Null, Undefined, BigInt.</li>
      <li><strong>Non-primitive:</strong> Object (key-value pairs), Array (ordered collection).</li>
      <li>Special values: NaN (invalid arithmetic), Infinity (exceeds number limit).</li>
      <li>Use typeof to check a variable's data type — e.g. typeof "hello" returns "string".</li>
    </ul>`
  ),
  new QAItem(
    "What is the difference between == and ===?",
    `<ul>
      <li><strong>==</strong> (loose equality) — compares values after type coercion. So 0 == "0" is true.</li>
      <li><strong>===</strong> (strict equality) — compares both value AND type. So 0 === "0" is false.</li>
      <li>Always use === to avoid unexpected bugs caused by automatic type conversion.</li>
    </ul>`
  ),
  new QAItem(
    "What are the types of loops in JavaScript and when do you use each?",
    `<ul>
      <li><strong>for</strong> — when you know how many times to loop. Best for arrays by index.</li>
      <li><strong>while</strong> — when you don't know how many iterations needed. Runs while condition is true.</li>
      <li><strong>do...while</strong> — like while but always runs at least once before checking the condition.</li>
      <li><strong>for...in</strong> — iterates over object keys.</li>
      <li><strong>for...of</strong> — iterates over iterable values like arrays and strings.</li>
    </ul>`
  ),
  new QAItem(
    "What is the DOM and how does JavaScript interact with it?",
    `<ul>
      <li>DOM (Document Object Model) is a tree-like structure representing the HTML document in memory.</li>
      <li>JavaScript can select elements using getElementById(), querySelector(), querySelectorAll().</li>
      <li>Modify content with textContent or innerHTML, styles with .style, attributes with setAttribute().</li>
      <li>Create new elements with createElement() and add them with appendChild().</li>
      <li>Remove elements using removeChild() via the parent node.</li>
    </ul>`
  ),
  new QAItem(
    "What is event bubbling and how do you stop it?",
    `<ul>
      <li>Event bubbling is when an event on a child element propagates upward through its parent elements.</li>
      <li>e.g. clicking a button inside a div also triggers the div's click handler.</li>
      <li>Use <strong>event.stopPropagation()</strong> to prevent the event from bubbling further up.</li>
      <li>Use <strong>event.preventDefault()</strong> to stop default browser behavior like form submission or link navigation — this does NOT stop bubbling.</li>
      <li><strong>Event delegation</strong> — attach one listener to a parent and use event.target to handle child interactions efficiently.</li>
    </ul>`
  ),
  new QAItem(
    "What are arrow functions and how are they different from regular functions?",
    `<ul>
      <li>Arrow functions use => syntax and are more concise than regular functions.</li>
      <li>Single expression functions can omit {} and the return keyword.</li>
      <li>Single parameter functions can omit parentheses.</li>
      <li><strong>Key difference:</strong> Arrow functions do not have their own this — they inherit it from the surrounding scope (lexical this).</li>
      <li>Regular functions have dynamic this depending on how they are called.</li>
      <li>Arrow functions are ideal for callbacks and event handlers.</li>
    </ul>`
  ),
  new QAItem(
    "What are destructuring, rest, and spread operators in ES6?",
    `<ul>
      <li><strong>Destructuring</strong> — extracts values from arrays or objects into variables cleanly. e.g. const {name, age} = user;</li>
      <li><strong>Rest (...)</strong> — collects remaining function arguments or array/object elements into a single array. e.g. function sum(...nums)</li>
      <li><strong>Spread (...)</strong> — expands an array or object into individual elements. e.g. [...arr1, ...arr2] merges arrays.</li>
    </ul>`
  ),
  new QAItem(
    "What are the four pillars of OOP?",
    `<ul>
      <li><strong>Encapsulation</strong> — wraps data and methods into a single unit (class), hiding internal details.</li>
      <li><strong>Abstraction</strong> — exposes only necessary functionality, hides complexity from the user.</li>
      <li><strong>Inheritance</strong> — a child class acquires properties and methods from a parent class using extends.</li>
      <li><strong>Polymorphism</strong> — a method behaves differently based on the object invoking it. Achieved through method overriding.</li>
    </ul>`
  ),
  new QAItem(
    "How do ES6 classes work in JavaScript?",
    `<ul>
      <li>Classes are blueprints for creating objects, defined using the class keyword.</li>
      <li>constructor() runs automatically when new ClassName() is called, initializing properties with this.</li>
      <li>Methods defined in the class are shared across all instances via the prototype chain.</li>
      <li>Use extends to inherit from a parent class, and super() to call the parent constructor.</li>
      <li>static methods belong to the class itself, not instances.</li>
      <li>Getters and setters provide controlled access to properties.</li>
    </ul>`
  ),
  new QAItem(
    "What is the difference between callbacks, Promises, and async/await?",
    `<ul>
      <li><strong>Callbacks</strong> — functions passed as arguments that run after an async task. Can lead to deeply nested "callback hell".</li>
      <li><strong>Promises</strong> — represent a future value with three states: pending, fulfilled, rejected. Use .then() for success and .catch() for errors. Cleaner chaining than callbacks.</li>
      <li><strong>async/await</strong> — built on Promises. async functions always return a Promise. await pauses execution until the Promise resolves. Errors handled with try/catch. Most readable approach.</li>
    </ul>`
  ),
  new QAItem(
    "What is error handling in JavaScript and how does try/catch work?",
    `<ul>
      <li>JavaScript has three error types: Syntax Errors, Runtime Errors, Logical Errors.</li>
      <li>Common built-in errors: ReferenceError, TypeError, RangeError, SyntaxError.</li>
      <li><strong>try</strong> — wraps code that might throw an error.</li>
      <li><strong>catch</strong> — runs if an error occurs, receives the error object.</li>
      <li><strong>finally</strong> — always runs after try/catch regardless of outcome.</li>
      <li>Use throw new Error("message") to create custom errors.</li>
    </ul>`
  ),
  new QAItem(
    "What is localStorage and how do you store and retrieve objects?",
    `<ul>
      <li>localStorage stores data as key-value string pairs persistently in the browser across sessions.</li>
      <li>Not suitable for sensitive data — accessible via browser JS.</li>
      <li><strong>Store:</strong> localStorage.setItem('key', JSON.stringify(obj))</li>
      <li><strong>Retrieve:</strong> JSON.parse(localStorage.getItem('key'))</li>
      <li><strong>Delete one:</strong> localStorage.removeItem('key')</li>
      <li><strong>Clear all:</strong> localStorage.clear()</li>
      <li>getItem() returns null if the key doesn't exist.</li>
    </ul>`
  )
];

// ── Initialize ───────────────────────────────────────────────────────────────
// Waits for DOM to load, then renders all cards into the qa-list container

document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('qa-list');

  // Render each card with a staggered fade-in delay
  qaItems.forEach((item, index) => {
    const card = item.render();
    card.style.animationDelay = `${index * 0.08}s`;
    list.appendChild(card);
  });

  // Close all other cards when a new one is opened
  list.addEventListener('click', (e) => {
    const clickedCard = e.target.closest('.qa-card');
    if (!clickedCard) return;

    document.querySelectorAll('.qa-card').forEach((card, index) => {
      if (card !== clickedCard) {
        card.classList.remove('open');
        qaItems[index].isOpen = false;
      }
    });
  });
});