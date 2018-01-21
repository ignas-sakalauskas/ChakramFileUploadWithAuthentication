using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ProtectedWebApi.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("ok");
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post(IFormFile file)
        {
            if (file == null)
            {
                return BadRequest("Please upload a file");
            }
            else
            {
                return Ok(file.FileName);
            }
        }
    }
}
