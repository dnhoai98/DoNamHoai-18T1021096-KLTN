import moment from "moment";
import { Link } from "react-router-dom";

const DeclareDetails = ({declareDetails}) => {
    return (
        <div>
        <h3>Chi tiết thông tin</h3>
        <form className="form-container">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="hoTen">Họ tên (ghi chữ IN HOA)</label>
                        <input
                            type="text"
                            className="form-control"
                            id="hoTen"
                            placeholder="Họ tên"
                            name="hoTen"
                            value={declareDetails.hoTen}
                            readOnly
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="sdt">Số điện thoại</label>
                        <input
                            type="text"
                            className="form-control"
                            id="sdt"
                            placeholder="Số điện thoại"
                            name="sdt"  
                            value={declareDetails.sdt}
                            readOnly            
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="maSV">Mã sinh viên</label>
                        <input
                            type="text"
                            className="form-control"
                            id="maSV"
                            placeholder="Mã sinh viên"
                            name="maSV"
                            value={declareDetails.maSv}
                            readOnly
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="ngaySinh">Ngày sinh</label>
                        <input
                            type="text"
                            className="form-control"
                            id="ngaySinh"
                            name="ngaySinh"
                            value={moment(declareDetails.ngaySinh).format("DD/MM/YYYY")}
                            readOnly
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="gioiTinh">Giới tính</label>
                        <input
                            type="text"
                            className="form-control"

                            id="gioiTinh"
                            placeholder="Giới tính"
                            name="gioiTinh"
                            value={declareDetails.gioiTinh}
                            readOnly
                           
                        />
                      
                    </div>
                    <div className="form-group col-md-4">
                        <label for="quocTich">Quốc tịch</label>
                        <input
                            type="text"
                            className="form-control"

                            id="quocTich"
                            placeholder="Quốc tịch"
                            name="quocTich"
                            value={declareDetails.quocTich}
                            readOnly
                            
                        />
                       
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="phuongTienDiChuyen">Phương tiện di chuyển</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phuongTienDiChuyen"
                            placeholder="Phương tiện di chuyển"
                            name="phuongTienDiChuyen"
                            value={declareDetails.phuongTienDiChuyen}
                            readOnly
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="soHieuPhuongTien">Số hiệu phương tiện</label>
                        <input
                            type="text"
                            className="form-control"

                            id="soHieuPhuongTien"
                            placeholder="Số hiệu phương tiện"
                            name="soHieuPhuongTien"
                            value={declareDetails.soHieuPhuongTien}
                            readOnly
                           
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
                            value={declareDetails.soGhe}
                            readOnly
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="ngayKhoiHanh">Ngày khời hành</label>
                        <input
                            type="text"
                            id="ngayKhoiHanh"
                            name="ngayKhoiHanh"
                            className="form-control"
                            value={moment(declareDetails.ngayKhoiHanh).format("DD/MM/YYYY")}                           
                            readOnly
                        />
                      
                    </div>
                    <div className="form-group col-md-4">
                        <label for="ngayDen">Ngày đến</label>
                        <input
                            type="text"
                            id="ngayDen"
                            name="ngayDen"
                            className="form-control"
                            value={moment(declareDetails.ngayDen).format("DD/MM/YYYY")}                                                     
                            readOnly
                        />
                     
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md">
                        <label for="diaChiKhoiHanh">
                            Địa chỉ khởi hành (ghi rõ)
                        </label>
                        <input
                            type="text"
                            id="diaChiKhoiHanh"
                            placeholder="Địa chỉ khởi hành"
                            name="diaChiKhoiHanh"
                            className="form-control"
                            value={declareDetails.diaChiKhoiHanh}
                            readOnly
                        />
                      
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md">
                        <label for="diaChiTamTru">
                            Địa chỉ tạm trú tại Huế (ghi rõ)
                        </label>
                        <input
                            type="text"
                            id="diaChiTamTru"
                            placeholder="Địa chỉ cư trú"
                            name="diaChiTamTru"
                            className="form-control"
                            value={declareDetails.diaChiTamTru}
                            readOnly
                        />
                       
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
                            className="form-control"

                            id="ghiChu"
                            name="ghiChu"
                            value={declareDetails.ghiChu}
                            readOnly
                        />
                       
                    </div>
                </div>

                <div className="group-btn">
                    
                    <button type="submit" className="btn btn-primary">
                        <Link style={{color: 'white', textDecoration: 'none'}} to="/adminpage/declare">Trở về</Link>   
                    </button>
                </div>
            </form>
        </div>
      );
}
 
export default DeclareDetails;