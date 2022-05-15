using KhoaLuan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KhoaLuan.Services
{
    public class AdminRespository : IAdminRespository
    {
        private readonly KhoaLuanContext _context;
        public AdminRespository(KhoaLuanContext context)
        {
            _context = context;
        }
        public bool Login(Admin admin)
        {
            var item = _context.Admins.Where(m => m.UserName == admin.UserName && m.Password == admin.Password).SingleOrDefault();
            if(item != null)
            {
                return true;
            }
            return false;
        }
    }
}
