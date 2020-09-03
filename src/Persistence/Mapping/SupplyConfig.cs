using Domain.Entities.Inventory;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;



namespace Persistence.Mapping
{
    public class SupplyConfig    :  IEntityTypeConfiguration<Supply>
    {
        public void Configure(EntityTypeBuilder<Supply> builder)
        {
                string decimalType = "decimal(6,2)";
                string varcharType = "varchar(20)";

                builder.HasKey(p => p.SupplyId );

                 builder.Property(p => p.SupplyId)
                .HasColumnType(varcharType);

                

               builder.Property(p => p.SupplyName)
                .HasColumnType(varcharType);

                 builder.Property(p => p.SupplyBarcode)
                .HasColumnType(varcharType);

                 builder.Property(p => p.SupplyPrice)
                .HasColumnType(decimalType);

                builder.Property( p => p.SupplyStock)
                        .HasColumnType(decimalType);

           
        }
    }
}