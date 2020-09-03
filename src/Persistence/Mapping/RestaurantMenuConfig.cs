using System.Collections.Generic;
using Domain.Entities.Menu;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Mapping
{
    public class RestaurantMenuConfig : IEntityTypeConfiguration<RestaurantMenu>
    {
        public void Configure(EntityTypeBuilder<RestaurantMenu> builder)
        {
            builder.HasKey(p => p.RestaurantMenuId);
            
            builder.Property( p => p.MenuVersion)
                    .HasColumnType("varchar(40)")
                    .IsRequired();

            builder.HasMany(c => c.Categories);

        

        }
    }
}