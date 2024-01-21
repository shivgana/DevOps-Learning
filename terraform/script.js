const menuItems = [
    { id: 'types', label: 'Data Types', file: 'types.html'},
    { id: 'functions', label: "Functions", file: 'functions.html' },
    { id: 'backend', label: "Backend", file: 'backend.html' },
    { id: 'blocks', label: "Blocks", file: 'blocks.html' },
    { id: 'configuration', label: "Configuration", file: 'configuration.html' }
];

// Function to load menu dynamically
function loadMenu() {
    const menuList = document.getElementById('menuList');

    menuItems.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item.label;
        div.addEventListener('click', () => loadContent(item));
        menuList.appendChild(div);
    });
}

// Function to load content dynamically
function loadContent(item) {
    const contentContainer = document.getElementById('content');
    fetch(item.file)
        .then(response => response.text())
        .then(html => {
            contentContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
}

// Initial load
loadMenu();