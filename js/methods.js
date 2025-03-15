// JavaScript Methods Data
const methodsData = {
    'Array Methods': {
        map: {
            syntax: 'array.map(callback(currentValue, index, array))',
            explanation: 'Creates a new array with the results of calling a function for every array element.',
            examples: [
                {
                    code: `const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
// Result: [2, 4, 6, 8]`,
                    explanation: 'Doubles each number in the array'
                }
            ],
            tags: ['Array', 'Transformation', 'Functional']
        },
        filter: {
            syntax: 'array.filter(callback(element, index, array))',
            explanation: 'Creates a new array with all elements that pass the test implemented by the provided function.',
            examples: [
                {
                    code: `const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
// Result: [2, 4, 6]`,
                    explanation: 'Filters out odd numbers'
                }
            ],
            tags: ['Array', 'Filtering', 'Functional']
        },
        reduce: {
            syntax: 'array.reduce(callback(accumulator, currentValue, index, array), initialValue)',
            explanation: 'Reduces an array to a single value (from left-to-right) using a callback function.',
            examples: [
                {
                    code: `const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// Result: 10`,
                    explanation: 'Calculates the sum of all numbers in the array'
                }
            ],
            tags: ['Array', 'Reduction', 'Functional']
        },
        forEach: {
            syntax: 'array.forEach(callback(currentValue, index, array))',
            explanation: 'Executes a provided function once for each array element.',
            examples: [
                {
                    code: `const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => console.log(fruit));
// Outputs:
// apple
// banana
// cherry`,
                    explanation: 'Prints each fruit name to the console'
                }
            ],
            tags: ['Array', 'Iteration', 'Functional']
        },
        find: {
            syntax: 'array.find(callback(element, index, array))',
            explanation: 'Returns the first element in the array that satisfies the provided testing function.',
            examples: [
                {
                    code: `const numbers = [1, 2, 3, 4, 5];
const firstEven = numbers.find(num => num % 2 === 0);
// Result: 2`,
                    explanation: 'Finds the first even number in the array'
                }
            ],
            tags: ['Array', 'Search', 'Functional']
        },
        includes: {
            syntax: 'array.includes(searchElement, fromIndex)',
            explanation: 'Determines whether an array includes a certain value among its entries.',
            examples: [
                {
                    code: `const fruits = ['apple', 'banana', 'cherry'];
const hasApple = fruits.includes('apple');
// Result: true`,
                    explanation: 'Checks if array contains "apple"'
                }
            ],
            tags: ['Array', 'Search', 'Boolean']
        }
    },
    'String Methods': {
        split: {
            syntax: 'string.split(separator, limit)',
            explanation: 'Splits a string into an array of substrings based on a specified separator.',
            examples: [
                {
                    code: `const text = "Hello World";
const words = text.split(" ");
// Result: ["Hello", "World"]`,
                    explanation: 'Splits string into words'
                }
            ],
            tags: ['String', 'Array', 'Splitting']
        },
        replace: {
            syntax: 'string.replace(searchValue, newValue)',
            explanation: 'Returns a new string with some or all matches of a pattern replaced by a replacement.',
            examples: [
                {
                    code: `const text = "Hello World";
const newText = text.replace("World", "JavaScript");
// Result: "Hello JavaScript"`,
                    explanation: 'Replaces one word with another'
                }
            ],
            tags: ['String', 'Replacement', 'Regular Expression']
        },
        substring: {
            syntax: 'string.substring(startIndex, endIndex)',
            explanation: 'Extracts characters from a string between two specified indices.',
            examples: [
                {
                    code: `const text = "JavaScript";
const sub = text.substring(0, 4);
// Result: "Java"`,
                    explanation: 'Extracts first 4 characters'
                }
            ],
            tags: ['String', 'Extraction', 'Substring']
        },
        toLowerCase: {
            syntax: 'string.toLowerCase()',
            explanation: 'Converts a string to lowercase letters.',
            examples: [
                {
                    code: `const text = "Hello World";
const lower = text.toLowerCase();
// Result: "hello world"`,
                    explanation: 'Converts string to lowercase'
                }
            ],
            tags: ['String', 'Case Conversion']
        },
        trim: {
            syntax: 'string.trim()',
            explanation: 'Removes whitespace from both ends of a string.',
            examples: [
                {
                    code: `const text = "   Hello World   ";
const trimmed = text.trim();
// Result: "Hello World"`,
                    explanation: 'Removes leading and trailing spaces'
                }
            ],
            tags: ['String', 'Whitespace', 'Cleaning']
        }
    },
    'Math Methods': {
        abs: {
            syntax: 'Math.abs(x)',
            explanation: 'Returns the absolute value of a number.',
            examples: [
                {
                    code: `const value = Math.abs(-5);
// Result: 5`,
                    explanation: 'Converts negative number to positive'
                }
            ],
            tags: ['Math', 'Absolute', 'Number']
        },
        round: {
            syntax: 'Math.round(x)',
            explanation: 'Returns the value of a number rounded to the nearest integer.',
            examples: [
                {
                    code: `const value = Math.round(4.7);
// Result: 5
const value2 = Math.round(4.4);
// Result: 4`,
                    explanation: 'Rounds numbers to nearest integer'
                }
            ],
            tags: ['Math', 'Rounding', 'Number']
        },
        floor: {
            syntax: 'Math.floor(x)',
            explanation: 'Returns the largest integer less than or equal to a number.',
            examples: [
                {
                    code: `const value = Math.floor(4.9);
// Result: 4`,
                    explanation: 'Rounds down to nearest integer'
                }
            ],
            tags: ['Math', 'Rounding', 'Number']
        },
        ceil: {
            syntax: 'Math.ceil(x)',
            explanation: 'Returns the smallest integer greater than or equal to a number.',
            examples: [
                {
                    code: `const value = Math.ceil(4.1);
// Result: 5`,
                    explanation: 'Rounds up to nearest integer'
                }
            ],
            tags: ['Math', 'Rounding', 'Number']
        },
        random: {
            syntax: 'Math.random()',
            explanation: 'Returns a random number between 0 (inclusive) and 1 (exclusive).',
            examples: [
                {
                    code: `// Random number between 0 and 1
const value = Math.random();
// Random integer between 1 and 10
const randomInt = Math.floor(Math.random() * 10) + 1;`,
                    explanation: 'Generates random numbers'
                }
            ],
            tags: ['Math', 'Random', 'Number']
        },
        max: {
            syntax: 'Math.max(x1, x2, ..., xn)',
            explanation: 'Returns the largest of zero or more numbers.',
            examples: [
                {
                    code: `const maxValue = Math.max(5, 10, 15);
// Result: 15
const arrayMax = Math.max(...[1, 2, 3, 4, 5]);
// Result: 5`,
                    explanation: 'Finds the maximum value'
                }
            ],
            tags: ['Math', 'Comparison', 'Number']
        },
        min: {
            syntax: 'Math.min(x1, x2, ..., xn)',
            explanation: 'Returns the smallest of zero or more numbers.',
            examples: [
                {
                    code: `const minValue = Math.min(5, 10, 15);
// Result: 5
const arrayMin = Math.min(...[1, 2, 3, 4, 5]);
// Result: 1`,
                    explanation: 'Finds the minimum value'
                }
            ],
            tags: ['Math', 'Comparison', 'Number']
        },
        pow: {
            syntax: 'Math.pow(base, exponent)',
            explanation: 'Returns the base to the exponent power.',
            examples: [
                {
                    code: `const value = Math.pow(2, 3);
// Result: 8 (2³)`,
                    explanation: 'Calculates power of a number'
                }
            ],
            tags: ['Math', 'Power', 'Number']
        }
    }
};

