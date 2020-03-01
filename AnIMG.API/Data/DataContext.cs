using AnIMG.API.Models;
using Microsoft.EntityFrameworkCore;
 
namespace AnIMG.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}
        
        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<Category> Categories{get;set;}
        


    }
}