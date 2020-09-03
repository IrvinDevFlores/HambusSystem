using MediatR;
namespace Application.Employees
{
    public class EditEmployeeCommand : IRequest
    {
       
        public string Id { get; set; }

        public string EmployeeName { get; set; }
        public string EmployeeLastname { get; set; }
      

        public string Phone { get; set; }
      
    } 
}