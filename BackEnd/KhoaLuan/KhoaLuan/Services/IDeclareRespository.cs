using KhoaLuan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KhoaLuan.Services
{
    public interface IDeclareRespository
    {
        List<Declare> GetAllDeclare();
        Declare GetDeclare(int declareId);
        void AddDeclare(Declare declare);
        void DeleteDeclare(int declareId);
    }
}
