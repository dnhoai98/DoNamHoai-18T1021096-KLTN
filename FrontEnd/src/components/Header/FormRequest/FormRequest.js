import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";

const FormRequest = ({requests, setRequests}) => {
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            hoTen: "",
            sdt: "",
            maSV: "",
            ngaySinh: "",
            gioiTinh: "",
            donVi: "",
            tenHoatDong: "",
            diaDiem: "",
            thoiGianBatDau: "",
            thoiGianKetThuc: "",
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
            donVi: Yup.string().required("Không được để trống"),     
            tenHoatDong: Yup.string().required("Không được để trống"),     
            diaDiem: Yup.string().required("Không được để trống"),     
            thoiGianBatDau: Yup.string()
                .required("Không được để trống")
                .matches(/^([1-9]|([012][0-9])|(3[01]))-([0]{0,1}[1-9]|1[012])-\d\d\d\d [012]{0,1}[0-9]:[0-6][0-9]$/, "Nhập sai định dạng dd/mm/yyyy hh:mm"),     
            thoiGianKetThuc: Yup.string()
                .required("Không được để trống")
                .matches(/^([1-9]|([012][0-9])|(3[01]))-([0]{0,1}[1-9]|1[012])-\d\d\d\d [012]{0,1}[0-9]:[0-6][0-9]$/, "Nhập sai định dạng dd/mm/yyyy hh:mm"),   
        }),
        onSubmit: (values) => {
            addRequests(values);
            window.alert("Gửi đơn thành công!");
            navigate('/');
            
        }
    });

    const addRequests = async (request) => {
        await fetch("https://localhost:44304/api/request",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(request),
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
            setRequests((requests) => [...requests, request]);
        })
    }

    return (
        <div className="wide form-request" style={{width: '100%'}}>
            <div className="form-header">
                <h3>ĐĂNG KÝ MỞ HOẠT ĐỘNG</h3>
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
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="donVi">Thông tin đơn vị</label>
                        <input
                            type="text"
                            className={`form-control ${formik.errors.donVi && "is-invalid"}`}
                            id="donVi"
                            placeholder="Đơn vị"
                            name="donVi"
                            value={formik.values.donVi}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.donVi &&
                            <div class="invalid-feedback">
                                {formik.errors.donVi}
                            </div>
                        }
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md">
                        <label for="tenHoatDong">Tên hoạt động</label>
                        <input
                            type="text"
                            className={`form-control ${formik.errors.tenHoatDong && "is-invalid"}`}
                            id="tenHoatDong"
                            placeholder="Tên hoạt động"
                            name="tenHoatDong"
                            value={formik.values.tenHoatDong}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.tenHoatDong &&
                            <div class="invalid-feedback">
                                {formik.errors.tenHoatDong}
                            </div>
                        }
                    </div>
                    <div className="form-group col-md">
                        <label for="diaDiem">Địa điểm</label>
                        <input
                            type="text"
                            className={`form-control ${formik.errors.diaDiem && "is-invalid"}`}
                            id="diaDiem"
                            placeholder="Địa điểm"
                            name="diaDiem"
                            value={formik.values.diaDiem}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.diaDiem &&
                            <div class="invalid-feedback">
                                {formik.errors.diaDiem}
                            </div>
                        }
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="thoiGianBatDau">
                            Thời gian bắt đầu (Vd: 10-10-2010 10:10)
                        </label>
                        <input
                            type="text"
                            className={`form-control ${formik.errors.thoiGianBatDau && "is-invalid"}`}
                            id="thoiGianBatDau"
                            placeholder="Thời gian bắt đầu"
                            name="thoiGianBatDau"
                            value={formik.values.thoiGianBatDau}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.thoiGianBatDau &&
                            <div class="invalid-feedback">
                                {formik.errors.thoiGianBatDau}
                            </div>
                        }
                    </div>
                    <div className="form-group col-md-4">
                        <label for="thoiGianKetThuc">
                            Thời gian kết thúc (Vd: 10-10-2010 10:10)
                        </label>
                        <input
                            type="text"
                            className={`form-control ${formik.errors.thoiGianKetThuc && "is-invalid"}`}
                            id="thoiGianKetThuc"
                            placeholder="Thời gian kết thúc"
                            name="thoiGianKetThuc"
                            value={formik.values.thoiGianKetThuc}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.thoiGianKetThuc &&
                            <div class="invalid-feedback">
                                {formik.errors.thoiGianKetThuc}
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
 
export default FormRequest;