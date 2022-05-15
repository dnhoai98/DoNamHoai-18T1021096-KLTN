using System;
using System.Collections.Generic;

#nullable disable

namespace KhoaLuan.Models
{
    public partial class Request
    {
        public int Id { get; set; }
        public string HoTen { get; set; }
        public string Sdt { get; set; }
        public string MaSv { get; set; }
        public DateTime NgaySinh { get; set; }
        public string GioiTinh { get; set; }
        public string DonVi { get; set; }
        public string TenHoatDong { get; set; }
        public string DiaDiem { get; set; }
        public string ThoiGianBatDau { get; set; }
        public string ThoiGianKetThuc { get; set; }
        public bool? TinhTrang { get; set; }
    }
}
