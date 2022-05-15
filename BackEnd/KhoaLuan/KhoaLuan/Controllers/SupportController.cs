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

    public class SupportController : ControllerBase
    {
        private readonly ISupportRespository _supportRespository;

        public SupportController(ISupportRespository supportRespository)
        {
            _supportRespository = supportRespository;
        }
        [HttpGet]
        public IActionResult GetAllSupport()
        {
            try
            {
                return Ok(_supportRespository.GetAllSupport());
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpGet("{supportId}")]
        public IActionResult GetSupport(int supportId)
        {
            try
            {
                return Ok(_supportRespository.GetSupport(supportId));
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpPost]
        public IActionResult AddDeclare(Support support)
        {
            try
            {
                _supportRespository.AddSupport(support);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpDelete("{supportId}")]
        public IActionResult DeleteSupport(int supportId)
        {
            try
            {
                _supportRespository.DeleteSupport(supportId);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
