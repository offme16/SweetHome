using Microsoft.EntityFrameworkCore;
using swetHome.Models;

namespace swetHome.Context
{
	public class UsersContextDb : DbContext
	{
		public DbSet<Users>? Users { get; set; }

		public UsersContextDb(DbContextOptions<UsersContextDb> options) : base(options)
		{
			Database.EnsureCreated();
		}
	}
}
