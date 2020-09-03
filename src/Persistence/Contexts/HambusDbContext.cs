using Microsoft.EntityFrameworkCore;
using Domain.Entities.Inventory;
using Persistence.Mapping;
using Domain.Entities.Menu;
using Domain.Entities.Users;
using Domain.Entities.Staff;
using Domain.Entities.BussinesMovements;
namespace Persistence.Contexts
{

    public class HambusDbContext : DbContext
    {
        public HambusDbContext(DbContextOptions options) : base(options)
        {
            
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            

            builder.ApplyConfiguration(new SupplyConfig());
            builder.ApplyConfiguration(new ProviderConfig());
            builder.ApplyConfiguration(new SupplyCategoryConfig());

            builder.ApplyConfiguration(new MenuItemSuppliesConfig());


            builder.ApplyConfiguration(new MenuCategoryConfig());
            builder.ApplyConfiguration(new MenuItemConfig());
            builder.ApplyConfiguration(new RestaurantMenuConfig());


            builder.ApplyConfiguration(new UserConfig());

            builder.ApplyConfiguration(new PermissionConfig());

            builder.ApplyConfiguration(new RoleConfig());


            builder.ApplyConfiguration(new RolePermissionConfig());

            builder.ApplyConfiguration(new UserRoleConfig());

            builder.ApplyConfiguration(new EmployeeConfig());



        }


        public DbSet<Employee> Employees { get; set; }

        public DbSet<Supply> InventorySupplies { get; set; }
        public DbSet<SupplyCategory> InventoryCategorySupplies { get; set; }
        public DbSet<Provider> Providers { get; set; }

        public DbSet<MenuCategory> MenuCategories { get; set; }
        public DbSet<MenuItem> MenuProducts { get; set; }
        public DbSet<MenuItemSupplies> MenuItemSupplies { get; set; }
        public DbSet<RestaurantMenu> RestaurantMenus { get; set; }

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<RolePermission> RolePermissions { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<Permission> Permissions { get; set; }

        public DbSet<Transaction> Transactions { get; set; }
   
        public DbSet<TransactionDetail> TransactionDetails { get; set; }
        
    
    
    
    }
}