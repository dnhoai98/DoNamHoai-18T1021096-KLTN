import { Link } from "react-router-dom";

const SupportDetails = ({supportDetails}) => {
    return ( 
        <div>
            <h3>Chi tiết thông tin</h3>
            <form className="form-container">
            <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="hoTen">Họ tên (ghi chữ IN HOA)</label>
                        <input
                            type="text"
                            id="hoTen"
                            className="form-control"
                            placeholder="Họ tên"
                            name="hoTen"
                            value={supportDetails.hoTen}
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
                            value={supportDetails.sdt}
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
                            value={supportDetails.maSv}
                            readOnly
                        />
                       
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="ngaySinh">Ngày sinh</label>
                        <input
                            type="date"
                            className="form-control"
                            id="ngaySinh"
                            name="ngaySinh"
                            value={supportDetails.ngaySinh}
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
                            value={supportDetails.gioiTinh}
                            readOnly
                        />
                      
                    </div>
                </div>
            <div className="form-row">
                <div className="form-group col-md">
                    <label for="diaChiTamTru">Địa chỉ tạm trú tại Huế (ghi rõ)</label>
                    <input
                            type="text"
                            className="form-control"
                            id="diaChiTamTru"
                            placeholder="Địa chỉ tạm trú"
                            name="diaChiTamTru"
                            value={supportDetails.diaChiTamTru}
                            readOnly
                        />
                      
                </div>              
            </div>
            <div className="form-row">
                <div className="form-group col-md">
                    <label for="ghiChu">Trình bày tình hình hiện tại cần giúp đỡ</label>
                    <textarea
                            type="text"
                            className="form-control"
                            id="ghiChu" 
                            name="ghiChu"
                            value={supportDetails.ghiChu}
                            readOnly
                        />
                   
                </div>              
            </div>
            
            <div className="group-btn">
                
                <button type="submit" className="btn btn-primary">
                <Link style={{color: 'white', textDecoration: 'none'}} to="/adminpage/support">Trở về</Link>                      
                    </button>
            </div>
            </form> 
        </div>
     );
}
 
export default SupportDetails;