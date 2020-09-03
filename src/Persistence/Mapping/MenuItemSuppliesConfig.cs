using Domain.Entities.Menu;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Mapping
{
    public class MenuItemSuppliesConfig
   :  IEntityTypeConfiguration<MenuItemSupplies>
    {
        public void Configure(EntityTypeBuilder<MenuItemSupplies> builder)
        {
                builder.HasKey(p => new{
                    p.MenuItemId, p.SupplyId
                } );

                builder.HasOne( u => u.MenuItem)
                .WithMany(roles => roles.MenuItemSupplies )
                .HasForeignKey( u => u.MenuItemId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);
                

                 builder.HasOne( u => u.Supply)
                .WithMany(roles => roles.MenuItemSupplies )
                .HasForeignKey( u => u.SupplyId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);
                        
        }
    }
}