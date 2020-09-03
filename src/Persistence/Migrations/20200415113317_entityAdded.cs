using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class entityAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "InventorySupplyCategories",
                columns: table => new
                {
                    SupplyCategoryId = table.Column<string>(type: "varchar(20)", nullable: false),
                    SupplyCategoryName = table.Column<string>(type: "varchar(20)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InventorySupplyCategories", x => x.SupplyCategoryId);
                });

            migrationBuilder.CreateTable(
                name: "Permissions",
                columns: table => new
                {
                    PermissionId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    PermissionName = table.Column<string>(type: "varchar(20)", nullable: true),
                    Description = table.Column<string>(type: "varchar(20)", nullable: true),
                    PermissionCreatedDate = table.Column<DateTime>(type: "datetime", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Permissions", x => x.PermissionId);
                });

            migrationBuilder.CreateTable(
                name: "Providers",
                columns: table => new
                {
                    ProviderId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    ProviderName = table.Column<string>(type: "varchar(20)", nullable: false),
                    Street = table.Column<string>(type: "varchar(40)", nullable: true),
                    City = table.Column<string>(type: "varchar(40)", nullable: true),
                    Departament = table.Column<string>(type: "varchar(40)", nullable: true),
                    Country = table.Column<string>(type: "varchar(40)", nullable: true),
                    ZipCode = table.Column<string>(type: "varchar(40)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Providers", x => x.ProviderId);
                });

            migrationBuilder.CreateTable(
                name: "RestaurantMenus",
                columns: table => new
                {
                    RestaurantMenuId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    MenuVersion = table.Column<string>(type: "varchar(40)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RestaurantMenus", x => x.RestaurantMenuId);
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    RoleId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    RoleName = table.Column<string>(type: "varchar(20)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.RoleId);
                });

            migrationBuilder.CreateTable(
                name: "InventorySupplies",
                columns: table => new
                {
                    SupplyId = table.Column<string>(type: "varchar(20)", nullable: false),
                    SupplyBarcode = table.Column<string>(type: "varchar(20)", nullable: true),
                    SupplyName = table.Column<string>(type: "varchar(20)", nullable: true),
                    SupplyPrice = table.Column<decimal>(type: "decimal(6,2)", nullable: false),
                    SupplyStock = table.Column<decimal>(type: "decimal(6,2)", nullable: false),
                    SupplyCategoryId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InventorySupplies", x => x.SupplyId);
                    table.ForeignKey(
                        name: "FK_InventorySupplies_InventorySupplyCategories_SupplyCategoryId",
                        column: x => x.SupplyCategoryId,
                        principalTable: "InventorySupplyCategories",
                        principalColumn: "SupplyCategoryId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MenuCategories",
                columns: table => new
                {
                    MenuCategoryId = table.Column<string>(type: "varchar(20)", nullable: false),
                    MenuCategoryName = table.Column<string>(type: "varchar(20)", nullable: true),
                    RestaurantMenuId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MenuCategories", x => x.MenuCategoryId);
                    table.ForeignKey(
                        name: "FK_MenuCategories_RestaurantMenus_RestaurantMenuId",
                        column: x => x.RestaurantMenuId,
                        principalTable: "RestaurantMenus",
                        principalColumn: "RestaurantMenuId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RolePermissions",
                columns: table => new
                {
                    RoleId = table.Column<int>(nullable: false),
                    PermissionId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RolePermissions", x => new { x.RoleId, x.PermissionId });
                    table.ForeignKey(
                        name: "FK_RolePermissions_Permissions_PermissionId",
                        column: x => x.PermissionId,
                        principalTable: "Permissions",
                        principalColumn: "PermissionId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RolePermissions_Roles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Roles",
                        principalColumn: "RoleId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MenuProducts",
                columns: table => new
                {
                    MenuItemId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    ItemName = table.Column<string>(type: "varchar(20)", nullable: true),
                    ItemDescripcion = table.Column<string>(type: "varchar(20)", nullable: true),
                    ItemPrice = table.Column<decimal>(type: "decimal(6,2)", nullable: false),
                    MenuCategoryId = table.Column<string>(type: "varchar(20)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MenuProducts", x => x.MenuItemId);
                    table.ForeignKey(
                        name: "FK_MenuProducts_MenuCategories_MenuCategoryId",
                        column: x => x.MenuCategoryId,
                        principalTable: "MenuCategories",
                        principalColumn: "MenuCategoryId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MenuItemSupplies",
                columns: table => new
                {
                    MenuItemId = table.Column<int>(nullable: false),
                    SupplyId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MenuItemSupplies", x => new { x.MenuItemId, x.SupplyId });
                    table.ForeignKey(
                        name: "FK_MenuItemSupplies_MenuProducts_MenuItemId",
                        column: x => x.MenuItemId,
                        principalTable: "MenuProducts",
                        principalColumn: "MenuItemId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MenuItemSupplies_InventorySupplies_SupplyId",
                        column: x => x.SupplyId,
                        principalTable: "InventorySupplies",
                        principalColumn: "SupplyId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    UserName = table.Column<string>(type: "varchar(20)", nullable: true),
                    EmployeeId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    EmployeeId = table.Column<string>(type: "varchar(20)", nullable: false),
                    FirstName = table.Column<string>(type: "varchar(20)", nullable: true),
                    MiddleName = table.Column<string>(type: "varchar(20)", nullable: true),
                    LastName1 = table.Column<string>(type: "varchar(20)", nullable: true),
                    LastName2 = table.Column<string>(type: "varchar(20)", nullable: true),
                    EmployeeSex = table.Column<string>(type: "varchar(20)", nullable: true),
                    EmployeePhone = table.Column<string>(type: "varchar(20)", nullable: true),
                    EmployeeDayOfBirth = table.Column<DateTime>(type: "datetime", nullable: true),
                    Puesto = table.Column<string>(type: "varchar(20)", nullable: true),
                    Estado = table.Column<string>(type: "varchar(20)", nullable: true),
                    UserId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.EmployeeId);
                    table.ForeignKey(
                        name: "FK_Employees_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserRoles",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false),
                    RoleId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_UserRoles_Roles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Roles",
                        principalColumn: "RoleId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserRoles_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Employees_UserId",
                table: "Employees",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_InventorySupplies_SupplyCategoryId",
                table: "InventorySupplies",
                column: "SupplyCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_MenuCategories_RestaurantMenuId",
                table: "MenuCategories",
                column: "RestaurantMenuId");

            migrationBuilder.CreateIndex(
                name: "IX_MenuItemSupplies_SupplyId",
                table: "MenuItemSupplies",
                column: "SupplyId");

            migrationBuilder.CreateIndex(
                name: "IX_MenuProducts_MenuCategoryId",
                table: "MenuProducts",
                column: "MenuCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_RolePermissions_PermissionId",
                table: "RolePermissions",
                column: "PermissionId");

            migrationBuilder.CreateIndex(
                name: "IX_UserRoles_RoleId",
                table: "UserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_EmployeeId",
                table: "Users",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_UserName_EmployeeId",
                table: "Users",
                columns: new[] { "UserName", "EmployeeId" },
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Employees_EmployeeId",
                table: "Users",
                column: "EmployeeId",
                principalTable: "Employees",
                principalColumn: "EmployeeId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Employees_Users_UserId",
                table: "Employees");

            migrationBuilder.DropTable(
                name: "MenuItemSupplies");

            migrationBuilder.DropTable(
                name: "Providers");

            migrationBuilder.DropTable(
                name: "RolePermissions");

            migrationBuilder.DropTable(
                name: "UserRoles");

            migrationBuilder.DropTable(
                name: "MenuProducts");

            migrationBuilder.DropTable(
                name: "InventorySupplies");

            migrationBuilder.DropTable(
                name: "Permissions");

            migrationBuilder.DropTable(
                name: "Roles");

            migrationBuilder.DropTable(
                name: "MenuCategories");

            migrationBuilder.DropTable(
                name: "InventorySupplyCategories");

            migrationBuilder.DropTable(
                name: "RestaurantMenus");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Employees");
        }
    }
}
