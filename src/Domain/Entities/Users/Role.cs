using System.Collections.Generic;

namespace Domain.Entities.Users
{
    public class Role
    {
        public int RoleId { get; set; }
        public string RoleName { get; set; }

        public ICollection<UserRole> UserRoles { get; set; }
         public ICollection<RolePermission> PermissionRoles { get; set; }
    }
}