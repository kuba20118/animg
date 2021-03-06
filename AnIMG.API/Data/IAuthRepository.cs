using System.Threading.Tasks;
using AnIMG.API.Models;

namespace AnIMG.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Login(string userName, string password);
         Task<User> Register(User user, string password);
         Task<bool> UserExists(string userName);
         
    }
}