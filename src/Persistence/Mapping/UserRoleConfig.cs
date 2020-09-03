using Domain.Entities.Users;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Mapping
{
    public class UserRoleConfig :
      IEntityTypeConfiguration<UserRole>
    {
        public void Configure(EntityTypeBuilder<UserRole> builder)
        {
                builder.HasKey(p => new{
                    p.UserId, p.RoleId
                } );

                builder.HasOne( u => u.User)
                .WithMany(roles => roles.UserRoles )
                .HasForeignKey( u => u.UserId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);
                

                 builder.HasOne( u => u.Role)
                .WithMany(roles => roles.UserRoles )
                .HasForeignKey( u => u.RoleId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);
                        
        }
    }
}