using System;
using Microsoft.AspNetCore.Http;

namespace AnIMG.API.Dtos
{
    public class NewImageDto
    {


        public string Url { get; set; }
        public IFormFile File { get; set; }
        public string public_id { get; set; }
        public DateTime AddTime { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public NewImageDto()
        {
            AddTime = DateTime.Now;
        }
    }
}