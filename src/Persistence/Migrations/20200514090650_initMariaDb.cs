using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class initMariaDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InventorySupplies_InventorySupplyCategories_SupplyCategoryId",
                table: "InventorySupplies");

            migrationBuilder.DropPrimaryKey(
                name: "PK_InventorySupplyCategories",
                table: "InventorySupplyCategories");

            migrationBuilder.RenameTable(
                name: "InventorySupplyCategories",
                newName: "InventoryCategorySupplies");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "Users",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Users",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "MenuProducts",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "MenuCategories",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddPrimaryKey(
                name: "PK_InventoryCategorySupplies",
                table: "InventoryCategorySupplies",
                column: "SupplyCategoryId");

            migrationBuilder.CreateTable(
                name: "PaymentMethod",
                columns: table => new
                {
                    PaymentMethodId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    PaymentMethodName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentMethod", x => x.PaymentMethodId);
                });

            migrationBuilder.CreateTable(
                name: "TransactionDetails",
                columns: table => new
                {
                    TransactionDetailId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    TransactionId = table.Column<string>(nullable: true),
                    MenuItemId = table.Column<int>(nullable: false),
                    Quantity = table.Column<int>(nullable: false),
                    UnitPrice = table.Column<double>(nullable: false),
                    Discount = table.Column<double>(nullable: false),
                    TotalPrice = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TransactionDetails", x => x.TransactionDetailId);
                });

            migrationBuilder.CreateTable(
                name: "Transactions",
                columns: table => new
                {
                    TransactionId = table.Column<string>(nullable: false),
                    TransctionDate = table.Column<DateTime>(nullable: false),
                    TransactionSubtotal = table.Column<double>(nullable: false),
                    TransactionDiscount = table.Column<double>(nullable: false),
                    TransactionTax = table.Column<double>(nullable: false),
                    TransactionTotal = table.Column<double>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    PaymentMethodId = table.Column<int>(nullable: false),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transactions", x => x.TransactionId);
                    table.ForeignKey(
                        name: "FK_Transactions_PaymentMethod_PaymentMethodId",
                        column: x => x.PaymentMethodId,
                        principalTable: "PaymentMethod",
                        principalColumn: "PaymentMethodId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Transactions_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_PaymentMethodId",
                table: "Transactions",
                column: "PaymentMethodId");

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_UserId",
                table: "Transactions",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_InventorySupplies_InventoryCategorySupplies_SupplyCategoryId",
                table: "InventorySupplies",
                column: "SupplyCategoryId",
                principalTable: "InventoryCategorySupplies",
                principalColumn: "SupplyCategoryId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InventorySupplies_InventoryCategorySupplies_SupplyCategoryId",
                table: "InventorySupplies");

            migrationBuilder.DropTable(
                name: "TransactionDetails");

            migrationBuilder.DropTable(
                name: "Transactions");

            migrationBuilder.DropTable(
                name: "PaymentMethod");

            migrationBuilder.DropPrimaryKey(
                name: "PK_InventoryCategorySupplies",
                table: "InventoryCategorySupplies");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "MenuProducts");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "MenuCategories");

            migrationBuilder.RenameTable(
                name: "InventoryCategorySupplies",
                newName: "InventorySupplyCategories");

            migrationBuilder.AddPrimaryKey(
                name: "PK_InventorySupplyCategories",
                table: "InventorySupplyCategories",
                column: "SupplyCategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_InventorySupplies_InventorySupplyCategories_SupplyCategoryId",
                table: "InventorySupplies",
                column: "SupplyCategoryId",
                principalTable: "InventorySupplyCategories",
                principalColumn: "SupplyCategoryId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
