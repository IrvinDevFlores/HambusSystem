using MediatR;
using Domain.Entities.Staff;
namespace Application.Employees
{
    public class GetEmployeeByIdQuery : IRequest<EmployeeResponse>
    {
        public virtual string employeId { get; set; }
        public GetEmployeeByIdQuery(string id)
        {
            employeId = id;
        }
    }
}