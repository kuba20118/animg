using System;
using System.Collections.Generic;

namespace AnIMG.API.Models
{
    public class Image
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Filename { get; set; }
        public DateTime AddTime { get; set; }
        public int Points { get; set; }
        public string Description { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public string Url { get; set; }
        public string public_id { get; set; }
        public ICollection<Category> Categories { get; set; }
    }
}