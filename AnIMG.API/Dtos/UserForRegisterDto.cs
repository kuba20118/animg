using System.ComponentModel.DataAnnotations;

namespace AnIMG.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage = "Wymagana nazwa użytkownika")]
     public string UserName { get; set; }
        [Required(ErrorMessage = "Wymagane hasło")]
        [StringLength(12,MinimumLength=6,ErrorMessage="Hasło musi się składać z 6-12 znaków")]
        
     public string password { get; set; } 
        
    }
}