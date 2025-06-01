const connection = new signalR.HubConnectionBuilder()
    .withUrl("/productHistoryHub")
    .build();

connection.start().catch(err => console.error(err.toString()));

connection.on("ReceiveUpdate", function (history) {
    addRow(history, "Update");
});

connection.on("ReceiveDelete", function (history) {
    addRow(history, "Delete");
});

function addRow(history, actionType) {
    const tableBody = document.querySelector("#historyTable tbody");
    const row = document.createElement("tr");
    row.classList.add("history-row", "table-success");
    row.setAttribute("data-history-id", history.Id);
    row.innerHTML = `
            <td>${history.ProductName}</td>
            <td>${history.ActionType}</td>
            <td>${history.UpdatedField}</td>
            <td>${history.OldValue}</td>
            <td>${history.NewValue}</td>
            <td>${history.PerformedBy}</td>
            <td>${history.ActionDate}</td>
            <td><button class="btn btn-sm btn-danger delete-btn" type="button">DeleteHistory</button></td>
        `;
    tableBody.prepend(row);
}

// Filter by action type
document.getElementById("actionFilter").addEventListener("change", function () {
    const selected = this.value.toLowerCase();
    document.querySelectorAll("#historyTable tbody tr").forEach(row => {
        const type = row.children[1].textContent.toLowerCase();
        row.style.display = (selected === "all" || type === selected) ? "" : "none";
    });
});
