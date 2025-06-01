// Immediately apply dark mode if it was previously set
document.addEventListener('DOMContentLoaded', function () {
    // Check for saved dark mode preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeIcon').classList.remove('fa-moon');
        document.getElementById('darkModeIcon').classList.add('fa-sun');
        document.getElementById('darkModeText').textContent = 'Light Mode';
    }

    // Add loaded class to body to enable transitions
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 10);
});

// Mobile menu toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('show');
});

// Sidebar toggle (collapse/expand)
document.getElementById('toggleSidebar').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('mainContent');
    const footer = document.getElementById('footer');

    sidebar.classList.toggle('sidebar-collapsed');
    content.classList.toggle('content-expanded');
    footer.classList.toggle('footer-expanded');

    // Change icon
    const icon = this.querySelector('i');
    if (sidebar.classList.contains('sidebar-collapsed')) {
        icon.classList.remove('fa-chevron-left');
        icon.classList.add('fa-chevron-right');
    } else {
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-left');
    }
});

// Dark mode toggle
document.getElementById('darkModeToggle').addEventListener('click', function () {
    const body = document.body;
    const icon = document.getElementById('darkModeIcon');
    const text = document.getElementById('darkModeText');

    body.classList.toggle('dark-mode');

    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);

    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        text.textContent = 'Light Mode';
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        text.textContent = 'Dark Mode';
    }
});

// Highlight active menu item
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});