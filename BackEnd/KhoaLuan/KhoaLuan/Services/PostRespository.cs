using KhoaLuan.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KhoaLuan.Services
{
    public class PostRespository : IPostRespository
    {
        private readonly KhoaLuanContext _context;

        public PostRespository(KhoaLuanContext context)
        {
            _context = context;
        }
        public void AddPost(Post post)
        {
            _context.Posts.Add(post);
            _context.SaveChanges();
        }

        public void DeletePost(int postId)
        {
            var item = _context.Posts.Find(postId);
            _context.Posts.Remove(item);
            _context.SaveChanges();
        }

        public List<Post> GetAllPosts()
        {
            return _context.Posts.ToList();
        }

        public List<Post> GetAllPost(string search)
        {
            return _context.Posts.Where(p => p.TieuDe.Contains(search)).ToList();
        }

        public List<Post> GetLastedPost(int size)
        {
            return _context.Posts.OrderByDescending(p => p.NgayTao).Take(size).ToList();
        }

        public Post GetPost(int postId)
        {
            return _context.Posts.Find(postId);
        }

        public void UpdatePost(Post post)
        {
            _context.Entry(post).State = EntityState.Modified;
            _context.SaveChanges();
        }
    }
}
