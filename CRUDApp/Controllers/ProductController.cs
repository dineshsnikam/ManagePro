using CRUDApp.Data;
using CRUDApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CRUDApp.Controllers
{
    public class ProductController : Controller
    {
        private readonly AppDbContext _context;

        public ProductController(AppDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            IEnumerable<Product> products = _context.Products.ToList();
            return View(products);
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create([Bind("Name, Price, Description, Stock")] Product model)
        {
            if (ModelState.IsValid)
            {
                _context.Products.Add(model);
                _context.SaveChanges();

                //Log creation in history
                var history = new ProductHistory
                {
                    ProductId = model.Id,
                    ProductName = model.Name,
                    ActionType = "Create",
                    PerformedBy = "Admin",
                    ActionDate = DateTime.Now
                };
                _context.ProductHistory.Add(history);
                _context.SaveChanges();

                TempData["Notification"] = "Product Created Successfully";
                TempData["NotificationType"] = "success";
                return RedirectToAction("Index");
            }
            return View(model);
        }

        [HttpGet]
        public IActionResult Edit(int id)
        {
            var product = _context.Products.Find(id);
            if (product == null)
            {
                return NotFound();
            }
            else
            {
                return View(product);
            }
        }

        [HttpPost]
        public IActionResult Edit([Bind("Id,Name, Price, Description, Stock")] Product product)
        {
            if (ModelState.IsValid)
            {
                var oldProduct = _context.Products.AsNoTracking().FirstOrDefault(p => p.Id == product.Id);

                _context.Products.Update(product);
                _context.SaveChanges();

                //Log update in history
                if (oldProduct != null)
                {
                    var history = new ProductHistory
                    {
                        ProductId = product.Id,
                        ProductName = product.Name,
                        ActionType = "Update",
                        UpdatedField = "Price",
                        OldValue = oldProduct.Price.ToString(),
                        NewValue = product.Price.ToString(),
                        PerformedBy = "Admin",
                        ActionDate = DateTime.Now
                    };
                    _context.ProductHistory.Add(history);
                    _context.SaveChanges();
                }

                TempData["Notification"] = "Product Updated Successfully";
                TempData["NotificationType"] = "success";
                return RedirectToAction("Index");
            }
            return View(product);
        }

        [HttpGet]
        public IActionResult Delete(int id)
        {
            var product = _context.Products.Find(id);
            if (product == null)
            {
                return NotFound();
            }
            else
            {
                return View(product);
            }
        }

        public IActionResult DeleteConfirm(int id)
        {
            var product = _context.Products.Find(id);
            if (product != null)
            {
                _context.Products.Remove(product);
                _context.SaveChanges();

                // Log delete in history
                var history = new ProductHistory
                {
                    ProductId = product.Id,
                    ProductName = product.Name,
                    ActionType = "Delete",
                    PerformedBy = "Admin",
                    ActionDate = DateTime.Now
                };
                _context.ProductHistory.Add(history);
                _context.SaveChanges();

                TempData["Notification"] = "Product Deleted Successfully";
                TempData["NotificationType"] = "success";
            }

            return RedirectToAction("Index");
        }
        [HttpPost]
        public IActionResult DeleteHistory(int id)
        {
            try
            {
                // Your delete logic here
                return Json(new { success = true });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });
            }
        }
    }
}
