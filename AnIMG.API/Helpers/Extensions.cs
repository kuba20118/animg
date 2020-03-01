using System;
using System.Linq;
using AnIMG.API.Data;
using Microsoft.AspNetCore.Http;

namespace AnIMG.API.Helpers
{
    public static class Extensions
    {
        public static void AddAplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Acccess-Control-Expose-Headers","Application-Error");
            response.Headers.Add("Access-Control-Allow-Orgin","*");            
        }
    }
}