using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace swetHome.Models
{
	public class Troubles
	{
		[Key]
		public long TroublesId { get; set; }
		
		public string Problems { get; set; }
		
		public string Description { get; set; }
		public DateOnly DateOfSolution { get; set; }
		public string Review {  get; set; }

		//[ForeignKey("UserId")]
		//public long UserId { get; set; }	

	}
}
