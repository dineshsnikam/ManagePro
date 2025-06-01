using CRUDApp.Models;
using Microsoft.EntityFrameworkCore;

namespace CRUDApp.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }  // Existing

       
            
            public DbSet<ProductHistory> ProductHistory { get; set; }
        public object ProductHistories { get; internal set; }
    }


    }

