using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

using System.Collections.Generic;
using Domain.Entities.Staff;
using Application.Employees;
using MediatR;
using Microsoft.AspNetCore.Cors;

namespace APIClient.Controllers
{
      
    [Route("api/[controller]")]
    [ApiController]

    public class EmployeeController : ControllerBase
    {

        private readonly IMediator _mediator;

        public EmployeeController(IMediator mediator)
        {
            _mediator = mediator;
        }

         [Route("[action]")]
         [HttpGet]
        public async Task<ActionResult<List<Employee>>> All()
        {
        
            var result = await _mediator.Send(new AllEmployees.Query());
                
            return Ok(result);

        }

        [Route("[action]")]
        [HttpPost]
        public async Task<ActionResult<Unit>> Create([FromBody] CreateEmployeeCommand command)
        {

            var result = await _mediator.Send(command);
            return result;
        }
        
        [HttpGet("{id}")]
        [Route("[action]")]
        public async Task<ActionResult<EmployeeResponse>> GetEmployee(string id)
        {
          
            var result = await _mediator.Send(new GetEmployeeByIdQuery(id));

            return  Ok(result);
        }


        [HttpPut("{id}")]
        
        public async Task<ActionResult<Unit>> Edit(string id, EditEmployeeCommand command)
        {
            command.Id = id;

            var query = await _mediator.Send(command);

            return query;
        }

        
        
    }
}