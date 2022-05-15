using System;
using System.Collections.Generic;

#nullable disable

namespace KhoaLuan.Models
{
    public partial class Post
    {
        public int Id { get; set; }
        public string TieuDe { get; set; }
        public string MoTa { get; set; }
        public string NoiDung { get; set; }
        public DateTime? NgayTao { get; set; }
        public string ImgUrl { get; set; }
    }
}
