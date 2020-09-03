using System;
using Domain.Entities.Users;

namespace Domain.Entities.BussinesMovements
{
    public class Transaction
    {
        public string TransactionId { get; set; }
        public DateTime TransctionDate { get; set; }
        public double TransactionSubtotal { get; set; }

        public double TransactionDiscount { get; set; }
        public double TransactionTax { get; set; }
        public double TransactionTotal { get; set; }

        public bool IsActive { get; set; }

        public int PaymentMethodId { get; set; }
        public PaymentMethod PaymentMethod { get; set; } 

        public User User { get; set; }  

        public int UserId { get; set; }
   
    }
}