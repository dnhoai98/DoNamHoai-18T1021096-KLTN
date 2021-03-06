USE [KhoaLuan]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 15/05/2022 3:38:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Admin]    Script Date: 15/05/2022 3:38:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Admin](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](100) NOT NULL,
	[Password] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_Admin] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Declare]    Script Date: 15/05/2022 3:38:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Declare](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[HoTen] [nvarchar](100) NOT NULL,
	[SDT] [nvarchar](20) NOT NULL,
	[MaSV] [nvarchar](20) NOT NULL,
	[NgaySinh] [date] NOT NULL,
	[GioiTinh] [nvarchar](10) NOT NULL,
	[QuocTich] [nvarchar](50) NOT NULL,
	[PhuongTienDiChuyen] [nvarchar](50) NOT NULL,
	[SoHieuPhuongTien] [nvarchar](50) NULL,
	[SoGhe] [nvarchar](50) NULL,
	[NgayKhoiHanh] [date] NOT NULL,
	[NgayDen] [date] NOT NULL,
	[DiaChiKhoiHanh] [nvarchar](255) NOT NULL,
	[DiaChiTamTru] [nvarchar](255) NOT NULL,
	[GhiChu] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Declare] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Posts]    Script Date: 15/05/2022 3:38:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Posts](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[TieuDe] [nvarchar](255) NOT NULL,
	[MoTa] [nvarchar](1024) NOT NULL,
	[NoiDung] [nvarchar](max) NOT NULL,
	[NgayTao] [datetime] NULL CONSTRAINT [DF_Posts_CreatedDate]  DEFAULT (getdate()),
	[ImgUrl] [nvarchar](max) NULL,
 CONSTRAINT [PK_Posts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Request]    Script Date: 15/05/2022 3:38:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Request](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[HoTen] [nvarchar](255) NOT NULL,
	[SDT] [nvarchar](20) NOT NULL,
	[MaSV] [nvarchar](20) NOT NULL,
	[NgaySinh] [date] NOT NULL,
	[GioiTinh] [nvarchar](10) NOT NULL,
	[DonVi] [nvarchar](50) NOT NULL,
	[TenHoatDong] [nvarchar](255) NOT NULL,
	[DiaDiem] [nvarchar](255) NOT NULL,
	[ThoiGianBatDau] [nvarchar](100) NOT NULL,
	[ThoiGianKetThuc] [nvarchar](100) NOT NULL,
	[TinhTrang] [bit] NULL CONSTRAINT [DF_Request_TinhTrang]  DEFAULT ((0)),
 CONSTRAINT [PK_Request] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Support]    Script Date: 15/05/2022 3:38:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Support](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[HoTen] [nvarchar](100) NOT NULL,
	[SDT] [nvarchar](20) NOT NULL,
	[MaSV] [nvarchar](20) NOT NULL,
	[NgaySinh] [date] NOT NULL,
	[GioiTinh] [nvarchar](10) NOT NULL,
	[DiaChiTamTru] [nvarchar](255) NOT NULL,
	[GhiChu] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Support] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Admin] ON 

INSERT [dbo].[Admin] ([Id], [UserName], [Password]) VALUES (1, N'admin', N'123')
SET IDENTITY_INSERT [dbo].[Admin] OFF
SET IDENTITY_INSERT [dbo].[Declare] ON 

