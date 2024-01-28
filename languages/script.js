const menuItems = [
    { id: 'python', label: 'Python', file: 'python.html'},
    { id: 'golang', label: 'Golang', file: 'golang.html' }
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