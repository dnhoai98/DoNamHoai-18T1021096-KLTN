using KhoaLuan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KhoaLuan.Services
{
    public interface IRequestRespository
    {
        List<Request> GetAllRequest();
        Request GetRequest(int requestId);
        void AddRequest(Request request);
        void DeleteRequest(int requestId);
        void UpdateRequest(int requestId);
    }
}
