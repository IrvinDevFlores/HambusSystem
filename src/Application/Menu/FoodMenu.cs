using System;

namespace Application.Menu
{
    public class FoodMenu
    {
        IMenuConfigurator _menuConfig;
        public FoodMenu(MenuConfigurator menuConf)
        {
            _menuConfig = menuConf;
        }

        public void AddItem(string item)
        {
            _menuConfig.AddMenuItem(item);
        }

        public void ShowMenu()
        {

            string menu = _menuConfig.GetConfiguredItems();

            Console.WriteLine(menu);
        }
    }
}