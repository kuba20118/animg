using System.Collections.Generic;
using System.Threading.Tasks;
using AnIMG.API.Models;

namespace AnIMG.API.Data
{
    public interface IUserRepository : IGenericRepository
    {
         Task<IEnumerable<User>> GetUsers();
         Task<IEnumerable<Image>> GetImages();
         Task<User> GetUser(int id);
         Task<Image> GetImage(int id);
         Task<IEnumerable<Image>> GetImagesByCategories(string category);

    }
}