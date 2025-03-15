// Curriculum data with learning path
const curriculumData = {
    weeks: [
        {
            week: 1,
            title: "JavaScript Fundamentals",
            character: {
                name: "Sakura",
                image: "https://i.imgur.com/WvXwkHE.png",
                role: "Fundamentals Guide"
            },
            topics: [
                {
                    title: "Variables and Data Types",
                    subtopics: [
                        "var, let, and const declarations",
                        "Numbers, Strings, Booleans",
                        "Arrays and Objects",
                        "null and undefined"
                    ]
                },
                {
                    title: "Operators and Control Flow",
                    subtopics: [
                        "Arithmetic and Comparison Operators",
                        "if/else statements",
                        "switch statements",
                        "Loops (for, while)"
                    ]
                }
            ]
        },
        {
            week: 2,
            title: "Functions and Scope",
            character: {
                name: "Naruto",
                image: "https://i.imgur.com/XyN8MTB.png",
                role: "Function Master"
            },
            topics: [
                {
                    title: "Function Basics",
                    subtopics: [
                        "Function Declaration vs Expression",
                        "Arrow Functions",
                        "Parameters and Return Values",
                        "Default Parameters"
                    ]
                },
                {
                    title: "Scope and Closure",
                    subtopics: [
                        "Global and Local Scope",
                        "Lexical Scope",
                        "Closures",
                        "this keyword"
                    ]
                }
            ]
        },
        {
            week: 3,
            title: "Arrays and Objects",
            character: {
                name: "Sasuke",
                image: "https://i.imgur.com/L7YrCQt.png",
                role: "Data Structure Ninja"
            },
            topics: [
                {
                    title: "Array Methods",
                    subtopics: [
                        "map, filter, reduce",
                        "forEach, find, some, every",
                        "push, pop, shift, unshift",
                        "slice, splice, concat"
                    ]
                },
                {
                    title: "Object Methods",
                    subtopics: [
                        "Object.keys(), values(), entries()",
                        "Object Destructuring",
                        "Spread Operator",
                        "Object Property Shorthand"
                    ]
                }
            ]
        },
        {
            week: 4,
            title: "DOM Manipulation",
            character: {
                name: "Hinata",
                image: "https://i.imgur.com/9KjCWJF.png",
                role: "DOM Explorer"
            },
            topics: [
                {
                    title: "DOM Basics",
                    subtopics: [
                        "Selecting Elements",
                        "Creating and Modifying Elements",
                        "Event Handling",
                        "Event Delegation"
                    ]
                },
                {
                    title: "DOM Projects",
                    subtopics: [
                        "Todo List Application",
                        "Form Validation",
                        "Dynamic Content Loading",
                        "Interactive Navigation"
                    ]
                }
            ]
        },
        {
            week: 5,
            title: "Asynchronous JavaScript",
            character: {
                name: "Kakashi",
                image: "https://i.imgur.com/H5R3xlF.png",
                role: "Async Sensei"
            },
            topics: [
                {
                    title: "Promises and Async/Await",
                    subtopics: [
                        "Promise Creation and Chaining",
                        "Error Handling with try/catch",
                        "async/await Syntax",
                        "Promise.all and Promise.race"
                    ]
                },
                {
                    title: "API Integration",
                    subtopics: [
                        "Fetch API",
                        "HTTP Methods",
                        "RESTful APIs",
                        "JSON Data Handling"
                    ]
                }
            ]
        },
        {
            week: 6,
            title: "Modern JavaScript Features",
            character: {
                name: "Itachi",
                image: "https://i.imgur.com/K8YQxM2.png",
                role: "Modern JS Master"
            },
            topics: [
                {
                    title: "ES6+ Features",
                    subtopics: [
                        "Template Literals",
                        "Destructuring Assignment",
                        "Rest and Spread Operators",
                        "Optional Chaining"
                    ]
                },
                {
                    title: "Modules and Classes",
                    subtopics: [
                        "Import/Export Syntax",
                        "Class Declaration and Methods",
                        "Inheritance",
                        "Static Methods"
                    ]
                }
            ]
        },
        {
            week: 7,
            title: "Error Handling and Debugging",
            character: {
                name: "Shikamaru",
                image: "https://i.imgur.com/R2PN9Wq.png",
                role: "Debug Strategist"
            },
            topics: [
                {
                    title: "Error Handling",
                    subtopics: [
                        "try/catch Blocks",
                        "Custom Error Classes",
                        "Error Types",
                        "Debugging Techniques"
                    ]
                },
                {
                    title: "Testing",
                    subtopics: [
                        "Unit Testing Basics",
                        "Test-Driven Development",
                        "Testing Libraries",
                        "Code Coverage"
                    ]
                }
            ]
        },
        {
            week: 8,
            title: "Browser APIs and Storage",
            character: {
                name: "Gaara",
                image: "https://i.imgur.com/T8QqFPJ.png",
                role: "Storage Guardian"
            },
            topics: [
                {
                    title: "Browser APIs",
                    subtopics: [
                        "localStorage and sessionStorage",
                        "Geolocation API",
                        "Canvas API",
                        "Web Workers"
                    ]
                },
                {
                    title: "Data Persistence",
                    subtopics: [
                        "Cookies Management",
                        "IndexedDB",
                        "Cache API",
                        "File System API"
                    ]
                }
            ]
        },
        {
            week: 9,
            title: "Performance and Optimization",
            character: {
                name: "Rock Lee",
                image: "https://i.imgur.com/ZYW3VX7.png",
                role: "Performance Expert"
            },
            topics: [
                {
                    title: "Code Optimization",
                    subtopics: [
                        "Memory Management",
                        "Event Loop Understanding",
                        "Debouncing and Throttling",
                        "Code Splitting"
                    ]
                },
                {
                    title: "Performance Tools",
                    subtopics: [
                        "Chrome DevTools",
                        "Performance Metrics",
                        "Lighthouse Audits",
                        "Bundle Analysis"
                    ]
                }
            ]
        },
        {
            week: 10,
            title: "Animations and Graphics",
            character: {
                name: "Deidara",
                image: "https://i.imgur.com/L9WPp3N.png",
                role: "Animation Artist"
            },
            topics: [
                {
                    title: "CSS Animations",
                    subtopics: [
                        "Keyframe Animations",
                        "Transitions",
                        "Transform Properties",
                        "Animation Events"
                    ]
                },
                {
                    title: "JavaScript Animations",
                    subtopics: [
                        "requestAnimationFrame",
                        "GSAP Library",
                        "SVG Animations",
                        "Canvas Animations"
                    ]
                }
            ]
        },
        {
            week: 11,
            title: "Security and Best Practices",
            character: {
                name: "Tsunade",
                image: "https://i.imgur.com/P8KxXv4.png",
                role: "Security Expert"
            },
            topics: [
                {
                    title: "Security Concepts",
                    subtopics: [
                        "XSS Prevention",
                        "CSRF Protection",
                        "Content Security Policy",
                        "Input Validation"
                    ]
                },
                {
                    title: "Best Practices",
                    subtopics: [
                        "Code Organization",
                        "Design Patterns",
                        "Clean Code Principles",
                        "Documentation"
                    ]
                }
            ]
        },
        {
            week: 12,
            title: "Final Projects and Review",
            character: {
                name: "Jiraiya",
                image: "https://i.imgur.com/M8YW9vK.png",
                role: "Project Mentor"
            },
            topics: [
                {
                    title: "Project Development",
                    subtopics: [
                        "Project Planning",
                        "Implementation",
                        "Testing and Debugging",
                        "Deployment"
                    ]
                },
                {
                    title: "Course Review",
                    subtopics: [
                        "Core Concepts Review",
                        "Advanced Topics Review",
                        "Best Practices Review",
                        "Next Steps"
                    ]
                }
            ]
        }
    ],
    resources: [
        {
            name: "MDN Web Docs",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            icon: "fas fa-book"
        },
        {
            name: "JavaScript.info",
            url: "https://javascript.info/",
            icon: "fas fa-info-circle"
        },
        {
            name: "GSAP Documentation",
            url: "https://greensock.com/docs/",
            icon: "fas fa-code"
        },
        {
            name: "Codepen",
            url: "https://codepen.io/",
            icon: "fab fa-codepen"
        }
    ],
    dailySchedule: {
        morning: {
            title: "Morning (1 hour)",
            activities: [
                "Study theory and concepts",
                "Read documentation",
                "Watch tutorials"
            ]
        },
        afternoon: {
            title: "Afternoon (2 hours)",
            activities: [
                "Practice coding",
                "Complete exercises",
                "Work on small projects"
            ]
        },
        evening: {
            title: "Evening (1 hour)",
            activities: [
                "Review what you learned",
                "Experiment with code",
                "Plan next day's learning"
            ]
        }
    },
    importantMethods: {
        array: [
            "push(), pop()",
            "shift(), unshift()",
            "map(), filter(), reduce()",
            "forEach()",
            "slice(), splice()",
            "indexOf(), includes()"
        ],
        string: [
            "charAt()",
            "substring()",
            "split()",
            "toLowerCase(), toUpperCase()",
            "trim()",
            "replace()"
        ],
        math: [
            "Math.random()",
            "Math.floor()",
            "Math.ceil()",
            "Math.round()",
            "Math.max()",
            "Math.min()"
        ],
        animation: [
            "transform",
            "opacity",
            "position",
            "transition",
            "animation",
            "timing-function"
        ]
    }
};

