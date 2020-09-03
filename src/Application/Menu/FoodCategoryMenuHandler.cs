using System;
using System.Collections.Generic;
using Domain.Enums;

namespace Application.Menu
{
    public class FoodCategoryMenuHandler
    {
        private Dictionary<MenuCategoryOption, IFoodCategory> _foodCategories;


        public FoodCategoryMenuHandler()
        {

            _foodCategories = new Dictionary<MenuCategoryOption, IFoodCategory>();

            AddFoodCategory(MenuCategoryOption.Hamburguesas, new BurgerCategory());

        }

        private void AddFoodCategory(MenuCategoryOption type, IFoodCategory category)
        {

            _foodCategories.Add(type, category);
        }



        public void HandleFoodCategoryOption()
        {
            string input = Console.ReadLine();

            MenuCategoryOption type = (MenuCategoryOption)Enum
                      .Parse(typeof(MenuCategoryOption), input);

            FindFoodCategory(type);

        }


        public void FindFoodCategory(MenuCategoryOption foodCategoryType)
        {
            _foodCategories[foodCategoryType].ShowFoods();
        }
    }
}