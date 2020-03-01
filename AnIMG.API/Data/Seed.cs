using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using AnIMG.API.Models;
using Newtonsoft.Json;

namespace AnIMG.API.Data
{
    public class Seed
    {
        private readonly DataContext context;

        public Seed(DataContext context)
        {
            this.context = context;
        }

        public void SeedUsers()
        {
            if (!context.Users.Any())
            {
                var userData = File.ReadAllText("Data/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userData);
                foreach (var user in users)
                {
                    byte[] passHash, passSalt;
                    GenerateHashSalt("password", out passHash, out passSalt);

                    user.PassHash = passHash;
                    user.PassSalt = passSalt;
                    user.UserName = user.UserName.ToLower();
                    
                    context.Users.Add(user);
                }
                context.SaveChanges();
            }

        }

        private void GenerateHashSalt(string password, out byte[] passHash, out byte[] passSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passSalt = hmac.Key;
                passHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            }
        }
    }
}