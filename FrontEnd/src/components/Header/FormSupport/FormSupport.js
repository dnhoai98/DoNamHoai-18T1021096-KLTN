import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";

const FormSupport = ({supports, setSupports}) => {
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            hoTen: "",
            sdt: "",
            maSV: "",
            ngaySinh: "",
            gioiTinh: "",
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
            diaChiTamTru: Yup.string().required("Không được để trống"),     
            ghiChu: Yup.string().required("Không được để trống"),               
        }),
        onSubmit: (values) => {
            addSupport(values);
            window.alert("Gửi đơn thành công!");
            navigate('/');
            
        }
    });
    const addSupport = async (support) => {
        await fetch("https://localhost:44304/api/support",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(support),
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
            setSupports((supports) => [...supports, support]);
        })
    }


    return ( 
        <div className="wide form-support" style={{width: '100%'}}>
            <div className="form-header">
                <h3>ĐĂNG KÝ XIN HỖ TRỢ</h3>
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
                <div className="form-group col-md">
                    <label for="diaChiTamTru">Địa chỉ tạm trú tại Huế (ghi rõ)</label>
                    <input
                            type="text"
                            className={`form-control ${formik.errors.diaChiTamTru && "is-invalid"}`}

                            id="diaChiTamTru"
                            placeholder="Địa chỉ tạm trú"
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
                    <label for="ghiChu">Trình bày tình hình hiện tại cần giúp đỡ</label>
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
                <button type="submit" className="btn btn-primary">Xác nhận</button>
            </div>
            </form>
        </div>
     );
}
 
export default FormSupport;