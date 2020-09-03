using Domain.Entities.Users;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Mapping
{
    public class RolePermissionConfig :
      IEntityTypeConfiguration<RolePermission>
    {
        public void Configure(EntityTypeBuilder<RolePermission> builder)
        {
                builder.HasKey(p => new{
                    p.RoleId, p.PermissionId
                } );

                builder.HasOne( u => u.Role)
                .WithMany(roles => roles.PermissionRoles )
                .HasForeignKey( u => u.RoleId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);
                

                 builder.HasOne( u => u.Permission)
                .WithMany(roles => roles.PermissionRoles )
                .HasForeignKey( u => u.PermissionId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);
                        
        }
    }
}