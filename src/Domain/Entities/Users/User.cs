using System;
using System.Collections.Generic;
using Domain.Entities.Staff;
namespace Domain.Entities.Users
{
    public class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }

        public bool IsActive { get; set; }

        public DateTime CreatedDate { get; set; }


        
        public ICollection<UserRole> UserRoles { get; set; }


        public string EmployeeId { get; set; }
        public Employee Employee { get; set; }



    }
}