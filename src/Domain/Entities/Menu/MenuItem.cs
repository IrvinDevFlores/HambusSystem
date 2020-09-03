

using System.Collections.Generic;
using Domain.Entities.Inventory;
using System.Linq;
namespace Domain.Entities.Menu
{
    public class MenuItem
    {


        public MenuItem()
        {

        }
        public int MenuItemId { get; set; }
        public string ItemName { get; set; }
        public string ItemDescripcion { get; set; }
        public decimal ItemPrice { get; set; }

        public bool IsActive { get; set; }

        public string MenuCategoryId { get; set; }
        public MenuCategory MenuCategory { get; set; }

        public ICollection<MenuItemSupplies> MenuItemSupplies { get; set; }


        public void CalculatePrice()
        {
            ItemPrice = MenuItemSupplies.Select(x => x.Supply.SupplyPrice).Sum();
        }

    }
}