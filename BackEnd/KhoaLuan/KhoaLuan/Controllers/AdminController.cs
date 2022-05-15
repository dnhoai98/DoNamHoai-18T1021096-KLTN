using KhoaLuan.Models;
using KhoaLuan.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KhoaLuan.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("MyCorsPolicy")]

    public class AdminController : ControllerBase
    {
        private readonly IAdminRespository _adminRespository;
        public AdminController(IAdminRespository adminRespository)
        {
            _adminRespository = adminRespository;
        }
        [HttpPost]
        public IActionResult Login(Admin admin)
        {
            try
            {
                if (_adminRespository.Login(admin))
                {
                    return Ok();
                }
                else
                {
                    return BadRequest();
                }
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
