using System;
using System.Threading;
using System.Threading.Tasks;
using Domain.Entities.Staff;
using MediatR;
using Persistence.Contexts;

namespace Application.Employees
{
    public class EditEmployeeHandler: BaseHandler,
                            IRequestHandler<EditEmployeeCommand>
    {
            
            public EditEmployeeHandler(HambusDbContext ctx, IMediator mediator)
                :base(ctx, mediator)
            {
               
            }
            public async Task<Unit> Handle(EditEmployeeCommand request, 
                               CancellationToken cancelationToken)
            {

                Employee searchedEmployee = await _dbContext.Employees.FindAsync(request.Id);

                bool isEmployeeFound = searchedEmployee == null;

                if(isEmployeeFound)
                    throw new Exception("No se encontro el empleado");

                     searchedEmployee.ChangeEmployeeId(request.Id); 
                searchedEmployee.ChangeFirstName(request.EmployeeName);
                searchedEmployee.ChangeLastname1(request.EmployeeLastname);
                searchedEmployee.ChangeEmployeePhone(request.Phone);

                 var succes=  await _dbContext.SaveChangesAsync() > 0;

                if(succes) return Unit.Value;
                
                throw new Exception("Problema guardando los datos");
            }
        
    }
}