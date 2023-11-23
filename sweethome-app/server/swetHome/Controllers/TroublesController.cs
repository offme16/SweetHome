using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using swetHome.Context;

namespace swetHome.Controllers
{
	public class TroublesController : Controller
	{
		public static readonly HttpClient client = new HttpClient();
		public readonly TroublesContextDb _troublescontextDb;

		public TroublesController(TroublesContextDb troublescontextDatabase)
		{
			_troublescontextDb = troublescontextDatabase;

		}
		[HttpGet]
		[Route("Users/troubles")]
		public async Task<IActionResult> GetUsers(int _limit, int page = 1)
		{




			if (_limit <= 0 || page <= 0)
			{

				return Ok(await _troublescontextDb.Troubles!.ToListAsync());
			}
			var result = await _troublescontextDb.Troubles!
				  .OrderBy(x => x.TroublesId)
				  .Take(page * _limit)
					 .ToListAsync();



			return Ok(result);





		}
	}
}
