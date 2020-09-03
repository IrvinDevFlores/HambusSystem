using Microsoft.AspNetCore.Hosting; //<-- Here it is
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Persistence;
using Persistence.Contexts;
using System;
using System.IO;
namespace APIClient
{
    public class Program
    {
        public static void Main(string[] args)
        {
           var host =   CreateHostBuilder(args).Build();

            using(var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                try
                {
                    var context = services.GetRequiredService<HambusDbContext>();
                    context.Database.Migrate();
                    Seed.SeedData(context);
                }catch(Exception e)
                {
                    var looger = services.GetRequiredService<ILogger<Program>>();

                    looger.LogError(e,"Error  al migrar en progam.cs");
                }
            }
            host.Run();
        }


     
        public static IHostBuilder CreateHostBuilder(string[] args) => (
            //Configure webserver
             Host.CreateDefaultBuilder(args)
                 .ConfigureWebHostDefaults(webBuilder =>
                    {   
                        string localhost = "127.0.0.1";
                         string ip = "192.168.0.5";
                         ip  = localhost;            
                        webBuilder .UseUrls($"https://{ip}:5000");
                        webBuilder .UseContentRoot(Directory.GetCurrentDirectory());
                        webBuilder.UseKestrel();
                        webBuilder .UseStartup<Startup>();
                    })
                );

    }
}
