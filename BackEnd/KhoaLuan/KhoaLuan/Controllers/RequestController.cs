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

    public class RequestController : ControllerBase
    {
        private readonly IRequestRespository _requestRespository;

        public RequestController(IRequestRespository requestRespository)
        {
            _requestRespository = requestRespository;
        }
        [HttpGet]
        public IActionResult GetAllRequest()
        {
            try
            {
                return Ok(_requestRespository.GetAllRequest());
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpGet("{requestId}")]
        public IActionResult GetRequest(int requestId)
        {
            try
            {
                return Ok(_requestRespository.GetRequest(requestId));
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpPost]
        public IActionResult AddRequest(Request request)
        {
            try
            {
                _requestRespository.AddRequest(request);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpDelete("{requestId}")]
        public IActionResult DeleteRequest(int requestId)
        {
            try
            {
                _requestRespository.DeleteRequest(requestId);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpPut("{requestId}")]
        public IActionResult UpdateRequest(int requestId)
        {
            try
            {
                _requestRespository.UpdateRequest(requestId);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
