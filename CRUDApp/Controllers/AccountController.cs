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
            if (model.Email == "dinesh@gmail.com" && model.Password == "dinesh")


            {
                return RedirectToAction("Index", "Dashboard");
            }
            TempData["Error"] = "❌ Invalid Email or Password.";
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
            // TODO: Save registration logic here (e.g., DB insert)

            TempData["Success"] = "✅ Registration successful! Please login.";
            return RedirectToAction("Login");
        }

        TempData["Error"] = "❌ Please correct the highlighted errors and try again.";
        return View(model);
    }

    public IActionResult Logout()
    {
        // TODO: Add logout logic here (e.g., clear session/cookie)
        return RedirectToAction("Login");
    }

}