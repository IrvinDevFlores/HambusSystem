using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain.Entities.Staff;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence.Contexts;

namespace Application.Employees
{
    public class AllEmployees
    {
          public class Query : IRequest<List<Employee>>{}

        public class Handler : IRequestHandler<Query, List<Employee>>
        {
            private readonly HambusDbContext _context;
            public Handler(HambusDbContext ctx)
            {
                _context = ctx;
            }
            public async Task<List<Employee>> Handle(Query request, 
                               CancellationToken cancelationToken)
            {

                  var customers = await _context.Employees.ToListAsync();                  
                
                return customers;
            }
        }
    }
}