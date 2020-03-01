using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AnIMG.API.Data;
using AnIMG.API.Dtos;
using AnIMG.API.Helpers;
using AnIMG.API.Models;
using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace AnIMG.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly IUserRepository repo;
        private readonly IMapper mapper;
        private readonly IOptions<CloudinarySettings> cloudinaryConfig;
        private Cloudinary cloudinary;

        public ImagesController(IUserRepository repo, IMapper mapper, IOptions<CloudinarySettings> cloudinaryConfig)
        {
            this.mapper = mapper;
            this.cloudinaryConfig = cloudinaryConfig;
            this.repo = repo;

            Account account = new Account(
                "dwsfr6a9y",
                "484372512251125",
                "CTozy7VUtczw88hrB4rgwwpHsjw"
            );

            cloudinary = new Cloudinary(account);
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetImages()
        {
            var images = await repo.GetImages();
            var imagesToReturn = mapper.Map<IEnumerable<ImageDto>>(images);

            return Ok(imagesToReturn);
        }

        [HttpGet("{id}", Name = "GetImage")]
        public async Task<IActionResult> GetImage(int id)
        {
            var image = await repo.GetImage(id);
            var imageToReturn = mapper.Map<ImageDto>(image);

            return Ok(imageToReturn);
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddImage([FromForm] NewImageDto image)
        {
            var file = image.File;
            var uploadResult = new ImageUploadResult();

            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams()
                    {
                        File = new FileDescription(file.Name, stream),
                        Transformation = new Transformation().Width(500).Height(500).Crop("fill").Gravity("face")
                    };

                    uploadResult = cloudinary.Upload(uploadParams);
                }
            }

            image.Url = uploadResult.Uri.ToString();
            image.public_id = uploadResult.PublicId.ToString();
        

            var finalImg = mapper.Map<Image>(image);

            var id = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var user = await repo.GetUser(id);

            user.Images.Add(finalImg);

            if (await repo.SaveAll())
            {
                var imgToReturn = mapper.Map<ImageDto>(finalImg);
                return CreatedAtRoute("GetImage", new {id = finalImg.Id}, imgToReturn);
            }

            return BadRequest("Nie można dodać obrazka.");
        }

        [HttpGet("category/{category}")]
        public async Task<IActionResult> GetImagesByCategories(string category)
        {
            var images = await repo.GetImagesByCategories(category);
            var imagesToReturn = mapper.Map<IEnumerable<ImageDto>>(images);

            return Ok(imagesToReturn);
        }


    }
}