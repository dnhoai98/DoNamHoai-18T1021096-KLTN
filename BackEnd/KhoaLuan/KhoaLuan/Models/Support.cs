using System;
using System.Collections.Generic;

#nullable disable

namespace KhoaLuan.Models
{
    public partial class Support
    {
        public int Id { get; set; }
        public string HoTen { get; set; }
        public string Sdt { get; set; }
        public string MaSv { get; set; }
        public DateTime NgaySinh { get; set; }
        public string GioiTinh { get; set; }
        public string DiaChiTamTru { get; set; }
        public string GhiChu { get; set; }
    }
}
