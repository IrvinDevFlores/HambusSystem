using System.Collections.Generic;

namespace Domain.Entities.Food
{
    public class GeneralFood
    { public int FoodId{get;set;}
        
        public string FoodName{get;set;}
        
        public ICollection<Ingredient> Ingredients{get;set;}
        
        
        public int FoodCategoryId{get;set;}
        
        public FoodCategory FoodCategory{get;set;}
        
    }
}