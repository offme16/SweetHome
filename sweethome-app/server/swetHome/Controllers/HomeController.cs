using Microsoft.AspNetCore.Mvc;
using swetHome.Context;

namespace swetHome.Controllers
{
	public class HomeController : Controller
	{
		public static readonly HttpClient client = new HttpClient();
		public readonly UsersContextDb _usercontextDatabase;
		public readonly TroublesContextDb _troublescontextDb;

		public HomeController(UsersContextDb userscontextDatabase, TroublesContextDb troublescontextDatabase )
		{
			_usercontextDatabase = userscontextDatabase;
			_troublescontextDb = troublescontextDatabase;
		}
	}
}
