using Microsoft.EntityFrameworkCore;
using swetHome.Models;

namespace swetHome.Context
{
	public class TroublesContextDb : DbContext
	{
		public DbSet<Troubles>? Troubles { get; set; }

		public TroublesContextDb(DbContextOptions<TroublesContextDb> options) : base(options)
		{
			Database.EnsureCreated();
		}
	}
}
