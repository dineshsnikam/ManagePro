using CRUDApp.Models;
using Microsoft.AspNetCore.Mvc;

public class AccountController : Controller
{
    [HttpGet]
    public IActionResult Login()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Login(LoginModel model)
    {
        if (ModelState.IsValid)
        {
            // Dummy check for demo
            if (model.Email == "admin@demo.com" && model.Password == "admin")
            {
                return RedirectToAction("Index", "Dashboard");
            }
            ModelState.AddModelError("", "Invalid login.");
        }
        return View(model);
    }

    [HttpGet]
    public IActionResult Register()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Register(RegisterModel model)
    {
        if (ModelState.IsValid)
        {
            // Save registration logic here
            return RedirectToAction("Login");
        }
        return View(model);
    }

    public IActionResult Logout()
    {
        // Add logout logic here
        return RedirectToAction("Login");
    }
}
