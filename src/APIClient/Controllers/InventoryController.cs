using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

using System.Collections.Generic;
using Domain.Entities.Inventory;
using MediatR;


namespace APIClient.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class InventoryController : ControllerBase
    {

        private readonly IMediator _mediator;

        public InventoryController(IMediator mediator)
        {
            _mediator = mediator;
        }

/*
        [HttpGet("/api/list")]
        public async Task<ActionResult<List<Product>>> List(){

            var menu = await _mediator.Send(new ListOfCustomers.Query());
            return Ok(menu);
        }
        
         [HttpGet("{id}")]
        public async Task<ActionResult<Supply>> Details(string id)
        {

           return await _mediator.Send(new GetInventoryProduct.Query{ProductId = id});
        }

        */
        
    }
}