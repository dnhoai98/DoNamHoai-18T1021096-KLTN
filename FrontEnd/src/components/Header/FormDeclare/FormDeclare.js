import { useNavigate } from 'react-router';
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';

const FormDeclare = ({declares,setDeclares}) => {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            hoTen: "",
            sdt: "",
            maSV: "",
            ngaySinh: "",
            gioiTinh: "",
            quocTich: "",
            phuongTienDiChuyen: "",
            soHieuPhuongTien: "",
            soGhe: "",
            ngayKhoiHanh: "",
            ngayDen: "",
            diaChiKhoiHanh: "",
            diaChiTamTru: "",
            ghiChu: "",
        },
        validationSchema: Yup.object({
            hoTen: Yup.string()
                .required("Không được để trống")
                .matches(/^[A-Z \d\W]+$/, "Viết chữ IN HOA"),
            sdt: Yup.string()
                .required("Không được để trống")
                .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Số điện thoại sai định dạng"),
            maSV: Yup.string().required("Không được để trống"),
            ngaySinh: Yup.date().required("Không được để trống").nullable(),
            gioiTinh: Yup.string().required("Không được để trống"),
            quocTich: Yup.string().required("Không được để trống"),
            phuongTienDiChuyen: Yup.string().required("Không được để trống"),     
            ngayKhoiHanh: Yup.date().required("Không được để trống").nullable(),
            ngayDen: Yup.date()
                .min(
                Yup.ref('ngayKhoiHanh'),
                  "Ngày đến phải sau ngày khởi hành"
                )
                .required("Không được để trống").nullable(),       
            diaChiKhoiHanh: Yup.string().required("Không được để trống"),
            diaChiTamTru: Yup.string().required("Không được để trống"),
            ghiChu: Yup.string().required("Không được để trống"),
        }),
        onSubmit: (values) => {
            addDeclare(values);
            window.alert("Khai báo thành công!");
            navigate('/');
        }
    });

    const addDeclare = async (declare) => {
        await fetch("https://localhost:44304/api/declare",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(declare),
        })
        .then(response =>{
            if(response.status !== 200){
                return
            }
            else{
                return response.json();
            }
        })
        .then(data => {
            setDeclares((declares) => [...declares, declare]);
        })
    }

    return (
        <div className="wide form-declare">
            <div className="form-header">
                <h3>KHAI BÁO Y TẾ</h3>
                <h5>
                    ĐÂY LÀ TÀI LIỆU QUAN TRỌNG, THÔNG TIN CỦA ANH/CHỊ SẼ GIÚP
                    NHÀ TRƯỜNG LIÊN LẠC KHI CẦN THIẾT ĐỂ PHÒNG CHỐNG DỊCH BỆNH
                    TRUYỀN NHIỄM
                </h5>
                <p>
                    Khuyến cáo: Khai báo thông tin sai là vi phạm pháp luật Việt
                    Nam và có thể xử lí hình sự
                </p>
            </div>
            <form className="form-container" onSubmit={formik.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="hoTen">Họ tên (ghi chữ IN HOA)</label>
                        <input
                            type="text"
                            className={`form-control ${formik.errors.hoTen && "is-invalid"}`}
                            id="hoTen"
                            placeholder="Họ tên"
                            name="hoTen"
                            value={formik.values.hoTen}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.hoTen &&
                            <div class="invalid-feedback">
                                {formik.errors.hoTen}
                            </div>
                        }
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="sdt">Số điện thoại</label>
                        <input
                            type="text"
                            className={`form-control ${formik.errors.sdt && "is-invalid"}`}

                            id="sdt"
                            placeholder="Số điện thoại"
                            name="sdt"
                            value={formik.values.sdt}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.sdt &&
                            <div class="invalid-feedback">
                                {formik.errors.sdt}
                            </div>
                        }
                    </div>
                    <div className="form-group col-md-4">
                        <label for="maSV">Mã sinh viên</label>
                        <input
                            type="text"
                            className={`form-control ${formik.errors.hoTen && "is-invalid"}`}

                            id="maSV"
                            placeholder="Mã sinh viên"
                            name="maSV"
                            value={formik.values.maSV}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.maSV &&
                            <div class="invalid-feedback">
                                {formik.errors.maSV}
                            </div>
                        }
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="ngaySinh">Ngày sinh</label>
                        <input
                            type="date"
                            className={`form-control ${formik.errors.ngaySinh && "is-invalid"}`}

                            id="ngaySinh"
                            name="ngaySinh"
                            value={formik.values.ngaySinh}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.ngaySinh &&
                            <div class="invalid-feedback">
                                {formik.errors.ngaySinh}
                            </div>
                        }
                    </div>
                    <div className="form-group col-md-4">
                        <label for="gioiTinh">Giới tính</label>
                        <input
                            type="text"
                            className={`form-control ${formik.errors.gioiTinh && "is-invalid"}`}

                            id="gioiTinh"
                            placeholder="Giới tính"
                            name="gioiTinh"
                            value={formik.values.gioiTinh}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.gioiTinh &&
                            <div class="invalid-feedback">
                                {formik.errors.gioiTinh}
                            </div>
                        }
                    </div>
                    <div className="form-group col-md-4">
                        <label for="quocTich">Quốc tịch</label>
                        <input
                            type="text"
                            className={`form-control ${formik.errors.quocTich && "is-invalid"}`}

                            id="quocTich"
                            placeholder="Quốc tịch"
                            name="quocTich"
                            value={formik.values.quocTich}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.quocTich &&
                            <div class="invalid-feedback">
                                {formik.errors.quocTich}
                            </div>
                        }
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="phuongTienDiChuyen">Phương tiện di chuyển</label>
                        <input
                            type="text"
                            className={`form-control ${formik.errors.phuongTienDiChuyen && "is-invalid"}`}

                            id="phuongTienDiChuyen"
                            placeholder="Phương tiện di chuyển"
                            name="phuongTienDiChuyen"
                            value={formik.values.phuongTienDiChuyen}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.phuongTienDiChuyen &&
                            <div class="invalid-feedback">
                                {formik.errors.phuongTienDiChuyen}
                            </div>
                        }
                    </div>
                    <div className="form-group col-md-4">
                        <label for="soHieuPhuongTien">Số hiệu phương tiện</label>
                        <input
                            type="text"
                            className="form-control"

                            id="soHieuPhuongTien"
                            placeholder="Số hiệu phương tiện"
                            name="soHieuPhuongTien"
                            value={formik.values.soHieuPhuongTien}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="soGhe">Số ghế (nếu có)</label>
                        <input
                            type="text"
                            className="form-control"

                            id="soGhe"
                            placeholder="Số ghế"
                            name="soGhe"
                            value={formik.values.soGhe}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="ngayKhoiHanh">Ngày khời hành</label>
                        <input
                            type="date"
                            className={`form-control ${formik.errors.ngayKhoiHanh && "is-invalid"}`}

                            id="ngayKhoiHanh"
                            name="ngayKhoiHanh"
                            value={formik.values.ngayKhoiHanh}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.ngayKhoiHanh &&
                            <div class="invalid-feedback">
                                {formik.errors.ngayKhoiHanh}
                            </div>
                        }
                    </div>
                    <div className="form-group col-md-4">
                        <label for="ngayDen">Ngày đến</label>
                        <input
                            type="date"
                            className={`form-control ${formik.errors.ngayDen && "is-invalid"}`}

                            id="ngayDen"
                            name="ngayDen"
                            value={formik.values.ngayDen}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.ngayDen &&
                            <div class="invalid-feedback">
                                {formik.errors.ngayDen}
                            </div>
                        }
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md">
                        <label for="diaChiKhoiHanh">
                            Địa chỉ khởi hành (ghi rõ)
                        </label>
                        <input
                            type="text"
                            className={`form-control ${formik.errors.diaChiKhoiHanh && "is-invalid"}`}

                            id="diaChiKhoiHanh"
                            placeholder="Địa chỉ khởi hành"
                            name="diaChiKhoiHanh"
                            value={formik.values.diaChiKhoiHanh}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.diaChiKhoiHanh &&
                            <div class="invalid-feedback">
                                {formik.errors.diaChiKhoiHanh}
                            </div>
                        }
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md">
                        <label for="diaChiTamTru">
                            Địa chỉ tạm trú tại Huế (ghi rõ)
                        </label>
                        <input
                            type="text"
                            className={`form-control ${formik.errors.diaChiTamTru && "is-invalid"}`}

                            id="diaChiTamTru"
                            placeholder="Địa chỉ cư trú"
                            name="diaChiTamTru"
                            value={formik.values.diaChiTamTru}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.diaChiTamTru &&
                            <div class="invalid-feedback">
                                {formik.errors.diaChiTamTru}
                            </div>
                        }
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md">
                        <label for="ghiChu">
                            Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/vùng
                            lãnh thổ nào khác không? (nếu có ghi rõ)
                        </label>
                        <textarea
                            type="text"
                            className={`form-control ${formik.errors.ghiChu && "is-invalid"}`}

                            id="ghiChu"
                            name="ghiChu"
                            value={formik.values.ghiChu}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.ghiChu &&
                            <div class="invalid-feedback">
                                {formik.errors.ghiChu}
                            </div>
                        }
                    </div>
                </div>

                <div className="group-btn">
                    <button type="submit" className="btn btn-secondary">
                        <Link style={{color: 'white', textDecoration: 'none'}} to="/">Trở về</Link>                          
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Xác nhận
                    </button>
                </div>
            </form>
        </div>
    );
}
 
export default FormDeclare;