
using System.Collections.Generic;

namespace Domain.Entities.Menu
{
    public class MenuCategory
    {
        public string MenuCategoryId { get; set; }
        public string MenuCategoryName { get; set; }

        public int RestaurantMenuId { get;  set; }

        public bool IsActive { get; set; }
        
        public ICollection<MenuItem> MenuProducts { get; set; }
    }
}