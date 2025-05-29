
        function filterTable(colIndex, filterValue) {
            var table = document.getElementById("productTable");
        var rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

        for (var i = 0; i < rows.length; i++) {
                var cell = rows[i].getElementsByTagName("td")[colIndex];
        if (cell) {
                    var txtValue = cell.textContent || cell.innerText;
                    if (txtValue.toLowerCase().indexOf(filterValue.toLowerCase()) > -1 || filterValue === "") {
            rows[i].style.display = "";
                    } else {
            rows[i].style.display = "none";
                    }
                }
            }
}

// dark-mode.js
document.addEventListener('DOMContentLoaded', function () {
    // Add 'loaded' class to body after page loads to enable transitions
    document.body.classList.add('loaded');

    // Check for saved preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        updateDarkModeIcon(true);
    }

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', function () {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        updateDarkModeIcon(isDarkMode);
    });

    function updateDarkModeIcon(isDarkMode) {
        const icon = document.getElementById('darkModeIcon');
        const text = document.getElementById('darkModeText');

        if (isDarkMode) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            text.textContent = 'Light Mode';
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            text.textContent = 'Dark Mode';
        }
    }
});

         
