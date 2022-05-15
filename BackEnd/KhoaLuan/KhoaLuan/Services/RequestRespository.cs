using KhoaLuan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KhoaLuan.Services
{
    public class RequestRespository : IRequestRespository
    {
        private readonly KhoaLuanContext _context;

        public RequestRespository(KhoaLuanContext context)
        {
            _context = context;
        }
        public void AddRequest(Request request)
        {
            _context.Requests.Add(request);
            _context.SaveChanges();
        }

        public void DeleteRequest(int requestId)
        {
            var item = _context.Requests.Find(requestId);
            _context.Requests.Remove(item);
            _context.SaveChanges();
        }

        public List<Request> GetAllRequest()
        {
            return _context.Requests.ToList();
        }

        public Request GetRequest(int requestId)
        {
            return _context.Requests.Find(requestId);
        }

        public void UpdateRequest(int requestId)
        {
            var item = _context.Requests.SingleOrDefault(re => re.Id == requestId);
            if (item != null)
            {
                item.TinhTrang = true;
                _context.SaveChanges();
            }
        }
    }
}