// Add practice questions and quiz data
const practiceData = {
    'Beginner': {
        questions: [
            {
                id: 1,
                title: 'Array Manipulation',
                description: 'Create a function that takes an array of numbers and returns a new array with each number doubled.',
                hint: 'Consider using the map() method',
                starterCode: `function doubleNumbers(arr) {
    // Your code here
}

// Test your function
console.log(doubleNumbers([1, 2, 3, 4])); // Should output: [2, 4, 6, 8]`,
                solution: `function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}`,
                explanation: 'The map() method creates a new array with the results of calling a function for every array element.'
            },
            {
                id: 2,
                title: 'String Manipulation',
                description: 'Create a function that counts the number of vowels in a string.',
                hint: 'Use string methods like split() or match() with regular expressions',
                starterCode: `function countVowels(str) {
    // Your code here
}

// Test your function
console.log(countVowels("hello world")); // Should output: 3`,
                solution: `function countVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}`,
                explanation: 'Using regular expressions with match() helps find all vowels in the string.'
            }
        ]
    },
    'Intermediate': {
        questions: [
            {
                id: 3,
                title: 'Array Filtering',
                description: 'Create a function that filters an array of objects based on a minimum age property.',
                hint: 'Use the filter() method with an age comparison',
                starterCode: `const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 17 },
    { name: "Bob", age: 30 }
];

function filterAdults(persons) {
    // Your code here
}

// Test your function
console.log(filterAdults(people)); // Should output adults only`,
                solution: `function filterAdults(persons) {
    return persons.filter(person => person.age >= 18);
}`,
                explanation: 'The filter() method creates a new array with elements that pass the test.'
            }
        ]
    },
    'Advanced': {
        questions: [
            {
                id: 4,
                title: 'Promise Chain',
                description: 'Create a function that simulates an API call chain with promises.',
                hint: 'Use Promise chaining with .then()',
                starterCode: `function simulateAPI(success = true) {
    // Your code here
}

// Test your function
simulateAPI()
    .then(result => console.log(result))
    .catch(error => console.error(error));`,
                solution: `function simulateAPI(success = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("API call successful");
            } else {
                reject("API call failed");
            }
        }, 1000);
    });
}`,
                explanation: 'Promises help handle asynchronous operations in a more manageable way.'
            }
        ]
    }
};

// Quiz data
const quizData = {
    'JavaScript Basics': [
        {
            question: 'What will be the output of: console.log(typeof [])?',
            options: ['array', 'object', 'undefined', 'null'],
            correct: 1,
            explanation: 'In JavaScript, arrays are actually objects, so typeof [] returns "object".'
        },
        {
            question: 'Which method removes the last element from an array?',
            options: ['pop()', 'push()', 'shift()', 'unshift()'],
            correct: 0,
            explanation: 'pop() removes and returns the last element of an array.'
        }
    ],
    'Advanced Concepts': [
        {
            question: 'What is closure in JavaScript?',
            options: [
                'A way to close browser window',
                'A function with access to variables in its outer scope',
                'A method to end loops',
                'A way to close database connections'
            ],
            correct: 1,
            explanation: 'A closure is a function that has access to variables in its outer (enclosing) lexical scope.'
        }
    ]
};

// Extended Practice and Quiz Data
const extendedPracticeData = {
    'JavaScript Fundamentals': [
        {
            id: 'fund1',
            title: 'Variable Scope',
            description: 'Explain the output of the following code and fix any issues:',
            code: `function test() {
    console.log(x);
    var x = 10;
}
test();`,
            solution: `function test() {
    var x;
    console.log(x); // undefined due to hoisting
    x = 10;
}`,
            explanation: 'This demonstrates variable hoisting in JavaScript.'
        },
        // ... more questions will be added here
    ],
    'DOM Manipulation': [
        {
            id: 'dom1',
            title: 'Event Delegation',
            description: 'Create a function that handles clicks on any button within a container:',
            code: `<div id="container">
    <button>Button 1</button>
    <button>Button 2</button>
</div>`,
            solution: `document.getElementById('container').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        console.log('Clicked:', e.target.textContent);
    }
});`,
            explanation: 'Event delegation allows handling events on multiple elements efficiently.'
        }
    ],
    'Async Programming': [
        {
            id: 'async1',
            title: 'Promise Chain',
            description: 'Create a promise chain that fetches user data and their posts:',
            code: `function fetchUser(id) {
    // Implement
}

function fetchPosts(userId) {
    // Implement
}`,
            solution: `function fetchUser(id) {
    return fetch(\`/api/users/\${id}\`)
        .then(res => res.json());
}

function fetchPosts(userId) {
    return fetch(\`/api/posts?userId=\${userId}\`)
        .then(res => res.json());
}

fetchUser(1)
    .then(user => fetchPosts(user.id))
    .then(posts => console.log(posts))
    .catch(error => console.error(error));`,
            explanation: 'Promise chaining helps manage sequential async operations.'
        }
    ]
};

