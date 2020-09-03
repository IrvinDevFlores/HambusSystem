using System.Collections.Generic;


namespace Domain.Entities.Inventory
{
    public class SupplyCategory
    {
        public int SupplyCategoryId{get;set;}

        public string SupplyCategoryName{get;set;}

        public ICollection<Supply> SuppliesInCategory{get;set;}
    }
}