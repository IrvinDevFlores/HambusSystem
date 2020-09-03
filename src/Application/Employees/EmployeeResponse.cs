using System.Collections.Generic;
using Application.Responses;
using Domain.Entities.Staff;

namespace Application.Employees
{
    public class EmployeeResponse : BaseResponse
    {
        public List<Employee> Employees { get; set; }
    }
}