INSERT [dbo].[Declare] ([Id], [HoTen], [SDT], [MaSV], [NgaySinh], [GioiTinh], [QuocTich], [PhuongTienDiChuyen], [SoHieuPhuongTien], [SoGhe], [NgayKhoiHanh], [NgayDen], [DiaChiKhoiHanh], [DiaChiTamTru], [GhiChu]) VALUES (1, N'ĐỖ NAM HOÀI', N'0965858434', N'18T1020196', CAST(N'1998-02-02' AS Date), N'Nam', N'Việt Nam', N'Xe máy', N'74H1 25261', N'', CAST(N'2022-05-05' AS Date), CAST(N'2022-05-07' AS Date), N'Lao Bảo, Quảng Trị', N'36/85 An Dương Vương', N'Không')
INSERT [dbo].[Declare] ([Id], [HoTen], [SDT], [MaSV], [NgaySinh], [GioiTinh], [QuocTich], [PhuongTienDiChuyen], [SoHieuPhuongTien], [SoGhe], [NgayKhoiHanh], [NgayDen], [DiaChiKhoiHanh], [DiaChiTamTru], [GhiChu]) VALUES (4, N'H', N'0965854324', N'18', CAST(N'1998-02-02' AS Date), N'n', N'V', N'A', N'a', N'a', CAST(N'2022-05-19' AS Date), CAST(N'2022-05-21' AS Date), N'sdg', N'sdg', N'sdg')
SET IDENTITY_INSERT [dbo].[Declare] OFF
SET IDENTITY_INSERT [dbo].[Posts] ON 

