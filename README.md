# ManagePro

ManagePro is an ASP.NET Core MVC 9.0 web application for managing products with full CRUD operations, real-time dashboard, product history tracking, and secure login/registration system. This project uses Entity Framework Core for database operations, SweetAlert for user notifications, and Bootstrap for styling.

---

## Features

- **CRUD Operations:** Create, read, update, and delete products
- **Product History Tracking:** Track changes made to products with timestamps and user info
- **Real-Time Dashboard:** Displays key statistics and charts dynamically
- **Notifications:** SweetAlert2 notifications for feedback on CRUD actions
- **Data Validation:** Model validation using data annotations
- **Entity Framework Core:** Efficient database management and migrations

---

## Technologies Used

- [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
- ASP.NET Core MVC 9.0
- Entity Framework Core
- [SweetAlert2](https://sweetalert2.github.io/)
- Bootstrap 5

---

## Prerequisites

- [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
- [Visual Studio 2022](https://visualstudio.microsoft.com/) or [Visual Studio Code](https://code.visualstudio.com/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server) or SQL Server Express for local databases

---

## Getting Started

Configure Database Connection
Open appsettings.json and update the connection string to match your SQL Server instance:
"ConnectionStrings": {
     "ConnectionStrings": {
    "DefaultConnection": "Server=DESKTOP-NGV9PDS\\SQLEXPRESS01; Database = ProductsDatabase; Trusted_Connection = True; TrustServerCertificate = true; "
  }

## Setup Database
Open Package Manager Console or terminal and run:
dotnet ef migrations add InitialCreate
dotnet ef database update  


## Usage Restrictions
This project ManagePro is developed exclusively by Dinesh Nikam and is intended for personal or educational use only. Hosting, deploying, or distributing this project without explicit permission from the author is strictly prohibited.

For any inquiries or permissions, please contact: dnikam.dev@gmail.com

