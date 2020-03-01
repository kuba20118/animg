using System;
using System.Text;
using System.Threading.Tasks;
using AnIMG.API.Models;
using Microsoft.EntityFrameworkCore;

namespace AnIMG.API.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext context;

        #region public
        public AuthRepository(DataContext context)
        {
            this.context = context;
        }
        public async Task<User> Login(string userName, string password)
        {
            var user = await context.Users.FirstOrDefaultAsync(x => x.UserName == userName);

            if (user == null)
                return null;

            if (!VerifyHash(password, user.PassHash, user.PassSalt))
                return null;

            return user;
        }
        public async Task<User> Register(User user, string password)
        {
            byte[] passHash;
            byte[] passSalt;
            GenerateHashSalt(password, out passHash, out passSalt);

            user.PassHash = passHash;
            user.PassSalt = passSalt;

            await context.Users.AddAsync(user);
            await context.SaveChangesAsync();

            return user;
        }
        public async Task<bool> UserExists(string userName)
        {
            if (await context.Users.AnyAsync(x => x.UserName == userName))
                return true;
            else
                return false;

        }

        #endregion

        #region private
        private void GenerateHashSalt(string password, out byte[] passHash, out byte[] passSalt)
        {

            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passSalt = hmac.Key;
                passHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            }
        }
        private bool VerifyHash(string password, byte[] passHash, byte[] passSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passSalt))
            {

                var ComputedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
                if (ComputedHash.Length == passHash.Length)
                {
                    for (int i = 0; i < ComputedHash.Length; i++)
                    {
                        if (ComputedHash[i] != passHash[i])
                            return false;
                    }
                }


                return true;
            }
        }

        #endregion
    }
}