INSERT [dbo].[Posts] ([Id], [TieuDe], [MoTa], [NoiDung], [NgayTao], [ImgUrl]) VALUES (1, N'Số mắc mới covid giảm còn 18.474; ca tủ vong thấp nhất trong nửa năm qua', N'Bản tin phòng chống dịch COVID-19 ngày 16/4 của Bộ Y tế cho biết ca mắc COVID-19 tiếp tục giảm sâu, còn 18.474 ca; Trong ngày số khỏi bệnh nhiều gấp gần 4 lần số mắc; Số ca tử vong là 10 trường hợp, thấp nhất trong nửa năm qua. Quảng Ninh bổ sung 4.800 F0.', N'- Tính từ 16h ngày 15/4 đến 16h ngày 16/4, trên Hệ thống Quốc gia quản lý ca bệnh COVID-19 ghi nhận 18.474 ca nhiễm mới, trong đó 0 ca nhập cảnh và 18.474 ca ghi nhận trong nước (giảm 1.602 ca so với ngày trước đó) tại 62 tỉnh, thành phố (có 13.299 ca trong cộng đồng). - Các tỉnh, thành phố ghi nhận ca bệnh như sau: Hà Nội (1.361), Phú Thọ (1.070), Bắc Giang (874), Nghệ An (853), Quảng Ninh (824), Yên Bái (807), Vĩnh Phúc (672), Tuyên Quang (631), TP. Hồ Chí Minh (603), Thái Bình (593), Đắk Lắk (565), Thái Nguyên (512), Bắc Kạn (503), Lào Cai (479), Hải Dương (437), Quảng Bình (434), Gia Lai (393), Điện Biên (382), Bình Phước (356), Lạng Sơn (351), Cao Bằng (306), Bắc Ninh (298), Hà Giang (291), Hưng Yên (287), Lâm Đồng (280), Nam Định (277), Sơn La (266), Hòa Bình (244), Tây Ninh (242), Hà Tĩnh (241), Ninh Bình (234), Đà Nẵng (225), Bình Định (218), Quảng Nam (214), Quảng Trị (213), Hà Nam (198), Lai Châu (175), Cà Mau (160), Vĩnh Long (159), Đắk Nông (131), Bà Rịa - Vũng Tàu (118), Thanh Hóa (105), Phú Yên (103), Bình Dương (99), Bến Tre (92), Quảng Ngãi (88), Thừa Thiên Huế (73), Bình Thuận (68), Khánh Hòa (59), Long An (50), Hải Phòng (43), Bạc Liêu (42), An Giang (35), Kiên Giang (35), Trà Vinh (24), Đồng Tháp (23), Kon Tum (21), Hậu Giang (14), Đồng Nai (11), Cần Thơ (5), Tiền Giang (4), Ninh Thuận (3).', CAST(N'2022-04-17 00:00:00.000' AS DateTime), NULL)
INSERT [dbo].[Posts] ([Id], [TieuDe], [MoTa], [NoiDung], [NgayTao], [ImgUrl]) VALUES (25, N'Số mắc mới covid giảm còn 18.474; ca tủ vong thấp nhất trong nửa năm qua', N'Bản tin phòng chống dịch COVID-19 ngày 16/4 của Bộ Y tế cho biết ca mắc COVID-19 tiếp tục giảm sâu, còn 18.474 ca; Trong ngày số khỏi bệnh nhiều gấp gần 4 lần số mắc; Số ca tử vong là 10 trường hợp, thấp nhất trong nửa năm qua. Quảng Ninh bổ sung 4.800 F0.', N'Tính từ 16h ngày 15/4 đến 16h ngày 16/4, trên Hệ thống Quốc gia quản lý ca bệnh COVID-19 ghi nhận 18.474 ca nhiễm mới, trong đó 0 ca nhập cảnh và 18.474 ca ghi nhận trong nước (giảm 1.602 ca so với ngày trước đó) tại 62 tỉnh, thành phố (có 13.299 ca trong cộng đồng). - Các tỉnh, thành phố ghi nhận ca bệnh như sau: Hà Nội (1.361), Phú Thọ (1.070), Bắc Giang (874), Nghệ An (853), Quảng Ninh (824), Yên Bái (807), Vĩnh Phúc (672), Tuyên Quang (631), TP. Hồ Chí Minh (603), Thái Bình (593), Đắk Lắk (565), Thái Nguyên (512), Bắc Kạn (503), Lào Cai (479), Hải Dương (437), Quảng Bình (434), Gia Lai (393), Điện Biên (382), Bình Phước (356), Lạng Sơn (351), Cao Bằng (306), Bắc Ninh (298), Hà Giang (291), Hưng Yên (287), Lâm Đồng (280), Nam Định (277), Sơn La (266), Hòa Bình (244), Tây Ninh (242), Hà Tĩnh (241), Ninh Bình (234), Đà Nẵng (225), Bình Định (218), Quảng Nam (214), Quảng Trị (213), Hà Nam (198), Lai Châu (175), Cà Mau (160), Vĩnh Long (159), Đắk Nông (131), Bà Rịa - Vũng Tàu (118), Thanh Hóa (105), Phú Yên (103), Bình Dương (99), Bến Tre (92), Quảng Ngãi (88), Thừa Thiên Huế (73), Bình Thuận (68), Khánh Hòa (59), Long An (50), Hải Phòng (43), Bạc Liêu (42), An Giang (35), Kiên Giang (35), Trà Vinh (24), Đồng Tháp (23), Kon Tum (21), Hậu Giang (14), Đồng Nai (11), Cần Thơ (5), Tiền Giang (4), Ninh Thuận (3).', CAST(N'2022-05-07 21:19:23.703' AS DateTime), NULL)
INSERT [dbo].[Posts] ([Id], [TieuDe], [MoTa], [NoiDung], [NgayTao], [ImgUrl]) VALUES (26, N'Số mắc mới covid giảm còn 18.474; ca tủ vong thấp nhất trong nửa năm qua', N'Bản tin phòng chống dịch COVID-19 ngày 16/4 của Bộ Y tế cho biết ca mắc COVID-19 tiếp tục giảm sâu, còn 18.474 ca; Trong ngày số khỏi bệnh nhiều gấp gần 4 lần số mắc; Số ca tử vong là 10 trường hợp, thấp nhất trong nửa năm qua. Quảng Ninh bổ sung 4.800 F0.', N'- Tính từ 16h ngày 15/4 đến 16h ngày 16/4, trên Hệ thống Quốc gia quản lý ca bệnh COVID-19 ghi nhận 18.474 ca nhiễm mới, trong đó 0 ca nhập cảnh và 18.474 ca ghi nhận trong nước (giảm 1.602 ca so với ngày trước đó) tại 62 tỉnh, thành phố (có 13.299 ca trong cộng đồng). - Các tỉnh, thành phố ghi nhận ca bệnh như sau: Hà Nội (1.361), Phú Thọ (1.070), Bắc Giang (874), Nghệ An (853), Quảng Ninh (824), Yên Bái (807), Vĩnh Phúc (672), Tuyên Quang (631), TP. Hồ Chí Minh (603), Thái Bình (593), Đắk Lắk (565), Thái Nguyên (512), Bắc Kạn (503), Lào Cai (479), Hải Dương (437), Quảng Bình (434), Gia Lai (393), Điện Biên (382), Bình Phước (356), Lạng Sơn (351), Cao Bằng (306), Bắc Ninh (298), Hà Giang (291), Hưng Yên (287), Lâm Đồng (280), Nam Định (277), Sơn La (266), Hòa Bình (244), Tây Ninh (242), Hà Tĩnh (241), Ninh Bình (234), Đà Nẵng (225), Bình Định (218), Quảng Nam (214), Quảng Trị (213), Hà Nam (198), Lai Châu (175), Cà Mau (160), Vĩnh Long (159), Đắk Nông (131), Bà Rịa - Vũng Tàu (118), Thanh Hóa (105), Phú Yên (103), Bình Dương (99), Bến Tre (92), Quảng Ngãi (88), Thừa Thiên Huế (73), Bình Thuận (68), Khánh Hòa (59), Long An (50), Hải Phòng (43), Bạc Liêu (42), An Giang (35), Kiên Giang (35), Trà Vinh (24), Đồng Tháp (23), Kon Tum (21), Hậu Giang (14), Đồng Nai (11), Cần Thơ (5), Tiền Giang (4), Ninh Thuận (3).', CAST(N'2022-05-07 21:19:41.950' AS DateTime), NULL)
SET IDENTITY_INSERT [dbo].[Posts] OFF
SET IDENTITY_INSERT [dbo].[Request] ON 

