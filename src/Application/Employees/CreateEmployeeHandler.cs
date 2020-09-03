using System;
using System.Threading;
using System.Threading.Tasks;
using Domain.Entities.Staff;
using MediatR;
using Persistence.Contexts;

namespace Application.Employees
{
    public class CreateEmployeeHandler : BaseHandler,IRequestHandler<CreateEmployeeCommand>
    {
            
            public CreateEmployeeHandler(HambusDbContext ctx, IMediator mediator)
                :base(ctx, mediator)
            {
               
            }
            public async Task<Unit> Handle(CreateEmployeeCommand request, 
                               CancellationToken cancelationToken)
            {

                 Employee employee = new Employee{
                    EmployeeId = request.Cedula,
                    FirstName = request.EmployeeName,
                    EmployeeDayOfBirth = DateTime.Now,
                    EmployeePhone = request.Phone
                 } ;

                 _dbContext.Employees.Add(employee); 
                 var succes=  await _dbContext.SaveChangesAsync() > 0;

                if(succes) return Unit.Value;
                
                throw new Exception("Problema guardando los datos");
            }
        
    }
}