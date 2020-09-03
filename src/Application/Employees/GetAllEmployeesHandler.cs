using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain.Entities.Staff;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence.Contexts;

namespace Application.Employees
{
    public class GetAllEmployeesHandler : BaseHandler, 
                    IRequestHandler<GetAllEmployeeQuery, List<Employee>>
    {
        public GetAllEmployeesHandler(HambusDbContext _dbContext, IMediator mediator)
            : base(_dbContext, mediator)
        {
            
        }

        public async Task<List<Employee>> Handle(GetAllEmployeeQuery request, CancellationToken cToken)
        {
            var employeesOnDatabase = await _dbContext.Employees.ToListAsync();

            return employeesOnDatabase;
        }
        
    }
}