INSERT [dbo].[Request] ([Id], [HoTen], [SDT], [MaSV], [NgaySinh], [GioiTinh], [DonVi], [TenHoatDong], [DiaDiem], [ThoiGianBatDau], [ThoiGianKetThuc], [TinhTrang]) VALUES (1, N'DO NAM HOAI', N'0965858434', N'18t1021096', CAST(N'1998-02-02' AS Date), N'Nam', N'K42B', N'Sinh hoat lop', N'H202', N'02-02-2022 13:00', N'02-02-2022 15:00', 1)
INSERT [dbo].[Request] ([Id], [HoTen], [SDT], [MaSV], [NgaySinh], [GioiTinh], [DonVi], [TenHoatDong], [DiaDiem], [ThoiGianBatDau], [ThoiGianKetThuc], [TinhTrang]) VALUES (3, N'HHHH', N'0965854244', N'18T123456', CAST(N'1993-02-02' AS Date), N'Nam', N'Lào', N'abc', N'abc', N'10-10-2010 10:10', N'10-10-2010 10:10', 1)
INSERT [dbo].[Request] ([Id], [HoTen], [SDT], [MaSV], [NgaySinh], [GioiTinh], [DonVi], [TenHoatDong], [DiaDiem], [ThoiGianBatDau], [ThoiGianKetThuc], [TinhTrang]) VALUES (7, N'AB', N'0965858434', N'sdf', CAST(N'2022-05-05' AS Date), N'N', N'sd', N'sdf', N'sdf', N'10-10-2010 10:10', N'10-10-2010 10:10', 1)
INSERT [dbo].[Request] ([Id], [HoTen], [SDT], [MaSV], [NgaySinh], [GioiTinh], [DonVi], [TenHoatDong], [DiaDiem], [ThoiGianBatDau], [ThoiGianKetThuc], [TinhTrang]) VALUES (8, N'string', N'string', N'string', CAST(N'2022-05-14' AS Date), N'string', N'string', N'string', N'string', N'string', N'string', 1)
SET IDENTITY_INSERT [dbo].[Request] OFF
SET IDENTITY_INSERT [dbo].[Support] ON 

INSERT [dbo].[Support] ([Id], [HoTen], [SDT], [MaSV], [NgaySinh], [GioiTinh], [DiaChiTamTru], [GhiChu]) VALUES (2, N'HHH', N'0965858434', N'18T12', CAST(N'1995-02-02' AS Date), N'Nam', N'Huế', N'Nghèo')
SET IDENTITY_INSERT [dbo].[Support] OFF
