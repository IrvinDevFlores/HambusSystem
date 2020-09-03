using Domain.ValueObjects;
namespace Domain.Entities.Inventory
{
    public class Provider
    {
        public int ProviderId { get; set; }
        public string  ProviderName{ get; set; }

        public Address Address { get; set; }
    }
}