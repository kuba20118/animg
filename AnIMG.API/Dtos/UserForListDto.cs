using System;
using System.Collections.Generic;
using AnIMG.API.Models;

namespace AnIMG.API.Dtos
{
    public class UserForListDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }

        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }

        public ICollection<ImageDto> Images { get; set; }

    }
}