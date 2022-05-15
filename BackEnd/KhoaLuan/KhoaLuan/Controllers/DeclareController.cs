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
    public class DeclareController : ControllerBase
    {
        private readonly IDeclareRespository _declareRespository;

        public DeclareController(IDeclareRespository declareRespository)
        {
            _declareRespository = declareRespository;
        }
        [HttpGet]
        public IActionResult GetAllDeclare()
        {
            try
            {
                return Ok(_declareRespository.GetAllDeclare());
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpGet("{declareId}")]
        public IActionResult GetDeclare(int declareId)
        {
            try
            {
                return Ok(_declareRespository.GetDeclare(declareId));
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpPost] 
        public IActionResult AddDeclare(Declare declare)
        {
            try
            {
                _declareRespository.AddDeclare(declare);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpDelete("{declareId}")]
        public IActionResult DeleteDeclare(int declareId)
        {
            try
            {
                _declareRespository.DeleteDeclare(declareId);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
