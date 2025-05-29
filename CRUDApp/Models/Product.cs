using System.ComponentModel.DataAnnotations;

namespace CRUDApp.Models
{
    public class Product
    {
        internal object LastRestocked;

        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(100)]
        public string Name { get; set; }
        [Required]
        public float Price { get; set; }
        public string Description { get; set; }
        [Range(0, int.MaxValue,ErrorMessage ="Stock must be positive")]
        public int Stock { get; set; }
    }
}
// test