using KhoaLuan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KhoaLuan.Services
{
    public class DeclareRepository : IDeclareRespository
    {
        private readonly KhoaLuanContext _context;

        public DeclareRepository(KhoaLuanContext context)
        {
            _context = context;
        }
        public void AddDeclare(Declare declare)
        {
            _context.Declares.Add(declare);
            _context.SaveChanges();
        }

        public void DeleteDeclare(int declareId)
        {
            var item = _context.Declares.Find(declareId);
            _context.Declares.Remove(item);
            _context.SaveChanges();
        }

        public List<Declare> GetAllDeclare()
        {
            return _context.Declares.ToList();
        }

        public Declare GetDeclare(int declareId)
        {
            return _context.Declares.Find(declareId);
        }
    }
}
