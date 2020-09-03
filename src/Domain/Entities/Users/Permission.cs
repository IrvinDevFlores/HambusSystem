using System;
using System.Collections.Generic;

namespace Domain.Entities.Users
{
    public class Permission
    {
        public int PermissionId { get; set; }
        public string PermissionName { get; set; }

        public string Description { get; set; }

        public DateTime?  PermissionCreatedDate { get; set; }

        public ICollection<RolePermission> PermissionRoles { get; set; }
    }
}