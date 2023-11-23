using Microsoft.EntityFrameworkCore;
using swetHome.Context;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors(cors => cors.AddPolicy("all", option => {
	option.AllowAnyOrigin();
	option.AllowAnyMethod();
	option.AllowAnyHeader();
}));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddEntityFrameworkNpgsql();
var connection = builder.Configuration.GetConnectionString("DBTroubles");
builder.Services.AddDbContext<TroublesContextDb>(e =>
e.UseNpgsql(connection));
var connection1 = builder.Configuration.GetConnectionString("DBUsers");
builder.Services.AddDbContext<UsersContextDb>(e =>
e.UseNpgsql(connection));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}
app.UseCors("all");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
