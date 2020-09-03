using MediatR;
using Persistence.Contexts;

namespace Application
{
    public class BaseHandler
 
    {
        public IMediator _mediator { get; }
        public readonly HambusDbContext _dbContext;

        public BaseHandler(HambusDbContext dbContext, IMediator mediator)
        {
            _mediator = mediator;
            _dbContext = dbContext;
        }
    }
}