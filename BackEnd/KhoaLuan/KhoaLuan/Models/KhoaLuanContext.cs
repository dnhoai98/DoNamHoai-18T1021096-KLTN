using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace KhoaLuan.Models
{
    public partial class KhoaLuanContext : DbContext
    {
        public KhoaLuanContext()
        {
        }

        public KhoaLuanContext(DbContextOptions<KhoaLuanContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admin> Admins { get; set; }
        public virtual DbSet<Declare> Declares { get; set; }
        public virtual DbSet<Post> Posts { get; set; }
        public virtual DbSet<Request> Requests { get; set; }
        public virtual DbSet<Support> Supports { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DNH\\DNH;Database=KhoaLuan;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Admin>(entity =>
            {
                entity.ToTable("Admin");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Declare>(entity =>
            {
                entity.ToTable("Declare");

                entity.Property(e => e.DiaChiKhoiHanh)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.DiaChiTamTru)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.GhiChu).IsRequired();

                entity.Property(e => e.GioiTinh)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.HoTen)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.MaSv)
                    .IsRequired()
                    .HasMaxLength(20)
                    .HasColumnName("MaSV");

                entity.Property(e => e.NgayDen).HasColumnType("date");

                entity.Property(e => e.NgayKhoiHanh).HasColumnType("date");

                entity.Property(e => e.NgaySinh).HasColumnType("date");

                entity.Property(e => e.PhuongTienDiChuyen)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.QuocTich)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Sdt)
                    .IsRequired()
                    .HasMaxLength(20)
                    .HasColumnName("SDT");

                entity.Property(e => e.SoGhe).HasMaxLength(50);

                entity.Property(e => e.SoHieuPhuongTien).HasMaxLength(50);
            });

            modelBuilder.Entity<Post>(entity =>
            {
                entity.Property(e => e.MoTa)
                    .IsRequired()
                    .HasMaxLength(1024);

                entity.Property(e => e.NgayTao)
                    .HasColumnType("date")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.NoiDung).IsRequired();

                entity.Property(e => e.TieuDe)
                    .IsRequired()
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<Request>(entity =>
            {
                entity.ToTable("Request");

                entity.Property(e => e.DiaDiem)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.DonVi)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.GioiTinh)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.HoTen)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.MaSv)
                    .IsRequired()
                    .HasMaxLength(20)
                    .HasColumnName("MaSV");

                entity.Property(e => e.NgaySinh).HasColumnType("date");

                entity.Property(e => e.Sdt)
                    .IsRequired()
                    .HasMaxLength(20)
                    .HasColumnName("SDT");

                entity.Property(e => e.TenHoatDong)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.ThoiGianBatDau)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.ThoiGianKetThuc)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.TinhTrang).HasDefaultValueSql("((0))");
            });

            modelBuilder.Entity<Support>(entity =>
            {
                entity.ToTable("Support");

                entity.Property(e => e.DiaChiTamTru)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.GhiChu).IsRequired();

                entity.Property(e => e.GioiTinh)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.HoTen)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.MaSv)
                    .IsRequired()
                    .HasMaxLength(20)
                    .HasColumnName("MaSV");

                entity.Property(e => e.NgaySinh).HasColumnType("date");

                entity.Property(e => e.Sdt)
                    .IsRequired()
                    .HasMaxLength(20)
                    .HasColumnName("SDT");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
