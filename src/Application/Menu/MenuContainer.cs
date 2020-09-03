using System;

namespace Application.Menu
{
    public class MenuContainer
    {
        IMenuConfigurator _menuConfig;
        public MenuContainer(MenuConfigurator menuConf)
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