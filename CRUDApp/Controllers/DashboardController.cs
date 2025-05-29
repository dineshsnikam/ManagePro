using CRUDApp.Data; // DbContext साठी
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace CRUDApp.Controllers
{
    public class DashboardController : Controller
    {
        private readonly AppDbContext _context; 

        public DashboardController(AppDbContext context) //  constructor injection
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var products = _context.Products.ToList();

            var totalProducts = products.Count;
            var totalStock = products.Sum(p => p.Stock);
            var totalValue = products.Sum(p => p.Price * p.Stock);
            var lowStock = products.Count(p => p.Stock < 10); // Example alert

            ViewData["TotalProducts"] = totalProducts;
            ViewData["TotalStock"] = totalStock;
            ViewData["TotalValue"] = totalValue;
            ViewData["LowStock"] = lowStock;

            return View();
        }

    }
}