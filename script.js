const menuItems = [
    { id: 'containerization', label: "Containerization", file: 'containerization.html' },
    { id: 'orchestration', label: "Orchestration", file: 'orchestration.html' },
    { id: 'infrastructure-as-code', label: "Infrastructure as Code", file: 'infrastructure-as-code.html' },
    { id: 'configuration-management', label: "Configuration Management", file: 'configuration-management.html' },
];

// Function to load menu dynamically
function loadMenu() {
    const menuList = document.getElementById('menuList');

    menuItems.forEach(item => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = item.label;
        link.addEventListener('click', () => loadContent(item));
        listItem.appendChild(link);
        menuList.appendChild(listItem);
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