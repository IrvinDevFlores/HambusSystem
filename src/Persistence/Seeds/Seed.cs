using System;
using System.Collections.Generic;
using System.Linq;
using Domain.Entities.Inventory;
using Domain.Entities.Menu;
using Domain.Entities.Staff;
using Domain.Entities.Users;
using Persistence.Contexts;
namespace Persistence
{
    public class Seed
    {
        static void AddEmployes(HambusDbContext ctx)
        {
            var employee = new Employee
            {
                EmployeeId = "0101-1997-02703",
                FirstName = "Irvin",
                MiddleName = "Ariel",
                LastName1 = "Reyes",
                LastName2 = "Flores",
                EmployeeDayOfBirth =  DateTime.Now,
                EmployeePhone = "+50498919996",
                EmployeeSex = "Hombre",
                Puesto = "admin",
                Estado = "activo"

            };
            ctx.Employees.Add(employee);

            ctx.SaveChanges();

            var user = new User
            {
                UserName = "admin",
                Employee = employee
            };

            ctx.Users.Add(user);

            ctx.SaveChanges();
        }

        static void AddInventorySupplies(HambusDbContext ctx)
        {


            List<SupplyCategory> supplyCategories = new List<SupplyCategory>
                    {
                        new SupplyCategory
                         {
                             SupplyCategoryId = 1,
                             SupplyCategoryName = "Lacteos",
                             SuppliesInCategory =  new List<Supply>
                             {
                                  new Supply
                                    {
                                        SupplyId = "1",
                                        SupplyBarcode = "9303944",
                                        SupplyName = "Queso",
                                        SupplyPrice = 100,
                                        SupplyStock = 10,
                                        SupplyCategoryId = 1
                                    }
                             }
                         }
                    };

            ctx.InventoryCategorySupplies.AddRangeAsync(supplyCategories);
            ctx.SaveChangesAsync();

        }

        static void AddRestaurantMenu(HambusDbContext ctx)
        {
            RestaurantMenu restarantMenu = new RestaurantMenu
            {
                RestaurantMenuId = 1,
                MenuVersion = "v2",
                Categories = new List<MenuCategory>
                        {
                            new MenuCategory{
                                MenuCategoryId = "BURG",
                                MenuCategoryName = "Hamburgesas",
                                MenuProducts = new List<MenuItem>
                                {
                                    new MenuItem
                                    {
                                        MenuItemId = 1,
                                        ItemName = "Pilungosa",
                                        ItemDescripcion = "Hamburgesa con queso",
                                        MenuCategoryId = "BURG",

                                        MenuItemSupplies = new List<MenuItemSupplies>()
                                    },
                                    new MenuItem
                                    {
                                        MenuItemId = 2,
                                        ItemName = "Hulk",
                                        ItemDescripcion = "Hamburgesa con queso",
                                        MenuCategoryId = "BURG"
                                    },
                                },
                                RestaurantMenuId = 1
                            },
                            new MenuCategory{
                                MenuCategoryId = "ASA",
                                MenuCategoryName = "Asados",
                                RestaurantMenuId = 1
                            },
                            new MenuCategory{
                                MenuCategoryId = "APE",
                                MenuCategoryName = "Aperitivos",
                                RestaurantMenuId = 1
                            },
                            new MenuCategory{
                                MenuCategoryId = "BEB",
                                MenuCategoryName = "Bebidas",
                                RestaurantMenuId = 1
                            },
                        }

            };

            ctx.RestaurantMenus.Add(restarantMenu);

            ctx.SaveChanges();
        }

        static void AddMenuItemSupply(HambusDbContext ctx)
        {


            var supply = ctx.InventorySupplies.First(x => x.SupplyId == "1");
            var listItem = ctx.MenuProducts.First(x => x.MenuItemId == 1);
            var itemSupply = new MenuItemSupplies
            {

                MenuItemId = listItem.MenuItemId,
                SupplyId = supply.SupplyId
            };

            ctx.MenuItemSupplies.Add(itemSupply);
            ctx.SaveChanges();
        }

        public static void SeedData(HambusDbContext ctx)
        {
            /*   if (!ctx.RestaurantMenus.Any())
               {  */
            AddEmployes(ctx);
            AddInventorySupplies(ctx);
            AddRestaurantMenu(ctx);
            AddMenuItemSupply(ctx);

            //}

        }
    }
}