using Microsoft.AspNetCore.Mvc;
using CRUDApp.Data;
using CRUDApp.Models;

public class HistoryController : Controller
{
    private readonly AppDbContext _context;

    public HistoryController(AppDbContext context)
    {
        _context = context;
    }

    public async Task LogUpdateAsync(int productId, string productName, string updatedField, string oldValue, string newValue, string performedBy)
    {
        var history = new ProductHistory
        {
            ProductId = productId,
            ProductName = productName,
            ActionType = "Update",
            UpdatedField = updatedField,
            OldValue = oldValue,
            NewValue = newValue,
            PerformedBy = performedBy,
            ActionDate = DateTime.Now
        };

        _context.ProductHistory.Add(history);
        await _context.SaveChangesAsync();
    }

    public async Task LogDeleteAsync(int productId, string productName, string performedBy)
    {
        var history = new ProductHistory
        {
            ProductId = productId,
            ProductName = productName,
            ActionType = "Delete",
            PerformedBy = performedBy,
            ActionDate = DateTime.Now
        };

        _context.ProductHistory.Add(history);
        await _context.SaveChangesAsync();
    }
    public IActionResult Index()
    {
        var history = _context.ProductHistory.ToList();
        return View(history);
    }
    [HttpPost]
    public IActionResult DeleteHistory(int id)
    {
        // delete logic here
        return Json(new { success = true });
    }




}
