using MediatR;

namespace Application.Employees
{
    public class CreateEmployeeCommand : IRequest
    {
       
        public string EmployeeName { get; set; }
        public string EmployeeLastname { get; set; }
        public string Cedula { get; set; }

        public string Phone { get; set; }
      
    }
}