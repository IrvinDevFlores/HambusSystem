using System.Text;

namespace Application.Menu
{
    public class MenuConfigurator : IMenuConfigurator
    {
        private StringBuilder StringMenu { get; set; }

        public MenuConfigurator()
        {
            StringMenu = new StringBuilder();
            ConfigureMenuItems();

        }


        public void AddMenuItem(string item)
        {
            StringMenu.AppendLine(item);
        }

        private string RenderMenu() => StringMenu.ToString();

        public string GetConfiguredItems() => RenderMenu();


        public void ConfigureMenuItems()
        {

            AddMenuItem("Menu");

            AddMenuItem("1. Carnes");
            AddMenuItem("2. Hamburgesas");
            AddMenuItem("3. Aperitivos");
            AddMenuItem("Elije uno: ");

        }
    }


    public interface IMenuConfigurator
    {
        void AddMenuItem(string item);
        string GetConfiguredItems();
    }
}