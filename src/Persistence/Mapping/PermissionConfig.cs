
using System;
using Domain.Entities.Users;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Mapping
{
    public class PermissionConfig
                :     IEntityTypeConfiguration<Permission>
    {
        public void Configure(EntityTypeBuilder<Permission> builder)
        {
               

                builder.HasKey(p => p.PermissionId );
                

               builder.Property( p => p.PermissionName)
                        .HasColumnType("varchar(20)");

               builder.Property( p => p.Description)
                        .HasColumnType("varchar(20)");

               builder.Property(p => p.PermissionCreatedDate)
                        .HasColumnType("datetime");
                
                
        }
    }
}