namespace Domain.Entities.BussinesMovements
{
    public class TransactionDetail
    {
        public int TransactionDetailId { get; set; }


        public string TransactionId { get; set; }

        public int MenuItemId { get; set; }
        public int Quantity { get; set; }

        public double  UnitPrice { get; set; }

        public double Discount { get; set; }
        public double TotalPrice { get; set; }


        
    }
}