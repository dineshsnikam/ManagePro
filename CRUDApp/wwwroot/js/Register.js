function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Toast show function
function showSuccessToast() {
    var toastEl = document.getElementById('successToast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();

    // Auto hide after 4 seconds
    setTimeout(() => toast.hide(), 4000);
}

// Handle form submission
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission

    // Optional: Validate input fields here
    let name = document.getElementById('Name').value;
    let email = document.getElementById('Email').value;
    let password = document.getElementById('Password').value;

    if (name && email && password) {
        showSuccessToast();

        // Optional: Reset form fields
        document.getElementById('registerForm').reset();
    }
});