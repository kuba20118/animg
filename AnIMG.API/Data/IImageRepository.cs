using System.Collections.Generic;
using System.Threading.Tasks;
using AnIMG.API.Models;

namespace AnIMG.API.Data
{
    public interface IImageRepository : IGenericRepository
    {
         Task<IEnumerable<Category>> GetCategories();
         Task<IEnumerable<Category>> GetImgCategories(int id);
          
    }
}