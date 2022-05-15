using KhoaLuan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KhoaLuan.Services
{
    public class SupportRespository : ISupportRespository
    {
        private readonly KhoaLuanContext _context;

        public SupportRespository(KhoaLuanContext context)
        {
            _context = context;
        }
        public void AddSupport(Support support)
        {
            _context.Supports.Add(support);
            _context.SaveChanges();
        }

        public void DeleteSupport(int supportId)
        {
            var item = _context.Supports.Find(supportId);
            _context.Supports.Remove(item);
            _context.SaveChanges();
        }

        public List<Support> GetAllSupport()
        {
            return _context.Supports.ToList();
        }

        public Support GetSupport(int supportId)
        {
            return _context.Supports.Find(supportId);
        }
    }
}
