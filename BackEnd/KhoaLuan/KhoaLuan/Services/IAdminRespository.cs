using KhoaLuan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KhoaLuan.Services
{
    public interface IAdminRespository
    {
        bool Login(Admin admin);
    }
}
