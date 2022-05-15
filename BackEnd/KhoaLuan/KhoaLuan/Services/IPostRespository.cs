using KhoaLuan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KhoaLuan.Services
{
    public interface IPostRespository
    {
        List<Post> GetAllPosts();
        Post GetPost(int postId);
        void AddPost(Post post);
        void UpdatePost(Post post);
        void DeletePost(int postId);
        List<Post> GetLastedPost(int size);
        List<Post> GetAllPost(string search);
    }
}
