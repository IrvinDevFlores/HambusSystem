using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain.Entities.Staff;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence.Contexts;

namespace Application.Employees
{
   public class GetEmployeeHandler : BaseHandler, 
            IRequestHandler<GetEmployeeByIdQuery, EmployeeResponse>
    {
        public GetEmployeeHandler(HambusDbContext _dbContext, IMediator mediator)
            : base(_dbContext, mediator)
        {
            
        }

        public async Task<EmployeeResponse> Handle(GetEmployeeByIdQuery request, CancellationToken cToken)
        {

            string cedula = request.employeId;
            Employee employeeFound = await _dbContext.Employees.FindAsync(cedula);

            if(employeeFound == null)
                    throw new Exception("Error que pepe");
            
            EmployeeResponse response  = new EmployeeResponse
            {
                Id = employeeFound.EmployeeId,
                Name = employeeFound.FirstName,
                Created = employeeFound.EmployeeDayOfBirth
            };

            return response;
        }
        
    }
}