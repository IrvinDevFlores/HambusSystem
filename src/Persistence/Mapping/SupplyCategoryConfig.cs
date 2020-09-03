using Domain.Entities.Inventory;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Mapping
{
    public class SupplyCategoryConfig
         :  IEntityTypeConfiguration<SupplyCategory>
    {
        public void Configure(EntityTypeBuilder<SupplyCategory> builder)
        {
                builder.HasKey(p => p.SupplyCategoryId );

               builder.Property( p => p.SupplyCategoryId)
               .HasColumnType("varchar(20)");

                    builder.Property( p => p.SupplyCategoryName)
               .HasColumnType("varchar(20)");

                 builder.HasMany( x => x.SuppliesInCategory)
                 .WithOne( x => x.SupplyCategory)
                 .HasForeignKey( x => x.SupplyCategoryId)
                 .IsRequired();

                        
        }
    }
}