// Unlimited Quiz Generator
const quizTopics = {
    'JavaScript Core': {
        concepts: ['Variables', 'Functions', 'Objects', 'Arrays', 'Scope', 'Closures', 'This Keyword', 'Prototypes'],
        generateQuestion: function() {
            const concept = this.concepts[Math.floor(Math.random() * this.concepts.length)];
            const questions = this.getQuestionBank(concept);
            return questions[Math.floor(Math.random() * questions.length)];
        },
        getQuestionBank: function(concept) {
            const questionBank = {
                'Variables': [
                    {
                        question: 'What is the output of: console.log(typeof null)?',
                        options: ['null', 'undefined', 'object', 'number'],
                        correct: 2,
                        explanation: 'In JavaScript, typeof null returns "object", which is a known language quirk.'
                    },
                    // Add more questions for variables
                ],
                'Functions': [
                    {
                        question: 'What is a pure function?',
                        options: [
                            'A function that only uses arrow syntax',
                            'A function that always returns the same output for the same input and has no side effects',
                            'A function that only uses local variables',
                            'A function without parameters'
                        ],
                        correct: 1,
                        explanation: 'Pure functions are deterministic and have no side effects.'
                    }
                    // Add more questions for functions
                ]
                // Add more concepts
            };
            return questionBank[concept] || [];
        }
    }
    // Add more topics
};

