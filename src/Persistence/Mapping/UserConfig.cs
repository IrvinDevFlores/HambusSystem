using Domain.Entities.Users;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Mapping
{
    public class UserConfig
               : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {


            builder.HasKey(p => p.UserId);

            builder.Property(p => p.UserName)
                     .HasColumnType("varchar(20)");


            // one to many Address - Person
            builder.HasOne(x => x.Employee).WithMany()
                .HasForeignKey(x => x.EmployeeId)
                 .IsRequired();


            builder.HasIndex(x => new { x.UserName, x.EmployeeId })
                         .IsUnique(true);


        }
    }
}