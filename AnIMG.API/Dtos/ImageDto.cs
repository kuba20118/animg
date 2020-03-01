using System;
using System.Collections.Generic;
using AnIMG.API.Models;

namespace AnIMG.API.Dtos
{
    public class ImageDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Filename { get; set; }
        public int Points { get; set; }
        public string Description { get; set; }
        public string AddedBy { get; set; }
        public DateTime AddTime { get; set; }
        public string Url { get; set; }
        public string public_id { get; set; }

        public ICollection<Category> Categories { get; set; }
    }
}