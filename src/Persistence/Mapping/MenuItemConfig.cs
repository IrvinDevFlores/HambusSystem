using Domain.Entities.Menu;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Mapping
{
    public class MenuItemConfig 
        :  IEntityTypeConfiguration<MenuItem>
    {
        public void Configure(EntityTypeBuilder<MenuItem> builder)
        {
                string decimalType = "decimal(6,2)";

                builder.HasKey(p => p.MenuItemId );

               builder.Property(p => p.ItemName)
                .HasColumnType("varchar(20)");

                 builder.Property(p => p.ItemDescripcion)
                .HasColumnType("varchar(20)");

                 builder.Property(p => p.MenuCategoryId)
                .HasColumnType("varchar(20)");

                builder.Property( p => p.ItemPrice)
                        .HasColumnType(decimalType);

                 
                 builder.HasMany( x => x.MenuItemSupplies)
                 .WithOne( x => x.MenuItem)
                 .HasForeignKey( x => x.MenuItemId)
                 .IsRequired();
        }
    }
}