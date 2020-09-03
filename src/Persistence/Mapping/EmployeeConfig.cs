using Domain.Entities.Staff;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Mapping
{
    public class EmployeeConfig
             : IEntityTypeConfiguration<Employee>
    {
        public void Configure(EntityTypeBuilder<Employee> builder)
        {


            builder.HasKey(p => p.EmployeeId);

            builder.Property(p => p.EmployeeId)
                     .HasColumnType("varchar(20)");

            builder.Property(p => p.FirstName)
                     .HasColumnType("varchar(20)");

            builder.Property(p => p.MiddleName)
                     .HasColumnType("varchar(20)");


            builder.Property(p => p.LastName1)
                     .HasColumnType("varchar(20)");


            builder.Property(p => p.LastName2)
                     .HasColumnType("varchar(20)");

            builder.Property(p => p.EmployeeSex)
                   .HasColumnType("varchar(20)");

            builder.Property(p => p.EmployeePhone)
                       .HasColumnType("varchar(20)");

            builder.Property(a => a.EmployeeDayOfBirth)
                        .HasColumnType("datetime");


            builder.Property(a => a.Puesto)
                        .HasColumnType("varchar(20)");

            builder.Property(a => a.Estado)
                        .HasColumnType("varchar(20)");


            builder.HasOne(x => x.User).WithMany()
                     .HasForeignKey(x => x.UserId);


        }
    }
}