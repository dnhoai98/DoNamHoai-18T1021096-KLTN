using System;
using System.Collections.Generic;

#nullable disable

namespace KhoaLuan.Models
{
    public partial class Declare
    {
        public int Id { get; set; }
        public string HoTen { get; set; }
        public string Sdt { get; set; }
        public string MaSv { get; set; }
        public DateTime NgaySinh { get; set; }
        public string GioiTinh { get; set; }
        public string QuocTich { get; set; }
        public string PhuongTienDiChuyen { get; set; }
        public string SoHieuPhuongTien { get; set; }
        public string SoGhe { get; set; }
        public DateTime NgayKhoiHanh { get; set; }
        public DateTime NgayDen { get; set; }
        public string DiaChiKhoiHanh { get; set; }
        public string DiaChiTamTru { get; set; }
        public string GhiChu { get; set; }
    }
}
