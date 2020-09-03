namespace Application.Menu
{
    public class BurgerCategory : 
            IFoodCategory
    {
        public void ShowFoods() { }
    
    }
    
    public interface IFoodCategory
    {
        void ShowFoods();

    }
}