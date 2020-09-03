using Domain.Entities.Inventory;

namespace Domain.Entities.Menu
{
    public class MenuItemSupplies
    {
        
        public int MenuItemId { get; set; }
        public MenuItem MenuItem { get; set; }

        public string SupplyId { get; set; }
        public Supply Supply { get; set; }
    }
}