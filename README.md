# Product CRUD Application

An ASP.NET Core MVC application for managing products, allowing users to create, read, update, and delete products. This project demonstrates core features like Entity Framework Core for database operations, SweetAlert notifications, and data validation.

## Features

- **CRUD Operations**: Create, read, update, and delete products
- **Notifications**: SweetAlert notifications for user feedback on CRUD actions
- **Data Validation**: Validation using data annotations
- **Entity Framework Core**: Database operations and model binding

## Technologies Used

- [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
- ASP.NET Core MVC
- Entity Framework Core
- [SweetAlert2](https://sweetalert2.github.io/) for notifications
- Bootstrap for styling

## Prerequisites

- [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
- [Visual Studio 2022](https://visualstudio.microsoft.com/) (with .NET 8 support) or [Visual Studio Code](https://code.visualstudio.com/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server) (or SQL Server Express for local databases)

## Getting Started
    
### 1. Clone the repository

```bash
git clone https://github.com/MrIncognito022/CRUDApp.git
```

## 2. Configure the Database Connection

Open `appsettings.json` and set your SQL Server connection string:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=your-server-name;Database=your-database-name;Trusted_Connection=True;MultipleActiveResultSets=true"
}
```

## 3. Set Up the migration and Database

Open the package manager console and run the following commands

```bash
Add-migration your-migration-name
Update-Database
```
## 4. Run the application
After that run the application by using `dotnet run ` command


