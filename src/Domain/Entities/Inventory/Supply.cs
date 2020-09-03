using System.Collections.Generic;
using Domain.Entities.Menu;
namespace Domain.Entities.Inventory
{
    public class Supply
    {
        
        public string SupplyId{get;set;}

        public string SupplyBarcode{get;set;}

        public string SupplyName { get; set; }    

        public decimal SupplyPrice { get; set; }

        public int SupplyStock { get; set; }  


        public SupplyCategory SupplyCategory { get; set; }
         public int SupplyCategoryId { get; set; }   

         public ICollection<MenuItemSupplies> MenuItemSupplies { get; set; }
    }
}