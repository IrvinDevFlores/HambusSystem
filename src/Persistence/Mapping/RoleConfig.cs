using Domain.Entities.Users;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Mapping
{
    public class RoleConfig
                  :     IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> builder)
        {
               

                builder.HasKey(p => p.RoleId );

               builder.Property( p => p.RoleName)
                        .HasColumnType("varchar(20)");

                
        }
    }
}