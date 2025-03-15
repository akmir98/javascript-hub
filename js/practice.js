// Practice exercises and code editor functionality
const practiceExercises = {
    fundamentals: [
        {
            title: "Variables and Data Types",
            description: "Practice declaring variables and working with different data types",
            initialCode: "// 1. Declare a variable 'name' using let and assign your name to it\n// 2. Declare a constant 'age' and assign your age\n// 3. Create an array called 'hobbies' with three items\n// 4. Create an object called 'person' with name and age properties\n\n",
            solution: `let name = "Your Name";
const age = 25;
const hobbies = ["coding", "reading", "gaming"];
const person = {
    name: "Your Name",
    age: 25
};`
        },
        {
            title: "Operators and Control Flow",
            description: "Practice using operators and control structures",
            initialCode: "// 1. Write an if statement to check if age is greater than 18\n// 2. Create a for loop that counts from 1 to 5\n// 3. Use the ternary operator to check if a number is even or odd\n\n",
            solution: `const age = 20;
if (age > 18) {
    console.log("Adult");
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

const number = 7;
const result = number % 2 === 0 ? "Even" : "Odd";`
        }
    ],
    functions: [
        {
            title: "Function Declarations",
            description: "Practice creating and using functions",
            initialCode: "// 1. Create a function that adds two numbers\n// 2. Create an arrow function that multiplies two numbers\n// 3. Create a function that takes a callback function\n\n",
            solution: `function add(a, b) {
    return a + b;
}

const multiply = (a, b) => a * b;

function calculate(a, b, callback) {
    return callback(a, b);
}`
        },
        {
            title: "Scope and Closures",
            description: "Practice working with scope and closures",
            initialCode: "// 1. Create a counter function using closure\n// 2. Create a function that returns a function\n\n",
            solution: `function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        getCount: () => count
    };
}

function createMultiplier(factor) {
    return (number) => number * factor;
}`
        }
    ],
    dom: [
        {
            title: "DOM Manipulation",
            description: "Practice manipulating the DOM",
            initialCode: "// 1. Create a new div element\n// 2. Add a class to it\n// 3. Set its text content\n// 4. Append it to the body\n\n",
            solution: `const newDiv = document.createElement('div');
newDiv.className = 'custom-div';
newDiv.textContent = 'Hello World';
document.body.appendChild(newDiv);`
        },
        {
            title: "Event Handling",
            description: "Practice working with events",
            initialCode: "// 1. Add a click event listener to a button\n// 2. Prevent default form submission\n// 3. Use event delegation\n\n",
            solution: `const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('Button clicked!');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted!');
});`
        }
    ],
    animations: [
        {
            title: "CSS Animations",
            description: "Practice creating CSS animations with JavaScript",
            initialCode: "// 1. Add a class to trigger animation\n// 2. Use setTimeout to remove the class\n// 3. Listen for animation end\n\n",
            solution: `const element = document.querySelector('.animate');
element.classList.add('fade-in');

setTimeout(() => {
    element.classList.remove('fade-in');
}, 2000);

element.addEventListener('animationend', () => {
    console.log('Animation finished!');
});`
        },
        {
            title: "JavaScript Animations",
            description: "Practice creating animations with JavaScript",
            initialCode: "// 1. Create a simple animation using requestAnimationFrame\n// 2. Animate an element's position\n\n",
            solution: `function animate(element) {
    let position = 0;
    
    function step() {
        position += 2;
        element.style.transform = \`translateX(\${position}px)\`;
        
        if (position < 300) {
            requestAnimationFrame(step);
        }
    }
    
    requestAnimationFrame(step);
}`
        }
    ]
};

let currentCategory = 'fundamentals';
let currentExerciseIndex = 0;

// Initialize code editor
function initializeCodeEditor() {
    const codeInput = document.getElementById('code-input');
    const codeOutput = document.getElementById('code-output');
    const runButton = document.querySelector('.run-button');
    
    if (!codeInput || !codeOutput || !runButton) return;

    // Create exercise selector
    createExerciseSelector();

    // Load initial exercise
    loadExercise(currentCategory, currentExerciseIndex);

    // Run code button click handler
    runButton.addEventListener('click', () => {
        try {
            // Create a safe environment for code execution
            const code = codeInput.value;
            const output = [];
            
            // Override console.log
            const originalLog = console.log;
            console.log = (...args) => {
                output.push(args.join(' '));
            };

            // Execute code
            eval(code);

            // Restore console.log
            console.log = originalLog;

            // Display output
            codeOutput.innerHTML = output.join('<br>');
            codeOutput.classList.remove('error');
            codeOutput.classList.add('success');
        } catch (error) {
            codeOutput.innerHTML = `Error: ${error.message}`;
            codeOutput.classList.remove('success');
            codeOutput.classList.add('error');
        }
    });
}

// Create exercise selector
function createExerciseSelector() {
    const practiceSection = document.querySelector('.practice-grid');
    const selectorContainer = document.createElement('div');
    selectorContainer.className = 'exercise-selector';
    
    // Create category selector
    const categorySelect = document.createElement('select');
    categorySelect.className = 'category-select';
    Object.keys(practiceExercises).forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categorySelect.appendChild(option);
    });

    // Create exercise description
    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'exercise-description';

    // Add navigation buttons
    const navButtons = document.createElement('div');
    navButtons.className = 'exercise-nav';
    navButtons.innerHTML = `
        <button class="prev-exercise" disabled>Previous</button>
        <button class="next-exercise">Next</button>
    `;

    selectorContainer.appendChild(categorySelect);
    selectorContainer.appendChild(descriptionDiv);
    selectorContainer.appendChild(navButtons);
    practiceSection.insertBefore(selectorContainer, practiceSection.firstChild);

    // Event listeners
    categorySelect.addEventListener('change', (e) => {
        currentCategory = e.target.value;
        currentExerciseIndex = 0;
        loadExercise(currentCategory, currentExerciseIndex);
    });

    navButtons.querySelector('.prev-exercise').addEventListener('click', () => {
        if (currentExerciseIndex > 0) {
            currentExerciseIndex--;
            loadExercise(currentCategory, currentExerciseIndex);
        }
    });

    navButtons.querySelector('.next-exercise').addEventListener('click', () => {
        if (currentExerciseIndex < practiceExercises[currentCategory].length - 1) {
            currentExerciseIndex++;
            loadExercise(currentCategory, currentExerciseIndex);
        }
    });
}

// Load exercise into code editor
function loadExercise(category, index) {
    const exercise = practiceExercises[category][index];
    const codeInput = document.getElementById('code-input');
    const descriptionDiv = document.querySelector('.exercise-description');
    const prevButton = document.querySelector('.prev-exercise');
    const nextButton = document.querySelector('.next-exercise');
    
    if (codeInput && exercise) {
        codeInput.value = exercise.initialCode;
        descriptionDiv.innerHTML = `
            <h3>${exercise.title}</h3>
            <p>${exercise.description}</p>
        `;

        // Update navigation buttons
        prevButton.disabled = index === 0;
        nextButton.disabled = index === practiceExercises[category].length - 1;
    }
}

// Initialize practice functionality
document.addEventListener('DOMContentLoaded', () => {
    initializeCodeEditor();
}); 