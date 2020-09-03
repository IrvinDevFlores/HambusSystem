using Domain.Entities.Inventory;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Mapping
    {
    public class ProviderConfig: IEntityTypeConfiguration<Provider>
    {
        public void Configure(EntityTypeBuilder<Provider> builder)
        {
                string varcharType = "varchar(40)";

                builder.HasKey(p => p.ProviderId );

                 builder.Property(p => p.ProviderName)
                   .HasColumnType("varchar(20)")
                   .IsRequired();


                builder.OwnsOne( a => a.Address)
                        .Property(p => p.Street)
                        .HasColumnName("Street")
                        .HasColumnType(varcharType);

               
                builder.OwnsOne( a => a.Address)
                        .Property(p => p.City)
                        .HasColumnName("City")
                        .HasColumnType(varcharType);

                builder.OwnsOne( a => a.Address)
                        .Property(p => p.Department)
                        .HasColumnName("Departament")
                        .HasColumnType(varcharType);

                builder.OwnsOne( a => a.Address)
                        .Property(p => p.Country)
                        .HasColumnName("Country")
                        .HasColumnType(varcharType);
                        
                builder.OwnsOne( a => a.Address)
                        .Property(p => p.ZipCode)
                        .HasColumnName("ZipCode")
                        .HasColumnType(varcharType);
                                 
                        
                
        }
    }
}