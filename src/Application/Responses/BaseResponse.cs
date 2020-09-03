using System;

namespace Application.Responses
{
    public class BaseResponse
    {
        public string Id { get; set; }
        public DateTime? Created { get; set; }
        public string Name { get; set; }

    }
}