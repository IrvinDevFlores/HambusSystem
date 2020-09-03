using System.Collections.Generic;

namespace Domain.ValueObjects
{
    public class Address : ValueObject
    {
        public string Street { get; private set; }
        public string City { get; private set; }
        public string Department { get; private set; }
        public string Country { get; private set; }
        public string ZipCode { get; private set; }

        private Address() { }

        public Address(string street, string city, string department, string country, string zipcode)
        {
            Street = street;
            City = city;
            Department = department;
            Country = country;
            ZipCode = zipcode;
        }

        public override string ToString()
        {
            return $"{Street}, {City}, {Department} ,{Country}, {ZipCode}";
        }

        protected override IEnumerable<object> GetAtomicValues()
        {
            // Using a yield return statement to return each element one at a time
            yield return Street;
            yield return City;
            yield return Department;
            yield return Country;
            yield return ZipCode;
        }
    }
}