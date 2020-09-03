using System.Collections.Generic;

namespace Domain.Entities.Menu
{
    public class RestaurantMenu
    {
        public int RestaurantMenuId { get; set; }
        public string MenuVersion { get; set; }

        public RestaurantMenu(int restaurantMenuId,  string menuVersion)
        {
                    RestaurantMenuId = restaurantMenuId;
                    MenuVersion = menuVersion;
        }

        public RestaurantMenu()
        {
            
        }
       
        public ICollection<MenuCategory> Categories { get; set; } 
        
    }
}