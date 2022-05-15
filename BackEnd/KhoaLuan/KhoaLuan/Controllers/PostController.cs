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
    public class PostController : ControllerBase
    {
        private readonly IPostRespository _postRespository;

        public PostController(IPostRespository postRespository)
        {
            _postRespository = postRespository;
        }
        [HttpGet]
        public IActionResult GetAllPosts()
        {
            try
            {
                return Ok(_postRespository.GetLastedPost(5));
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpGet]
        public IActionResult GetAllPost(string search)
        {
            try
            {
                return Ok(_postRespository.GetAllPost(search));
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpGet("{postId}")]
        public IActionResult GetPost(int postId)
        {
            try
            {
                var data = _postRespository.GetPost(postId);
                if(data != null)
                {
                    return Ok(data);
                }
                else
                {
                    return NotFound();
                }
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpPut("{postId}")]
        public IActionResult UpdatePost(int postId, Post post)
        {
            if(postId != post.Id)
            {
                return NotFound();
            }
            try
            {
                _postRespository.UpdatePost(post);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpDelete("{postId}")]
        public IActionResult DeletePost(int postId)
        {
            try
            {
                _postRespository.DeletePost(postId);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpPost] 
        public IActionResult AddPost(Post post)
        {
            try
            {
                _postRespository.AddPost(post);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
        
    }
}
