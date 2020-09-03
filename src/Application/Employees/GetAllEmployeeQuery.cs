using System.Collections.Generic;
using Domain.Entities.Staff;
using MediatR;

namespace Application.Employees
{
    public class GetAllEmployeeQuery : IRequest<List<Employee>>
    {
       
    } 
    
}