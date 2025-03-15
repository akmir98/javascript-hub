// Character Data
const characters = [
    {
        name: "Syntax Sensei",
        role: "JavaScript Fundamentals Master",
        image: "https://i.imgur.com/XyN8MTB.png",
        description: "Master of core JavaScript concepts and syntax.",
        topics: ["Variables", "Data Types", "Operators", "Control Flow"]
    },
    {
        name: "Function Ninja",
        role: "Function Expert",
        image: "https://i.imgur.com/WvXwkHE.png",
        description: "Expert in JavaScript functions and scope.",
        topics: ["Functions", "Scope", "Closures", "Callbacks"]
    },
    {
        name: "DOM Warrior",
        role: "DOM Manipulation Specialist",
        image: "https://i.imgur.com/L8qXXHB.png",
        description: "Specialist in DOM manipulation and events.",
        topics: ["DOM Methods", "Event Handling", "Element Creation", "DOM Traversal"]
    },
    {
        name: "Animation Master",
        role: "Animation Expert",
        image: "https://i.imgur.com/P2ZXmXS.png",
        description: "Master of JavaScript animations and effects.",
        topics: ["CSS Animations", "JavaScript Animations", "Timing Functions", "Animation Libraries"]
    }
];

// Render Characters
function renderCharacters() {
    const characterGrid = document.querySelector('.character-grid');
    if (!characterGrid) return;

    characterGrid.innerHTML = characters.map(character => `
        <div class="character-card animate-on-scroll">
            <div class="character-image">
                <img src="${character.image}" alt="${character.name}">
            </div>
            <div class="character-info">
                <h3>${character.name}</h3>
                <h4>${character.role}</h4>
                <p>${character.description}</p>
                <div class="character-topics">
                    ${character.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize character display
document.addEventListener('DOMContentLoaded', () => {
    renderCharacters();
}); 