// Initialize timeline
function initializeTimeline() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    curriculumData.weeks.forEach((week, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${index % 2 === 1 ? 'right' : ''}`;
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-header">
                    <img src="${week.character.image}" alt="${week.character.name}" class="timeline-character">
                    <div>
                        <h3>Week ${week.week}: ${week.title}</h3>
                        <span class="character-name">Guide: ${week.character.name} - ${week.character.role}</span>
                    </div>
                </div>
                ${week.topics.map(topic => `
                    <div class="topic">
                        <h4>${topic.title}</h4>
                        <ul>
                            ${topic.subtopics.map(subtopic => `
                                <li>${subtopic}</li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });

    // Add animation on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.2 });

    timelineItems.forEach(item => observer.observe(item));
}

// Render Resources
function renderResources() {
    const resourceGrid = document.querySelector('.resource-grid');
    if (!resourceGrid) return;

    resourceGrid.innerHTML = curriculumData.resources.map(resource => `
        <div class="resource-card animate-on-scroll">
            <i class="${resource.icon}"></i>
            <h3>${resource.name}</h3>
            <a href="${resource.url}" target="_blank" rel="noopener noreferrer">Visit Resource</a>
        </div>
    `).join('');
}

// Render Daily Schedule
function renderDailySchedule() {
    const dashboard = document.querySelector('.dashboard .progress-grid');
    if (!dashboard) return;

    const scheduleHTML = Object.values(curriculumData.dailySchedule).map(schedule => `
        <div class="schedule-card animate-on-scroll">
            <h3>${schedule.title}</h3>
            <ul>
                ${schedule.activities.map(activity => `<li>${activity}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    // Append schedule cards after progress cards
    dashboard.insertAdjacentHTML('beforeend', scheduleHTML);
}

// Render Important Methods
function renderImportantMethods() {
    const methodsSection = document.createElement('section');
    methodsSection.className = 'important-methods';
    methodsSection.innerHTML = `
        <h2 class="section-title">Important Methods to Master</h2>
        <div class="methods-grid">
            ${Object.entries(curriculumData.importantMethods).map(([category, methods]) => `
                <div class="methods-card animate-on-scroll">
                    <h3>${category.charAt(0).toUpperCase() + category.slice(1)} Methods</h3>
                    <ul>
                        ${methods.map(method => `<li>${method}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
    `;

    // Insert after curriculum section
    const curriculumSection = document.querySelector('.curriculum');
    if (curriculumSection) {
        curriculumSection.parentNode.insertBefore(methodsSection, curriculumSection.nextSibling);
    }
}

// Initialize curriculum when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeTimeline();
    renderResources();
    renderDailySchedule();
    renderImportantMethods();
}); 