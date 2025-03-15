// Project data and functionality
const projectsModule = (() => {
    // Project templates for quick start
    const projectTemplates = {
        'web': {
            name: 'Simple Web App',
            description: 'A basic web application with HTML, CSS and JavaScript',
            files: {
                'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="app">
        <h1>Hello, World!</h1>
        <p>Welcome to my web application</p>
    </div>
    <script src="app.js"></script>
</body>
</html>`,
                'styles.css': `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    padding: 20px;
}

#app {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

h1 {
    color: #333;
    margin-bottom: 10px;
}

p {
    margin-bottom: 20px;
}`,
                'app.js': `// JavaScript for the web application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Application loaded!');
    
    // Add your JavaScript code here
});`
            }
        },
        'game': {
            name: 'Simple Game',
            description: 'A basic canvas-based game template',
            files: {
                'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Game</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="game-container">
        <h1>My Game</h1>
        <canvas id="gameCanvas" width="800" height="600"></canvas>
    </div>
    <script src="game.js"></script>
</body>
</html>`,
                'styles.css': `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #222;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.game-container {
    text-align: center;
}

h1 {
    margin-bottom: 20px;
}

canvas {
    background-color: #000;
    border: 2px solid #444;
}`,
                'game.js': `// Game initialization
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game variables
let player = {
    x: canvas.width/2,
    y: canvas.height-30,
    width: 50,
    height: 50,
    color: '#00f',
    speed: 5
};

// Game loop
function gameLoop() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw player
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    
    // Request next frame
    requestAnimationFrame(gameLoop);
}

// Keyboard controls
window.addEventListener('keydown', function(e) {
    switch(e.key) {
        case 'ArrowLeft':
            player.x -= player.speed;
            if (player.x < 0) player.x = 0;
            break;
        case 'ArrowRight':
            player.x += player.speed;
            if (player.x > canvas.width - player.width) player.x = canvas.width - player.width;
            break;
    }
});

// Start the game
gameLoop();`
            }
        },
        'api': {
            name: 'API Integration',
            description: 'Project template for working with APIs',
            files: {
                'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Integration</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>API Integration Example</h1>
        <div class="search-container">
            <input type="text" id="searchInput" placeholder="Search...">
            <button id="searchBtn">Search</button>
        </div>
        <div id="results-container"></div>
    </div>
    <script src="api.js"></script>
</body>
</html>`,
                'styles.css': `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    padding: 20px;
    background-color: #f5f5f5;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

h1 {
    margin-bottom: 20px;
    text-align: center;
}

.search-container {
    display: flex;
    margin-bottom: 20px;
}

input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px 0 0 4px;
}

button {
    padding: 10px 15px;
    background-color: #4285f4;
    color: white;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
}

button:hover {
    background-color: #357ae8;
}

.result-item {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 4px;
}

.result-item h3 {
    margin-bottom: 10px;
    color: #4285f4;
}`,
                'api.js': `// API Integration
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const resultsContainer = document.getElementById('results-container');
    
    // API endpoint to use
    const API_URL = 'https://jsonplaceholder.typicode.com/posts';
    
    // Search button event listener
    searchBtn.addEventListener('click', () => {
        fetchData();
    });
    
    // Also trigger search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            fetchData();
        }
    });
    
    // Fetch data from API
    function fetchData() {
        const searchTerm = searchInput.value.toLowerCase();
        resultsContainer.innerHTML = '<p>Loading...</p>';
        
        fetch(API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                displayResults(data, searchTerm);
            })
            .catch(error => {
                resultsContainer.innerHTML = \`<p class="error">Error: \${error.message}</p>\`;
            });
    }
    
    // Display results in the container
    function displayResults(data, searchTerm) {
        // Filter results based on search term
        const filteredData = data.filter(item => 
            item.title.toLowerCase().includes(searchTerm) || 
            item.body.toLowerCase().includes(searchTerm) ||
            searchTerm === ''
        );
        
        if (filteredData.length === 0) {
            resultsContainer.innerHTML = '<p>No results found.</p>';
            return;
        }
        
        // Create HTML for results
        let html = '';
        filteredData.slice(0, 10).forEach(item => {
            html += \`
                <div class="result-item">
                    <h3>\${item.title}</h3>
                    <p>\${item.body}</p>
                </div>
            \`;
        });
        
        resultsContainer.innerHTML = html;
    }
});`
            }
        }
    };

    // Local storage key for projects
    const STORAGE_KEY = 'js_learning_projects';

    // Get projects from local storage
    const getProjects = () => {
        const projects = localStorage.getItem(STORAGE_KEY);
        return projects ? JSON.parse(projects) : [];
    };

    // Save projects to local storage
    const saveProjects = (projects) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    };

    // Create a new project
    const createProject = (projectData) => {
        const projects = getProjects();
        const newProject = {
            id: Date.now().toString(),
            name: projectData.name,
            description: projectData.description,
            type: projectData.type,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            status: 'in-progress',
            files: {}
        };

        // If using a template, copy template files
        if (projectData.useTemplate && projectTemplates[projectData.type]) {
            newProject.files = { ...projectTemplates[projectData.type].files };
        }

        projects.push(newProject);
        saveProjects(projects);
        return newProject;
    };

    // Update an existing project
    const updateProject = (projectId, updatedData) => {
        const projects = getProjects();
        const projectIndex = projects.findIndex(p => p.id === projectId);
        
        if (projectIndex === -1) return null;
        
        const updatedProject = {
            ...projects[projectIndex],
            ...updatedData,
            updatedAt: new Date().toISOString()
        };
        
        projects[projectIndex] = updatedProject;
        saveProjects(projects);
        return updatedProject;
    };

    // Delete a project
    const deleteProject = (projectId) => {
        const projects = getProjects();
        const filteredProjects = projects.filter(p => p.id !== projectId);
        saveProjects(filteredProjects);
    };

    // Get a project by ID
    const getProjectById = (projectId) => {
        const projects = getProjects();
        return projects.find(p => p.id === projectId);
    };

    // Filter projects by criteria
    const filterProjects = (criteria) => {
        const projects = getProjects();
        
        if (criteria === 'all') return projects;
        
        if (criteria === 'recent') {
            return [...projects].sort((a, b) => 
                new Date(b.updatedAt) - new Date(a.updatedAt)
            );
        }
        
        return projects.filter(p => p.status === criteria);
    };

    // Update a file in a project
    const updateProjectFile = (projectId, filename, content) => {
        const project = getProjectById(projectId);
        if (!project) return null;
        
        project.files[filename] = content;
        project.updatedAt = new Date().toISOString();
        
        updateProject(projectId, project);
        return project;
    };

    // Delete a file from a project
    const deleteProjectFile = (projectId, filename) => {
        const project = getProjectById(projectId);
        if (!project || !project.files[filename]) return null;
        
        delete project.files[filename];
        project.updatedAt = new Date().toISOString();
        
        updateProject(projectId, project);
        return project;
    };

    // Run a project (this would normally execute code in a sandbox)
    const runProject = (projectId) => {
        const project = getProjectById(projectId);
        if (!project) return null;
        
        // For now, just return the files to display
        return project.files;
    };

    return {
        getProjects,
        createProject,
        updateProject,
        deleteProject,
        getProjectById,
        filterProjects,
        updateProjectFile,
        deleteProjectFile,
        runProject,
        projectTemplates
    };
})();

