using System.Diagnostics;
using System.Security.Claims;
using System.Threading.Tasks;
using AnIMG.API.Data;
using AnIMG.API.Dtos;
using AnIMG.API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AnIMG.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class CategoriesController : ControllerBase
    {
        private readonly IImageRepository repo;
        private readonly IMapper mapper;
        private readonly IUserRepository repo2;

        public CategoriesController(IImageRepository repo,
         IMapper mapper, IUserRepository repo2)
        {
            this.repo = repo;
            this.mapper = mapper;
            this.repo2 = repo2;
        }

        [HttpGet]
        public async Task<IActionResult> GetCategories()
        {
            var cats = await repo.GetCategories();
            return Ok(cats);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetImgCategories(int id)
        {
            var cats = await repo.GetImgCategories(id);
            return Ok(cats);
        }

        [HttpPost("add/{id}")]
        public async Task<IActionResult> AddCategory(AddCategoryDto text, int id)
        {           
            var image = await repo2.GetImage(id);
            if(image == null)
                return BadRequest("Nie odnaleziono zdjęcia.");
                
            var userId =  image.UserId;

            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();
            
            var newCategory = new Category
            {
                Name = text.text
            };

            image.Categories.Add(newCategory);

            if (await repo.SaveAll())
            {
                return Ok(newCategory);
            }

            return BadRequest("Nie można dodać kategorii.");
        }
    
    }

}