// Extended topics for practice questions
const additionalTopics = {
    'ES6+ Features': [
        {
            id: 'es6-1',
            title: 'Destructuring',
            description: 'Use object and array destructuring to extract values:',
            code: `const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

// Extract name, age, and city using destructuring
// Your code here`,
            solution: `const { name, age, address: { city } } = user;
console.log(name, age, city); // John 30 New York`,
            explanation: 'Object destructuring allows extracting multiple properties in a single line.',
            difficulty: 'Intermediate',
            tags: ['ES6', 'Objects', 'Destructuring']
        }
    ],
    'Data Structures': [
        {
            id: 'ds-1',
            title: 'Implement Stack',
            description: 'Create a Stack class with push, pop, and peek methods:',
            code: `class Stack {
    // Your implementation here
}

// Test your stack
const stack = new Stack();`,
            solution: `class Stack {
    constructor() {
        this.items = [];
    }
    
    push(element) {
        this.items.push(element);
    }
    
    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }
    
    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
}`,
            explanation: 'Stack is a LIFO (Last In First Out) data structure.',
            difficulty: 'Advanced',
            tags: ['Data Structures', 'Classes', 'Implementation']
        }
    ],
    'Algorithm Challenges': [
        {
            id: 'algo-1',
            title: 'Binary Search',
            description: 'Implement binary search algorithm:',
            code: `function binarySearch(arr, target) {
    // Your implementation here
}

// Test
const numbers = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(numbers, 7)); // Should return 3`,
            solution: `function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
            explanation: 'Binary search is an efficient algorithm for finding items in a sorted array.',
            difficulty: 'Advanced',
            tags: ['Algorithms', 'Searching', 'Optimization']
        }
    ]
};

// Enhanced animations
const enhancedAnimations = {
    fadeInScale: {
        keyframes: `@keyframes fadeInScale {
            from {
                opacity: 0;
                transform: scale(0.8) translateY(20px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }`,
        duration: '0.6s',
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    rotateIn: {
        keyframes: `@keyframes rotateIn {
            from {
                opacity: 0;
                transform: rotate(-180deg) scale(0.3);
            }
            to {
                opacity: 1;
                transform: rotate(0) scale(1);
            }
        }`,
        duration: '0.8s',
        easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    },
    slideInStagger: {
        keyframes: `@keyframes slideInStagger {
            from {
                opacity: 0;
                transform: translateX(-30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }`,
        duration: '0.4s',
        easing: 'ease-out'
    }
};

// New question formats
const questionFormats = {
    multipleChoice: (question) => {
        if (!question.options) {
            return questionFormats.codeImplementation(question);
        }
        return `
            <div class="question-card" data-format="multiple-choice">
                <h3>${question.title}</h3>
                <p>${question.description}</p>
                <div class="options-grid">
                    ${question.options.map((opt, i) => `
                        <label class="option-card">
                            <input type="radio" name="q_${question.id}" value="${i}">
                            <span class="option-text">${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    },
    
    codeImplementation: (question) => `
        <div class="question-card" data-format="code-implementation">
            <h3>${question.title}</h3>
            <p>${question.description}</p>
            <div class="code-editor enhanced">
                <div class="editor-toolbar">
                    <button class="run-btn">▶ Run</button>
                    <button class="reset-btn">↺ Reset</button>
                    <button class="hint-btn">💡 Hint</button>
                    <button class="solution-btn">✓ Solution</button>
                </div>
                <div class="editor-container">
                    <textarea class="code-input" spellcheck="false">${question.code || question.starterCode || ''}</textarea>
                    <div class="line-numbers"></div>
                </div>
                <div class="output-panel">
                    <div class="output-header">
                        <span>Output</span>
                        <button class="clear-output">Clear</button>
                    </div>
                    <div class="output-content"></div>
                </div>
            </div>
            ${question.hint ? `
                <div class="hint-box" style="display: none">
                    <p><strong>Hint:</strong> ${question.hint}</p>
                </div>
            ` : ''}
            ${question.solution ? `
                <div class="solution-box" style="display: none">
                    <h4>Solution:</h4>
                    <pre><code>${question.solution}</code></pre>
                    <p><strong>Explanation:</strong> ${question.explanation}</p>
                </div>
            ` : ''}
        </div>
    `
};

// Enhanced quiz features
function enhanceQuizSystem() {
    const quizContainer = document.querySelector('.quiz-content');
    if (!quizContainer) return;
    
    // Add timer
    const timer = document.createElement('div');
    timer.className = 'quiz-timer';
    timer.innerHTML = `
        <div class="timer-circle">
            <svg>
                <circle class="timer-progress" cx="30" cy="30" r="28"></circle>
            </svg>
            <span class="timer-text">60</span>
        </div>
    `;
    quizContainer.parentElement.insertBefore(timer, quizContainer);
    
    // Add scoring system
    const scoring = {
        correct: 0,
        streak: 0,
        multiplier: 1,
        updateScore: function(isCorrect) {
            if (isCorrect) {
                this.streak++;
                this.multiplier = Math.min(4, 1 + Math.floor(this.streak / 3) * 0.5);
                this.correct += Math.floor(100 * this.multiplier);
            } else {
                this.streak = 0;
                this.multiplier = 1;
            }
            this.updateUI();
        },
        updateUI: function() {
            document.querySelector('.correct-count').textContent = `Score: ${this.correct}`;
            document.querySelector('.streak-count').textContent = `Streak: ${this.streak} (${this.multiplier}x)`;
        }
    };
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key >= '1' && e.key <= '4') {
            const options = document.querySelectorAll('.option-card');
            const index = parseInt(e.key) - 1;
            if (options[index]) {
                options[index].click();
            }
        }
    });
    
    return scoring;
}

// Add new styles for enhanced features
const enhancedStyles = `
    /* Enhanced Animations */
    ${Object.values(enhancedAnimations).map(anim => anim.keyframes).join('\n')}
    
    /* Additional Animations */
    @keyframes pulseHint {
        0% { opacity: 0.7; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.05); }
        100% { opacity: 0.7; transform: scale(1); }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeInUp {
        from { 
            opacity: 0;
            transform: translateY(20px);
        }
        to { 
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes scaleIn {
        from { 
            opacity: 0;
            transform: scale(0.8);
        }
        to { 
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes scaleOut {
        to { 
            opacity: 0;
            transform: scale(0.8);
        }
    }
    
    @keyframes fadeOut {
        to { opacity: 0; }
    }
    
    /* Global Styling */
    .section-title {
        background-image: linear-gradient(135deg, var(--primary-color, #6c63ff), var(--accent-color, #ff6384));
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        margin-bottom: 2rem;
        animation: fadeInUp 0.6s ease-out;
    }
    
    /* Card Styling */
    .question-card, .quiz-card, .methods-card {
        background: var(--card-bg, rgba(255, 255, 255, 0.05));
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
        animation: fadeInScale 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .question-card:hover, .quiz-card:hover, .methods-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(108, 99, 255, 0.2);
    }
    
    /* Gradient Titles */
    .question-card h3, .quiz-card h3, .category-header h3, .method-details h2 {
        background-image: linear-gradient(135deg, var(--primary-color, #6c63ff), var(--accent-color, #ff6384));
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        font-weight: 700;
        margin-bottom: 1rem;
    }
    
    /* Common Elements */
    button {
        cursor: pointer;
        transition: all 0.2s ease;
        border: none;
        border-radius: 4px;
        padding: 0.5rem 1rem;
        background: var(--button-bg, #2d2d2d);
        color: var(--text-color, #fff);
    }
    
    button:hover {
        transform: translateY(-2px);
        background: var(--button-hover-bg, #3d3d3d);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
    
    /* Tab Styling */
    .difficulty-tabs, .topic-tabs {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
    }
    
    .difficulty-tab, .topic-tab {
        padding: 0.5rem 1rem;
        border-radius: 20px;
        background: var(--tab-bg, rgba(255, 255, 255, 0.05));
        color: var(--text-color, #fff);
        cursor: pointer;
        transition: all 0.2s ease;
        border: none;
        animation: fadeInUp 0.4s ease forwards;
        animation-delay: calc(var(--index, 0) * 0.1s);
    }
    
    .difficulty-tab.active, .topic-tab.active {
        background: linear-gradient(135deg, var(--primary-color, #6c63ff), var(--accent-color, #ff6384));
        color: white;
    }
    
    .difficulty-tab:hover, .topic-tab:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
    
    /* Options Grid */
    .options-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
        margin: 1rem 0;
    }
    
    .option-card {
        background: var(--option-bg, rgba(255, 255, 255, 0.05));
        padding: 1rem;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease;
        animation: slideInStagger 0.4s ease-out;
        animation-fill-mode: both;
        position: relative;
        overflow: hidden;
    }
    
    .option-card:hover {
        transform: translateY(-3px) scale(1.02);
        background: var(--option-hover-bg, rgba(255, 255, 255, 0.1));
    }
    
    .option-card input {
        position: absolute;
        opacity: 0;
    }
    
    .option-text {
        display: block;
        position: relative;
        z-index: 1;
    }
    
    /* Quiz Styling */
    .quiz-actions {
        margin-top: 1.5rem;
        display: flex;
        justify-content: flex-end;
    }
    
    .check-answer-btn {
        background: linear-gradient(135deg, var(--primary-color, #6c63ff), var(--accent-color, #ff6384));
        color: white;
        padding: 0.5rem 1.5rem;
        border-radius: 25px;
        font-weight: 600;
        animation: pulseHint 2s infinite;
    }
    
    .check-answer-btn:hover {
        transform: translateY(-2px) scale(1.05);
        box-shadow: 0 8px 15px rgba(108, 99, 255, 0.3);
    }
    
    .explanation-box {
        margin-top: 1.5rem;
        padding: 1rem;
        border-radius: 8px;
        background: var(--explanation-bg, rgba(255, 255, 255, 0.05));
        animation: fadeInUp 0.4s ease forwards;
    }
    
    .correct-answer {
        background: rgba(46, 213, 115, 0.2);
        border-left: 3px solid rgba(46, 213, 115, 0.8);
    }
    
    .wrong-answer {
        background: rgba(255, 99, 132, 0.2);
        border-left: 3px solid rgba(255, 99, 132, 0.8);
    }
    
    .success-message {
        color: #2ed573;
        font-weight: 600;
    }
    
    .error-message {
        color: #ff6384;
        font-weight: 600;
    }
    
    /* Quiz Timer */
    .quiz-timer {
        position: relative;
        width: 60px;
        height: 60px;
        margin: 0 auto 1rem;
    }
    
    .timer-circle svg {
        width: 60px;
        height: 60px;
        transform: rotate(-90deg);
    }
    
    .timer-progress {
        fill: none;
        stroke: var(--primary-color, #6c63ff);
        stroke-width: 4;
        stroke-linecap: round;
        stroke-dasharray: 175.9;
        stroke-dashoffset: 0;
        transition: stroke-dashoffset 1s linear;
    }
    
    .timer-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.2rem;
        font-weight: bold;
    }
    
    /* Quiz Controls */
    .quiz-controls {
        display: flex;
        gap: 1rem;
        margin-bottom: 1.5rem;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .topic-selector {
        flex: 1;
        min-width: 200px;
        padding: 0.5rem;
        border-radius: 4px;
        background: var(--select-bg, rgba(255, 255, 255, 0.05));
        color: var(--text-color, #fff);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .generate-question-btn {
        background: linear-gradient(135deg, var(--primary-color, #6c63ff), var(--accent-color, #ff6384));
        color: white;
        padding: 0.5rem 1.5rem;
        border-radius: 25px;
        font-weight: 600;
    }
    
    .quiz-stats {
        margin-left: auto;
        display: flex;
        gap: 1rem;
        font-weight: 600;
    }
    
    .correct-count {
        color: var(--primary-color, #6c63ff);
    }
    
    .streak-count {
        color: var(--accent-color, #ff6384);
    }
    
    /* Practice Section */
    .practice-navigation {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 1.5rem;
        align-items: center;
    }
    
    .progress-tracker {
        flex: 1;
        min-width: 200px;
        height: 10px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        overflow: hidden;
        position: relative;
    }
    
    .progress-bar {
        height: 100%;
        background: linear-gradient(90deg, var(--primary-color, #6c63ff), var(--accent-color, #ff6384));
        width: 0%;
        transition: width 0.5s ease;
    }
    
    .progress-text {
        position: absolute;
        right: 0;
        top: -20px;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.7);
    }
    
    /* Ripple Effect */
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    /* Enhanced Code Editor */
    .code-editor.enhanced {
        background: var(--editor-bg, #1e1e1e);
        border-radius: 8px;
        overflow: hidden;
        margin: 1.5rem 0;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }
    
    .editor-toolbar {
        display: flex;
        gap: 0.5rem;
        padding: 0.5rem;
        background: rgba(255, 255, 255, 0.05);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .editor-toolbar button {
        padding: 0.3rem 0.8rem;
        border: none;
        border-radius: 4px;
        background: var(--button-bg, #2d2d2d);
        color: var(--text-color, #fff);
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 0.9rem;
    }
    
    .editor-toolbar button:hover {
        background: var(--button-hover-bg, #3d3d3d);
        transform: translateY(-1px);
    }
    
    .editor-container {
        position: relative;
        padding: 1rem;
    }
    
    .code-input {
        width: 100%;
        min-height: 150px;
        background: transparent;
        color: var(--text-color, #fff);
        border: none;
        resize: vertical;
        font-family: monospace;
        line-height: 1.5;
        tab-size: 4;
        outline: none;
        padding-left: 2rem;
    }
    
    .line-numbers {
        position: absolute;
        left: 0;
        top: 0;
        padding: 1rem 0.5rem;
        color: #666;
        user-select: none;
        text-align: right;
        font-family: monospace;
        line-height: 1.5;
    }
    
    .output-panel {
        background: rgba(0, 0, 0, 0.2);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .output-header {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    .output-content {
        padding: 0.5rem;
        min-height: 50px;
        max-height: 150px;
        overflow: auto;
        font-family: monospace;
    }
    
    .output-content .success {
        color: #2ed573;
    }
    
    .output-content .error {
        color: #ff6384;
    }
    
    /* Method Details Modal */
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        z-index: 100;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .overlay.active {
        opacity: 1;
    }
    
    .method-details {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.9);
        background: var(--card-bg, #262626);
        border-radius: 12px;
        padding: 2rem;
        z-index: 101;
        width: 90%;
        max-width: 800px;
        max-height: 80vh;
        overflow-y: auto;
        opacity: 0;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
    }
    
    .method-details.active {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
    
    .close-btn {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.05);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        border: none;
        font-size: 1.5rem;
        line-height: 1;
    }
    
    .close-btn:hover {
        transform: rotate(90deg) scale(1.1);
        background: rgba(255, 255, 255, 0.1);
    }
    
    .category-label {
        display: inline-block;
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        background: rgba(255, 255, 255, 0.05);
        margin-bottom: 1rem;
        font-size: 0.9rem;
    }
    
    .method-tag {
        display: inline-block;
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
        background: rgba(108, 99, 255, 0.1);
        color: var(--primary-color, #6c63ff);
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 0.8rem;
    }
    
    .method-syntax {
        background: rgba(0, 0, 0, 0.2);
        padding: 1rem;
        border-radius: 8px;
        margin: 1rem 0;
    }
    
    .syntax-header {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 0.5rem;
    }
    
    .method-explanation {
        margin-bottom: 1.5rem;
        line-height: 1.6;
    }
    
    .example-container {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 1rem;
    }
    
    .example-code {
        padding: 1rem;
        margin: 0;
        background: rgba(0, 0, 0, 0.3);
        overflow-x: auto;
        tab-size: 4;
        font-family: monospace;
    }
    
    .example-explanation {
        padding: 0.5rem 1rem;
        margin: 0;
        font-size: 0.9rem;
    }
    
    /* Hint and Solution Boxes */
    .hint-box, .solution-box {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        padding: 1rem;
        margin-top: 1rem;
        border-left: 3px solid var(--primary-color, #6c63ff);
        animation: fadeInUp 0.4s ease forwards;
    }
    
    .solution-box pre {
        background: rgba(0, 0, 0, 0.3);
        padding: 1rem;
        border-radius: 4px;
        overflow-x: auto;
        margin: 0.5rem 0;
    }
    
    /* Click Hint */
    .click-hint {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        font-size: 0.9rem;
        color: var(--accent-color, #ff6384);
        opacity: 0.7;
    }
    
    /* Media Queries for Responsiveness */
    @media (max-width: 768px) {
        .options-grid {
            grid-template-columns: 1fr;
        }
        
        .quiz-controls {
            flex-direction: column;
            align-items: stretch;
        }
        
        .quiz-stats {
            margin-left: 0;
            justify-content: space-between;
        }
        
        .practice-navigation {
            flex-direction: column;
            align-items: stretch;
        }
    }
`;

// Create method cards with enhanced animations
function createMethodCards() {
    const methodsGrid = document.querySelector('.methods-grid');
    if (!methodsGrid) return;
    
    // Add stagger animation delay
    let delay = 0;
    
    for (const category in methodsData) {
        // Add category header with fade-in animation
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'category-header';
        categoryHeader.style.animation = `fadeInUp 0.6s ease forwards ${delay}s`;
        delay += 0.1;
        
        // Add browser compatibility for gradient text
        const h3 = document.createElement('h3');
        h3.textContent = category;
        h3.style.backgroundClip = 'text';
        h3.style.webkitBackgroundClip = 'text';
        h3.style.color = 'transparent';
        h3.style.opacity = '0';
        h3.style.animation = 'fadeIn 0.6s ease forwards';
        categoryHeader.appendChild(h3);
        
        methodsGrid.appendChild(categoryHeader);
        
        const methods = methodsData[category];
        
        for (const methodName in methods) {
            const method = methods[methodName];
            const card = document.createElement('div');
            card.className = 'methods-card';
            card.style.animation = `fadeInUp 0.6s ease forwards ${delay}s`;
            delay += 0.1;
            
            // Create method title with gradient text compatibility
            const methodTitle = document.createElement('h3');
            methodTitle.textContent = methodName;
            methodTitle.style.backgroundClip = 'text';
            methodTitle.style.webkitBackgroundClip = 'text';
            methodTitle.style.color = 'transparent';
            
            // Add hover effect
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px) scale(1.02)';
                card.style.boxShadow = '0 8px 30px rgba(108, 99, 255, 0.2)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = '';
            });
            
            card.appendChild(methodTitle);
            
            // Add method preview with gradient border
            const preview = document.createElement('div');
            preview.className = 'method-preview';
            preview.innerHTML = method.explanation;
            preview.style.position = 'relative';
            preview.style.zIndex = '1';
            card.appendChild(preview);
            
            // Add animated click hint
            const clickHint = document.createElement('div');
            clickHint.className = 'click-hint';
            clickHint.innerHTML = 'Click to see details →';
            clickHint.style.animation = 'pulseHint 2s infinite';
            card.appendChild(clickHint);
            
            // Add ripple effect on click
            card.addEventListener('click', (e) => {
                const ripple = document.createElement('div');
                ripple.className = 'ripple';
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                card.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 1000);
                showMethodDetails(category, methodName, method);
            });
            
            methodsGrid.appendChild(card);
        }
    }
    
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.methods-card').forEach(card => observer.observe(card));
}

// Show method details with enhanced animations
function showMethodDetails(category, methodName, method) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    
    const detailsBox = document.createElement('div');
    detailsBox.className = 'method-details';
    
    // Create method title with gradient text compatibility
    const title = document.createElement('h2');
    title.textContent = methodName;
    title.style.backgroundClip = 'text';
    title.style.webkitBackgroundClip = 'text';
    title.style.color = 'transparent';
    
    // Create content with staggered animations
    detailsBox.innerHTML = `
        <button class="close-btn">×</button>
        ${title.outerHTML}
        <div class="category-label" style="animation: fadeInUp 0.4s ease forwards 0.1s">${category}</div>
        <div class="method-tags" style="animation: fadeInUp 0.4s ease forwards 0.2s">
            ${method.tags.map(tag => `<span class="method-tag">${tag}</span>`).join('')}
        </div>
        <div class="method-syntax" style="animation: fadeInUp 0.4s ease forwards 0.3s">
            <div class="syntax-header">Syntax</div>
            <code>${method.syntax}</code>
        </div>
        <div class="method-explanation" style="animation: fadeInUp 0.4s ease forwards 0.4s">
            ${method.explanation}
        </div>
        <div class="method-examples" style="animation: fadeInUp 0.4s ease forwards 0.5s">
            <h4>Examples:</h4>
            ${method.examples.map((example, index) => `
                <div class="example-container" style="animation: fadeInUp 0.4s ease forwards ${0.6 + index * 0.1}s">
                    <pre class="example-code">${example.code}</pre>
                    <p class="example-explanation">${example.explanation}</p>
                </div>
            `).join('')}
        </div>
    `;
    
    document.body.appendChild(overlay);
    document.body.appendChild(detailsBox);
    
    // Add active class with enhanced animations
    requestAnimationFrame(() => {
        overlay.classList.add('active');
        detailsBox.classList.add('active');
        detailsBox.style.animation = 'scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards';
    });
    
    // Enhanced close functionality with animations
    const closeBtn = detailsBox.querySelector('.close-btn');
    const closeModal = () => {
        overlay.style.animation = 'fadeOut 0.3s forwards';
        detailsBox.style.animation = 'scaleOut 0.3s forwards';
        
        setTimeout(() => {
            overlay.remove();
            detailsBox.remove();
        }, 300);
    };
    
    // Add hover effects to close button
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.transform = 'rotate(90deg) scale(1.1)';
        closeBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.transform = 'rotate(0) scale(1)';
        closeBtn.style.backgroundColor = '';
    });
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    detailsBox.addEventListener('click', e => e.stopPropagation());
    
    // Add keyboard navigation
    const handleKeyPress = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleKeyPress);
        }
    };
    document.addEventListener('keydown', handleKeyPress);
}

// Create practice section
function createPracticeSection() {
    const practiceSection = document.createElement('div');
    practiceSection.className = 'practice-section';
    practiceSection.innerHTML = `
        <h2 class="section-title">Practice Questions</h2>
        <div class="difficulty-tabs"></div>
        <div class="questions-container"></div>
    `;
    
    document.querySelector('.important-methods').appendChild(practiceSection);
    
    // Create difficulty tabs
    const tabsContainer = practiceSection.querySelector('.difficulty-tabs');
    Object.keys(practiceData).forEach((difficulty, index) => {
        const tab = document.createElement('button');
        tab.className = `difficulty-tab ${index === 0 ? 'active' : ''}`;
        tab.textContent = difficulty;
        tab.addEventListener('click', () => showQuestions(difficulty));
        tabsContainer.appendChild(tab);
    });
    
    // Show initial questions
    showQuestions(Object.keys(practiceData)[0]);
}

// Show questions for selected difficulty
function showQuestions(difficulty) {
    const container = document.querySelector('.questions-container');
    const questions = practiceData[difficulty].questions;
    
    container.innerHTML = '';
    questions.forEach(question => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        
        // Determine the appropriate format based on question type
        const format = question.options ? 'multipleChoice' : 'codeImplementation';
        questionCard.innerHTML = questionFormats[format](question);
        
        // Add event listeners based on question type
        if (format === 'multipleChoice') {
            addMultipleChoiceListeners(questionCard, question);
        } else {
            addCodeImplementationListeners(questionCard, question);
        }
        
        container.appendChild(questionCard);
    });
}

// Add listeners for multiple choice questions
function addMultipleChoiceListeners(card, question) {
    const options = card.querySelectorAll('.option-card');
    options.forEach(option => {
        option.addEventListener('click', () => {
            const selected = card.querySelector(`input[name="q_${question.id}"]:checked`);
            if (selected) {
                selected.checked = false;
            }
            const radio = option.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
            }
        });
    });
}

// Add listeners for code implementation questions
function addCodeImplementationListeners(card, question) {
    const hintBtn = card.querySelector('.hint-btn');
    const solutionBtn = card.querySelector('.solution-btn');
    const runBtn = card.querySelector('.run-btn');
    const resetBtn = card.querySelector('.reset-btn');
    const clearBtn = card.querySelector('.clear-output');
    const hintBox = card.querySelector('.hint-box');
    const solutionBox = card.querySelector('.solution-box');
    const codeInput = card.querySelector('.code-input');
    const outputContent = card.querySelector('.output-content');
    
    if (hintBtn && hintBox) {
        hintBtn.addEventListener('click', () => {
            hintBox.style.display = hintBox.style.display === 'none' ? 'block' : 'none';
        });
    }
    
    if (solutionBtn && solutionBox) {
        solutionBtn.addEventListener('click', () => {
            solutionBox.style.display = solutionBox.style.display === 'none' ? 'block' : 'none';
        });
    }
    
    if (runBtn && codeInput && outputContent) {
        runBtn.addEventListener('click', () => {
            try {
                const code = codeInput.value;
                const result = new Function(code + '\n//# sourceURL=practice.js')();
                outputContent.innerHTML = `<pre class="success">Output: ${JSON.stringify(result, null, 2)}</pre>`;
            } catch (error) {
                outputContent.innerHTML = `<pre class="error">Error: ${error.message}</pre>`;
            }
        });
    }
    
    if (resetBtn && codeInput && question.code) {
        resetBtn.addEventListener('click', () => {
            codeInput.value = question.code || question.starterCode || '';
        });
    }
    
    if (clearBtn && outputContent) {
        clearBtn.addEventListener('click', () => {
            outputContent.innerHTML = '';
        });
    }
}

// Create quiz section
function createQuizSection() {
    const quizSection = document.createElement('div');
    quizSection.className = 'quiz-section';
    quizSection.innerHTML = `
        <h2 class="section-title">JavaScript Quiz</h2>
        <div class="quiz-container"></div>
    `;
    
    document.querySelector('.important-methods').appendChild(quizSection);
    showQuiz('JavaScript Basics');
}

// Show quiz questions
function showQuiz(category) {
    const container = document.querySelector('.quiz-container');
    const questions = quizData[category];
    
    container.innerHTML = '';
    questions.forEach((q, index) => {
        const quizCard = document.createElement('div');
        quizCard.className = 'quiz-card';
        quizCard.innerHTML = questionFormats.multipleChoice(q);
        
        container.appendChild(quizCard);
    });
}

// Show content for selected topic
function showTopicContent(topic) {
    const content = document.querySelector('.practice-content');
    const questions = extendedPracticeData[topic];
    const tabs = document.querySelectorAll('.topic-tab');
    
    // Update active tab
    tabs.forEach(tab => {
        tab.classList.toggle('active', tab.textContent === topic);
    });
    
    // Clear existing content
    content.innerHTML = '';
    
    // Add questions for this topic
    questions.forEach(question => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        questionCard.innerHTML = questionFormats[question.options ? 'multipleChoice' : 'codeImplementation'](question);
        
        // Add event listeners
        if (question.options) {
            addMultipleChoiceListeners(questionCard, question);
        } else {
            addCodeImplementationListeners(questionCard, question);
        }
        
        content.appendChild(questionCard);
    });
    
    // Update progress
    updateProgress();
}

// Update progress tracker
function updateProgress() {
    const total = Object.values(extendedPracticeData).flat().length;
    const completed = document.querySelectorAll('.question-card.completed').length;
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');
    
    if (progressBar && progressText) {
        const percentage = (completed / total) * 100;
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${completed}/${total} Completed`;
    }
}

// Create extended practice section
function createExtendedPracticeSection() {
    const section = document.createElement('div');
    section.className = 'extended-practice-section';
    section.innerHTML = `
        <h2 class="section-title">Advanced JavaScript Practice</h2>
        <div class="practice-navigation">
            <div class="topic-tabs"></div>
            <div class="progress-tracker">
                <div class="progress-bar"></div>
                <span class="progress-text">0/100 Completed</span>
            </div>
        </div>
        <div class="practice-content"></div>
    `;
    
    document.querySelector('.important-methods').appendChild(section);
    initializePracticeSection();
}

// Initialize practice section
function initializePracticeSection() {
    const topicTabs = document.querySelector('.topic-tabs');
    const content = document.querySelector('.practice-content');
    
    Object.keys(extendedPracticeData).forEach((topic, index) => {
        const tab = document.createElement('button');
        tab.className = `topic-tab ${index === 0 ? 'active' : ''}`;
        tab.textContent = topic;
        tab.addEventListener('click', () => showTopicContent(topic));
        topicTabs.appendChild(tab);
    });
    
    showTopicContent(Object.keys(extendedPracticeData)[0]);
}

// Create unlimited quiz section
function createUnlimitedQuizSection() {
    const section = document.createElement('div');
    section.className = 'unlimited-quiz-section';
    section.innerHTML = `
        <h2 class="section-title">Unlimited JavaScript Quiz</h2>
        <div class="quiz-controls">
            <select class="topic-selector">
                ${Object.keys(quizTopics).map(topic => 
                    `<option value="${topic}">${topic}</option>`
                ).join('')}
            </select>
            <button class="generate-question-btn">Generate New Question</button>
            <div class="quiz-stats">
                <span class="correct-count">Correct: 0</span>
                <span class="streak-count">Streak: 0</span>
            </div>
        </div>
        <div class="quiz-content"></div>
    `;
    
    document.querySelector('.important-methods').appendChild(section);
    initializeUnlimitedQuiz();
}

// Initialize unlimited quiz
function initializeUnlimitedQuiz() {
    const controls = document.querySelector('.quiz-controls');
    const content = document.querySelector('.quiz-content');
    const generateBtn = controls.querySelector('.generate-question-btn');
    const topicSelector = controls.querySelector('.topic-selector');
    
    generateBtn.addEventListener('click', () => {
        const topic = topicSelector.value;
        const question = quizTopics[topic].generateQuestion();
        showQuizQuestion(question);
    });
    
    // Generate first question
    generateBtn.click();
}

// Show a single quiz question
function showQuizQuestion(question) {
    const content = document.querySelector('.quiz-content');
    if (!content || !question) return;
    
    content.innerHTML = '';
    
    const quizCard = document.createElement('div');
    quizCard.className = 'quiz-card';
    
    // Use multiple choice format for quiz questions
    quizCard.innerHTML = `
        <div class="question-card" data-format="multiple-choice">
            <h3>${question.question}</h3>
            <div class="options-grid">
                ${question.options.map((opt, i) => `
                    <label class="option-card">
                        <input type="radio" name="quiz_question" value="${i}">
                        <span class="option-text">${opt}</span>
                    </label>
                `).join('')}
            </div>
            <div class="quiz-actions">
                <button class="check-answer-btn">Check Answer</button>
            </div>
            <div class="explanation-box" style="display: none">
                <p class="result-message"></p>
                <p><strong>Explanation:</strong> ${question.explanation}</p>
            </div>
        </div>
    `;
    
    content.appendChild(quizCard);
    
    // Add event listeners
    const checkBtn = quizCard.querySelector('.check-answer-btn');
    const options = quizCard.querySelectorAll('.option-card');
    const explanationBox = quizCard.querySelector('.explanation-box');
    const resultMessage = quizCard.querySelector('.result-message');
    
    // Handle option selection
    options.forEach(option => {
        option.addEventListener('click', () => {
            const selected = quizCard.querySelector('input[name="quiz_question"]:checked');
            if (selected) {
                selected.checked = false;
            }
            const radio = option.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
            }
        });
    });
    
    // Handle check answer
    if (checkBtn) {
        checkBtn.addEventListener('click', () => {
            const selected = quizCard.querySelector('input[name="quiz_question"]:checked');
            if (!selected) {
                alert('Please select an answer first');
                return;
            }
            
            const selectedIndex = parseInt(selected.value);
            const isCorrect = selectedIndex === question.correct;
            
            // Update scoring if available
            const scoringSystem = document.querySelector('.quiz-stats');
            if (scoringSystem) {
                const scoring = enhanceQuizSystem() || { updateScore: () => {} };
                scoring.updateScore(isCorrect);
            }
            
            // Show explanation
            explanationBox.style.display = 'block';
            resultMessage.textContent = isCorrect ? 
                '✓ Correct! Well done!' : 
                '✗ Incorrect. Try again.';
            resultMessage.className = isCorrect ? 'success-message' : 'error-message';
            
            // Highlight correct answer
            options.forEach((opt, idx) => {
                if (idx === question.correct) {
                    opt.classList.add('correct-answer');
                } else if (idx === selectedIndex && !isCorrect) {
                    opt.classList.add('wrong-answer');
                }
            });
            
            // Hide check button
            checkBtn.style.display = 'none';
        });
    }
}

// Initialize enhanced features
document.addEventListener('DOMContentLoaded', () => {
    createMethodCards();
    createPracticeSection();
    createQuizSection();
    createExtendedPracticeSection();
    createUnlimitedQuizSection();
    
    // Add all styles
    const style = document.createElement('style');
    style.textContent = enhancedStyles;
    document.head.appendChild(style);
    
    // Initialize enhanced quiz system
    const scoring = enhanceQuizSystem();
    
    // Add new topics to practice questions
    Object.assign(extendedPracticeData, additionalTopics);
    
    // Reinitialize practice section with new formats
    initializePracticeSection();
}); 