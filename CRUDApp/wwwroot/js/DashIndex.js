// Product data array (replace with dynamic data from your controller/ViewData if needed)
const products = [
    { name: 'Laptop', price: 55000.00, stock: 10 },
    { name: 'Smartphone', price: 22000.50, stock: 25 },
    { name: 'Headphones', price: 1500.75, stock: 50 },
    { name: 'Keyboard', price: 699.00, stock: 30 },
    { name: 'Mouse', price: 499.00, stock: 40 },
    { name: 'Monitor', price: 12000.00, stock: 15 },
    { name: 'Webcam', price: 2500.00, stock: 20 },
    { name: 'Printer', price: 8000.00, stock: 12 },
    { name: 'USB Drive', price: 799.00, stock: 100 },
    { name: 'Router', price: 1999.00, stock: 18 }
];

const ctx = document.getElementById('categoryChart').getContext('2d');

const lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: products.map(p => p.name),
        datasets: [{
            label: 'Stock Quantity',
            data: products.map(p => p.stock),
            borderColor: '#4e73df',
            backgroundColor: 'rgba(78, 115, 223, 0.2)',
            fill: true,
            tension: 0.3,
            pointRadius: 5,
            pointHoverRadius: 7,
            pointBackgroundColor: '#4e73df',
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Stock Levels of Products'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Stock Quantity'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Products'
                }
            }
        }
    }
});

// SignalR real-time updates
const connection = new signalR.HubConnectionBuilder()
    .withUrl("/dashboardHub")
    .build();

connection.on("UpdateDashboard", function (data) {
    document.getElementById("totalProducts").textContent = data.totalProducts;
    document.getElementById("totalStock").textContent = data.totalStock;
    document.getElementById("totalValue").textContent = "₹" + data.totalValue;
    document.getElementById("lowStock").textContent = data.lowStock;
});

connection.start().catch(function (err) {
    console.error("SignalR error:", err.toString());
});