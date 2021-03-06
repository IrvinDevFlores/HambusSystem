using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;

using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Persistence.Contexts;

using MediatR;
using System;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Application.Employees;
using System.Collections.Generic;
using Domain.Entities.Staff;


using static Application.Employees.AllEmployees;

namespace APIClient
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        private string origin = "CorsPolicy";
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();

            services.AddCors(op =>
           {
               op.AddPolicy(origin, policy =>
               {
                   policy.AllowAnyOrigin();
               });
           });



            services.AddDbContextPool<HambusDbContext>(options => options

                .UseMySql(Configuration.GetConnectionString("mysqlConnection"), o => o.EnableRetryOnFailure()
             )

          //  .UseSqlServer(Configuration.GetConnectionString("offlineSqlServer"))
      );




            services.AddMediatR(typeof(Startup).Assembly);

            services.AddTransient<IRequestHandler<Query, List<Employee>>, AllEmployees.Handler>();

            services.AddTransient<IRequestHandler<GetEmployeeByIdQuery, EmployeeResponse>, GetEmployeeHandler>();

            services.AddTransient<IRequestHandler<CreateEmployeeCommand, Unit>, CreateEmployeeHandler>();
            services.AddTransient<IRequestHandler<EditEmployeeCommand, Unit>, EditEmployeeHandler>();


            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Latest);

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseCors(origin);

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
