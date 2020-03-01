using AnIMG.API.Controllers;
using AnIMG.API.Data;
using AnIMG.API.Dtos;
using AnIMG.API.Models;
using AutoMapper;

namespace AnIMG.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {                   
            CreateMap<User, UserForListDto>();
            CreateMap<NewImageDto, Image>();
            CreateMap<Image, ImageDto>()
               .ForMember(dest => dest.AddedBy, opt =>{
              opt.MapFrom(src => src.User.UserName);
              });          
        }
    }
}