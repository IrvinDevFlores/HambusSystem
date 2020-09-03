using Domain.Entities.Menu;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Mapping
{
    public class MenuCategoryConfig 
        :  IEntityTypeConfiguration<MenuCategory>
    {
        public void Configure(EntityTypeBuilder<MenuCategory> builder)
        {
                builder.HasKey(p => p.MenuCategoryId );

            builder.Property( p => p.MenuCategoryId)
                        .HasColumnType("varchar(20)");

             builder.Property( p => p.MenuCategoryName)
                        .HasColumnType("varchar(20)");

                 builder.HasMany( x => x.MenuProducts)
                 .WithOne( x => x.MenuCategory)
                 .HasForeignKey( x => x.MenuCategoryId)
                 .IsRequired();

                        
        }
    }
}
