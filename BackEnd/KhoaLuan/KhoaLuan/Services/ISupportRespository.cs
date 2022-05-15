using KhoaLuan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KhoaLuan.Services
{
    public interface ISupportRespository
    {
        List<Support> GetAllSupport();
        Support GetSupport(int supportId);
        void AddSupport(Support support);
        void DeleteSupport(int supportId);
    }
}
