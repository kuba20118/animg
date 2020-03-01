using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AnIMG.API.Models;
using Microsoft.EntityFrameworkCore;

namespace AnIMG.API.Data
{
    public class ImageRepository : GenericRepository, IImageRepository
    {
        private readonly DataContext context;
        public ImageRepository(DataContext context) : base(context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<Category>> GetCategories()
        {
            var cats = await context.Categories
                .ToListAsync();

            return cats;
        }

        public async Task<IEnumerable<Category>> GetImgCategories(int id)
        {
            var cats = await context.Categories                          
                .Where(x => x.ImageId == id)
                .ToListAsync();

            return cats;
        }

     
       
    }
}