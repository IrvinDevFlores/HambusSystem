using System.Collections.Generic;

namespace Domain.Entities.Food
{
   public class FoodCategory 
    {
          public int FoodCategoryId{get;set;}
          
          public string FoodCategoryName{get;set;}
          public ICollection<GeneralFood> Foods{get;set;}
    }
}