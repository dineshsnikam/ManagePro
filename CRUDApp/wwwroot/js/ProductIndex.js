// Filter table function
function filterTable(columnIndex, value) {
    const table = document.getElementById('productTable');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cell = rows[i].getElementsByTagName('td')[columnIndex];
        if (cell) {
            const cellValue = cell.textContent || cell.innerText;

            // For numeric columns (Price and Stock)
            if (columnIndex === 1 || columnIndex === 3) {
                if (value === '' || cellValue == value) {
                    rows[i].style.display = '';
                } else {
                    rows[i].style.display = 'none';
                }
            }
            // For text columns (Name and Description)
            else {
                if (value === '' || cellValue.toLowerCase().includes(value.toLowerCase())) {
                    rows[i].style.display = '';
                } else {
                    rows[i].style.display = 'none';
                }
            }
        }
    }
}