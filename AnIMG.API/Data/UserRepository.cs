using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AnIMG.API.Models;
using Microsoft.EntityFrameworkCore;

namespace AnIMG.API.Data
{
    public class UserRepository : GenericRepository, IUserRepository
    {
        private readonly DataContext context;
        public UserRepository(DataContext context) : base(context)
        {
            this.context = context;
        }


        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await context.Users
                .Include(x => x.Images)
                .ThenInclude(x => x.Categories)
                .ToListAsync();

            return users;
        }

        public async Task<User> GetUser(int id)
        {
            var user = await context.Users
                .Include(x => x.Images)
                .ThenInclude(x => x.Categories)
                .FirstOrDefaultAsync(x => x.Id == id);
            return user;
        }

        public async Task<IEnumerable<Image>> GetImages()
        {

            var images = await context.Images
                .Include(x => x.Categories)
                .Include(x => x.User)
                .ToListAsync();

            return images;
        }

        public async Task<Image> GetImage(int id)
        {
            var image = await context.Images
                .Include(x => x.Categories)
                .Include(x => x.User)
                .FirstOrDefaultAsync(x => x.Id == id);

            return image;
        }


        public async Task<IEnumerable<Image>> GetImagesByCategories(string category)
        {
            var images = await context.Images
                 .Include(x => x.Categories.Where(y => y.Name.Equals(category)))  
                 //.Include(x =>x.Categories)             
                 .Include(x => x.User)
                 .ToListAsync();

            return images;
        }

    }
}