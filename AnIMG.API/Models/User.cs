using System;
using System.Collections.Generic;

namespace AnIMG.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public byte[] PassHash { get; set; }
        public byte[] PassSalt { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        
        public ICollection<Image> Images { get; set; }

    }
}