// UI Controller for projects
const projectsUI = (() => {
    // DOM elements
    const projectsGrid = document.querySelector('.projects-grid');
    const createProjectBtn = document.getElementById('create-project-btn');
    const projectModal = document.getElementById('project-modal');
    const projectDetailsModal = document.getElementById('project-details-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const closeDetailsModalBtn = document.querySelector('.close-details-modal');
    const projectForm = document.getElementById('project-form');
    const projectFilter = document.getElementById('project-filter');
    
    // Initialize the projects UI
    const initialize = () => {
        if (!projectsGrid) return;
        
        // Load and display projects
        displayProjects();
        
        // Setup event listeners
        setupEventListeners();
    };
    
    // Set up all event listeners
    const setupEventListeners = () => {
        // Create project button
        if (createProjectBtn) {
            createProjectBtn.addEventListener('click', openCreateProjectModal);
        }
        
        // Close modal buttons
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', closeProjectModal);
        }
        
        if (closeDetailsModalBtn) {
            closeDetailsModalBtn.addEventListener('click', closeDetailsModal);
        }
        
        // Cancel button in form
        const cancelBtn = document.getElementById('cancel-project');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', closeProjectModal);
        }
        
        // Project form submission
        if (projectForm) {
            projectForm.addEventListener('submit', handleProjectFormSubmit);
        }
        
        // Project filter change
        if (projectFilter) {
            projectFilter.addEventListener('change', () => {
                displayProjects(projectFilter.value);
            });
        }
        
        // Close modals when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                closeProjectModal();
            }
            if (e.target === projectDetailsModal) {
                closeDetailsModal();
            }
        });
        
        // Listen for keyboard events (Esc to close modals)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeProjectModal();
                closeDetailsModal();
            }
        });
    };
    
    // Display projects in the grid
    const displayProjects = (filter = 'all') => {
        if (!projectsGrid) return;
        
        const projects = projectsModule.filterProjects(filter);
        
        // Clear the grid
        projectsGrid.innerHTML = '';
        
        if (projects.length === 0) {
            // Show empty state
            projectsGrid.innerHTML = `
                <div class="empty-projects">
                    <i class="fas fa-project-diagram"></i>
                    <h3>No Projects Yet</h3>
                    <p>Get started by creating your first JavaScript project</p>
                    <button class="start-project-btn">Create Your First Project</button>
                </div>
            `;
            
            // Add event listener to the start project button
            const startBtn = projectsGrid.querySelector('.start-project-btn');
            if (startBtn) {
                startBtn.addEventListener('click', openCreateProjectModal);
            }
            
            return;
        }
        
        // Create project cards
        projects.forEach(project => {
            const card = createProjectCard(project);
            projectsGrid.appendChild(card);
        });
    };
    
    // Create a project card DOM element
    const createProjectCard = (project) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.id = project.id;
        
        card.innerHTML = `
            <h3>${project.name}</h3>
            <div class="project-type">${project.type}</div>
            <p class="project-description">${project.description || 'No description provided'}</p>
            <div class="project-meta">
                <div class="project-status">
                    <span class="status-dot ${project.status}"></span>
                    <span>${project.status === 'completed' ? 'Completed' : 'In Progress'}</span>
                </div>
                <div class="project-date">Updated: ${formatDate(project.updatedAt)}</div>
            </div>
            <div class="project-actions">
                <button class="project-action-btn edit-btn" data-id="${project.id}">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="project-action-btn delete-btn" data-id="${project.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        // Add click event to view project details
        card.addEventListener('click', (e) => {
            // Don't open details if clicking on action buttons
            if (!e.target.closest('.project-actions')) {
                openProjectDetails(project.id);
            }
        });
        
        // Add event listeners for action buttons
        const editBtn = card.querySelector('.edit-btn');
        const deleteBtn = card.querySelector('.delete-btn');
        
        if (editBtn) {
            editBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openEditProjectModal(project.id);
            });
        }
        
        if (deleteBtn) {
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                confirmDeleteProject(project.id);
            });
        }
        
        return card;
    };
    
    // Open the create project modal
    const openCreateProjectModal = () => {
        if (!projectModal) return;
        
        // Reset form
        if (projectForm) {
            projectForm.reset();
        }
        
        // Set modal title
        const modalTitle = document.getElementById('modal-title');
        if (modalTitle) {
            modalTitle.textContent = 'Create New Project';
        }
        
        // Check if we want to show template options
        const projectType = document.getElementById('project-type');
        if (projectType) {
            // Add or show template option checkbox
            if (!document.getElementById('use-template-container')) {
                const typeGroup = projectType.closest('.form-group');
                const templateContainer = document.createElement('div');
                templateContainer.id = 'use-template-container';
                templateContainer.className = 'form-group checkbox-group';
                templateContainer.innerHTML = `
                    <label class="checkbox-label">
                        <input type="checkbox" id="use-template" checked>
                        Use template for this project type
                    </label>
                    <div id="template-preview" class="template-preview"></div>
                `;
                
                if (typeGroup && typeGroup.nextElementSibling) {
                    typeGroup.parentNode.insertBefore(templateContainer, typeGroup.nextElementSibling);
                    
                    // Update template preview when type changes
                    projectType.addEventListener('change', updateTemplatePreview);
                    
                    // Initialize template preview
                    updateTemplatePreview();
                }
            }
        }
        
        // Show modal with animation
        projectModal.style.display = 'block';
        setTimeout(() => {
            projectModal.classList.add('active');
        }, 10);
    };
    
    // Update template preview based on selected type
    const updateTemplatePreview = () => {
        const projectType = document.getElementById('project-type');
        const templatePreview = document.getElementById('template-preview');
        const useTemplate = document.getElementById('use-template');
        
        if (!projectType || !templatePreview || !useTemplate) return;
        
        const selectedType = projectType.value;
        const template = projectsModule.projectTemplates[selectedType];
        
        if (template && useTemplate.checked) {
            templatePreview.innerHTML = `
                <h4>${template.name}</h4>
                <p>${template.description}</p>
                <div class="template-files">
                    <strong>Includes:</strong>
                    ${Object.keys(template.files).map(filename => 
                        `<span class="template-file">${filename}</span>`
                    ).join('')}
                </div>
            `;
            templatePreview.style.display = 'block';
        } else {
            templatePreview.style.display = 'none';
        }
        
        useTemplate.addEventListener('change', updateTemplatePreview);
    };
    
    // Open the edit project modal
    const openEditProjectModal = (projectId) => {
        if (!projectModal || !projectForm) return;
        
        const project = projectsModule.getProjectById(projectId);
        if (!project) return;
        
        // Set form fields
        const nameInput = document.getElementById('project-name');
        const descriptionInput = document.getElementById('project-description');
        const typeSelect = document.getElementById('project-type');
        
        if (nameInput) nameInput.value = project.name;
        if (descriptionInput) descriptionInput.value = project.description || '';
        if (typeSelect) typeSelect.value = project.type;
        
        // Remove template option for editing
        const templateContainer = document.getElementById('use-template-container');
        if (templateContainer) {
            templateContainer.style.display = 'none';
        }
        
        // Set modal title
        const modalTitle = document.getElementById('modal-title');
        if (modalTitle) {
            modalTitle.textContent = 'Edit Project';
        }
        
        // Add project ID to form
        projectForm.dataset.projectId = projectId;
        
        // Show modal with animation
        projectModal.style.display = 'block';
        setTimeout(() => {
            projectModal.classList.add('active');
        }, 10);
    };
    
    // Open project details
    const openProjectDetails = (projectId) => {
        if (!projectDetailsModal) return;
        
        const project = projectsModule.getProjectById(projectId);
        if (!project) return;
        
        const detailsContainer = document.getElementById('project-details-container');
        if (!detailsContainer) return;
        
        // Populate project details
        detailsContainer.innerHTML = `
            <div class="project-details-header">
                <h2>${project.name}</h2>
                <div class="project-details-type">${project.type}</div>
                <div class="project-details-meta">
                    <div class="project-details-status">
                        <span class="status-dot ${project.status}"></span>
                        <span>${project.status === 'completed' ? 'Completed' : 'In Progress'}</span>
                    </div>
                    <div class="project-details-date">Last updated: ${formatDate(project.updatedAt)}</div>
                </div>
            </div>
            
            <div class="project-details-description">
                ${project.description || 'No description provided'}
            </div>
            
            <div class="project-details-content-editor">
                <div class="editor-tabs">
                    ${Object.keys(project.files).map((filename, index) => `
                        <div class="editor-tab ${index === 0 ? 'active' : ''}" data-file="${filename}">
                            ${filename}
                        </div>
                    `).join('')}
                    <div class="editor-tab add-file-tab">+ Add File</div>
                </div>
                <div class="editor-content">
                    ${Object.keys(project.files).length > 0 ? `
                        <textarea class="code-area" id="code-editor" data-file="${Object.keys(project.files)[0]}">${project.files[Object.keys(project.files)[0]]}</textarea>
                    ` : `
                        <div class="empty-editor">
                            <p>No files in this project. Click "Add File" to create one.</p>
                        </div>
                    `}
                </div>
            </div>
            
            <div class="project-details-actions">
                <div class="project-status-toggle">
                    <label>
                        <input type="checkbox" id="project-status-toggle" ${project.status === 'completed' ? 'checked' : ''}>
                        Mark as Completed
                    </label>
                </div>
                <div class="action-buttons">
                    <button class="action-btn secondary" id="run-project-btn">
                        <i class="fas fa-play"></i> Run Project
                    </button>
                    <button class="action-btn primary" id="save-project-changes">
                        <i class="fas fa-save"></i> Save Changes
                    </button>
                </div>
            </div>
        `;
        
        // Add event listeners for tabs
        const tabs = detailsContainer.querySelectorAll('.editor-tab');
        tabs.forEach(tab => {
            if (tab.classList.contains('add-file-tab')) {
                tab.addEventListener('click', () => addNewFile(projectId));
            } else {
                tab.addEventListener('click', () => switchFile(tab, project));
            }
        });
        
        // Add event listener for status toggle
        const statusToggle = detailsContainer.querySelector('#project-status-toggle');
        if (statusToggle) {
            statusToggle.addEventListener('change', () => {
                const newStatus = statusToggle.checked ? 'completed' : 'in-progress';
                projectsModule.updateProject(projectId, { status: newStatus });
            });
        }
        
        // Add event listener for save button
        const saveBtn = detailsContainer.querySelector('#save-project-changes');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => saveProjectChanges(projectId));
        }
        
        // Add event listener for run button
        const runBtn = detailsContainer.querySelector('#run-project-btn');
        if (runBtn) {
            runBtn.addEventListener('click', () => runProject(projectId));
        }
        
        // Show modal with animation
        projectDetailsModal.style.display = 'block';
        setTimeout(() => {
            projectDetailsModal.classList.add('active');
        }, 10);
    };
    
    // Switch between files in the editor
    const switchFile = (tab, project) => {
        const filename = tab.dataset.file;
        const codeEditor = document.getElementById('code-editor');
        const tabs = document.querySelectorAll('.editor-tab');
        
        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Update editor content
        if (codeEditor) {
            codeEditor.value = project.files[filename];
            codeEditor.dataset.file = filename;
        }
    };
    
    // Add a new file to the project
    const addNewFile = (projectId) => {
        const filename = prompt('Enter filename (e.g. script.js):');
        if (!filename) return;
        
        const project = projectsModule.getProjectById(projectId);
        if (!project) return;
        
        // Check if file already exists
        if (project.files[filename]) {
            alert('A file with this name already exists.');
            return;
        }
        
        // Add empty file to project
        project.files[filename] = '';
        projectsModule.updateProject(projectId, { files: project.files });
        
        // Refresh project details view
        openProjectDetails(projectId);
    };
    
    // Save changes to the project
    const saveProjectChanges = (projectId) => {
        const codeEditor = document.getElementById('code-editor');
        if (!codeEditor) return;
        
        const filename = codeEditor.dataset.file;
        const content = codeEditor.value;
        
        projectsModule.updateProjectFile(projectId, filename, content);
        
        // Show save confirmation
        const saveBtn = document.getElementById('save-project-changes');
        if (saveBtn) {
            const originalText = saveBtn.innerHTML;
            saveBtn.innerHTML = '<i class="fas fa-check"></i> Saved!';
            saveBtn.classList.add('saved');
            
            setTimeout(() => {
                saveBtn.innerHTML = originalText;
                saveBtn.classList.remove('saved');
            }, 2000);
        }
    };
    
    // Run the project
    const runProject = (projectId) => {
        // In a real app, this would run the project in a sandbox
        alert('Project running functionality would be implemented here. In a real application, this would open a sandbox to run your code.');
    };
    
    // Close the project modal
    const closeProjectModal = () => {
        if (!projectModal) return;
        
        projectModal.classList.remove('active');
        setTimeout(() => {
            projectModal.style.display = 'none';
        }, 300);
        
        // Reset form
        if (projectForm) {
            projectForm.reset();
            delete projectForm.dataset.projectId;
        }
    };
    
    // Close the details modal
    const closeDetailsModal = () => {
        if (!projectDetailsModal) return;
        
        projectDetailsModal.classList.remove('active');
        setTimeout(() => {
            projectDetailsModal.style.display = 'none';
        }, 300);
    };
    
    // Handle project form submission
    const handleProjectFormSubmit = (e) => {
        e.preventDefault();
        
        const nameInput = document.getElementById('project-name');
        const descriptionInput = document.getElementById('project-description');
        const typeSelect = document.getElementById('project-type');
        const useTemplate = document.getElementById('use-template');
        
        if (!nameInput || !typeSelect) return;
        
        const projectData = {
            name: nameInput.value.trim(),
            description: descriptionInput ? descriptionInput.value.trim() : '',
            type: typeSelect.value,
            useTemplate: useTemplate ? useTemplate.checked : false
        };
        
        const projectId = projectForm.dataset.projectId;
        
        if (projectId) {
            // Update existing project
            projectsModule.updateProject(projectId, projectData);
        } else {
            // Create new project
            projectsModule.createProject(projectData);
        }
        
        // Close modal and refresh display
        closeProjectModal();
        displayProjects(projectFilter.value);
    };
    
    // Confirm and delete a project
    const confirmDeleteProject = (projectId) => {
        if (confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
            projectsModule.deleteProject(projectId);
            displayProjects(projectFilter.value);
        }
    };
    
    // Format date for display
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };
    
    return {
        initialize
    };
})();

// Initialize the projects module when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    projectsUI.initialize();
}); 