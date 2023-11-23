using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using swetHome.Context;

namespace swetHome.Controllers
{
	public class UsersDbController : Controller
	{
		public static readonly HttpClient client = new HttpClient();
		public readonly UsersContextDb _usercontextDatabase;

		public UsersDbController(UsersContextDb userscontextDatabase)
		{
			_usercontextDatabase = userscontextDatabase;
			
		}
		[HttpGet]
		[Route("Users")]
		public async Task<IActionResult> GetUsers(int _limit, int page = 1)
		{
		



			if (_limit <= 0 || page <= 0)
			{

				return Ok(await _usercontextDatabase.Users!.ToListAsync());
			}
			var result = await _usercontextDatabase.Users!
				  .OrderBy(x => x.UsersId)
				  .Take(page * _limit)
					 .ToListAsync();



			return Ok(result);





		}
	}
}
