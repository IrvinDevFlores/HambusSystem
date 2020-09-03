using System;
using Domain.Entities.Users;
namespace Domain.Entities.Staff
{
    public class Employee
    {


        public string EmployeeId { get; set; }
        public void ChangeEmployeeId(string request )
        {
            EmployeeId = request ?? EmployeeId;
        }

        public string FirstName
         { get; set; }
        public void ChangeFirstName(string request )
        {
            FirstName= request ?? FirstName ;
        }

          public string MiddleName
         { get; set; }
        public void ChangeMiddleName(string request )
        {
            MiddleName = request ?? MiddleName ;
        }


        public string LastName1 { get; set; }
        public void ChangeLastname1(string request )
        {
            LastName1 = request ?? LastName1;
        }
        public string LastName2 { get; set; }
        public void ChangeLastname2(string request )
        {
            LastName2 = request ?? LastName2;
        }

        public string EmployeeSex { get; set; }
        public void ChangeEmployeeSex(string request )
        {
            EmployeeSex = request ?? EmployeeSex;
        }

        public string EmployeePhone { get; set; }
        public void ChangeEmployeePhone(string request )
        {
            EmployeePhone = request ?? EmployeePhone;
        }

        public DateTime? EmployeeDayOfBirth { get; set; }
        public void ChangeDayOfBirth(DateTime? request )
        {
            EmployeeDayOfBirth = request ?? EmployeeDayOfBirth;
        }

        
        public string Puesto { get; set; }
        public string Estado { get; set; }

        public int? UserId { get; set; }

        public User User { get; set; }

    }
}