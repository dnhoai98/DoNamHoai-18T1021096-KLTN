import { Link } from "react-router-dom"; 
import { useNavigate } from 'react-router';

const RequestDetails = ({requestDetails}) => {
    let navigate = useNavigate();

    const approval = async (request) => {
        await fetch(`https://localhost:44304/api/request/${request.id}`,{
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(request)
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
            console.log(data);
        })
    }

    const handleApproval = (request) => {
        if(window.confirm("Xác nhận phê duyệt?")){
            approval(request);
            navigate('/adminpage/request');
        }
    }
    return ( 
        <div>
            <form className="form-container">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="hoTen">Họ tên (ghi chữ IN HOA)</label>
                        <input
                            type="text"
                            id="hoTen"
                            placeholder="Họ tên"
                            name="hoTen"
                            className="form-control"
                            value={requestDetails.hoTen}
                            readOnly
                        />
                        
                    </div>
                </div>
                <div className="form-row">
                <div className="form-group col-md-4">
                        <label for="sdt">Số điện thoại</label>
                        <input
                            type="text"
                            id="sdt"
                            placeholder="Số điện thoại"
                            name="sdt"
                            className="form-control"
                            value={requestDetails.sdt}
                            readOnly
                        />
                       
                    </div>
                    <div className="form-group col-md-4">
                        <label for="maSV">Mã sinh viên</label>
                        <input
                            type="text"

                            id="maSV"
                            placeholder="Mã sinh viên"
                            name="maSV"
                            className="form-control"
                            value={requestDetails.maSv}
                            readOnly
                        />
                       
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="ngaySinh">Ngày sinh</label>
                        <input
                            type="date"
                            id="ngaySinh"
                            name="ngaySinh"
                            className="form-control"
                            value={requestDetails.ngaySinh}
                            readOnly 
                        />
                       
                    </div>
                    <div className="form-group col-md-4">
                        <label for="gioiTinh">Giới tính</label>
                        <input
                            type="text"
                            id="gioiTinh"
                            placeholder="Giới tính"
                            name="gioiTinh"
                            className="form-control"
                            value={requestDetails.gioiTinh}
                            readOnly
                        />
                     
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="donVi">Thông tin đơn vị</label>
                        <input
                            type="text"
                            id="donVi"
                            placeholder="Đơn vị"
                            name="donVi"
                            className="form-control"
                            value={requestDetails.donVi}
                            readOnly
                        />
                    
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md">
                        <label for="tenHoatDong">Tên hoạt động</label>
                        <input
                            type="text"
                            id="tenHoatDong"
                            placeholder="Tên hoạt động"
                            name="tenHoatDong"
                            className="form-control"
                            value={requestDetails.tenHoatDong}
                            readOnly
                        />
                  
                    </div>
                    <div className="form-group col-md">
                        <label for="diaDiem">Địa điểm</label>
                        <input
                            type="text"
                            id="diaDiem"
                            placeholder="Địa điểm"
                            name="diaDiem"
                            className="form-control"
                            value={requestDetails.diaDiem}
                            readOnly
                        />
                    
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="thoiGianBatDau">
                            Thời gian bắt đầu (Vd: 10-10-2010 10:10)
                        </label>
                        <input
                            type="text"
                            id="thoiGianBatDau"
                            placeholder="Thời gian bắt đầu"
                            name="thoiGianBatDau"
                            className="form-control"
                            value={requestDetails.thoiGianBatDau}
                            readOnly
                        />
                      
                    </div>
                    <div className="form-group col-md-4">
                        <label for="thoiGianKetThuc">
                            Thời gian kết thúc (Vd: 10-10-2010 10:10)
                        </label>
                        <input
                            type="text"
                            id="thoiGianKetThuc"
                            placeholder="Thời gian kết thúc"
                            name="thoiGianKetThuc"
                            className="form-control"
                            value={requestDetails.thoiGianKetThuc}
                            readOnly
                        />
                     
                    </div>
                </div>
                <div className="group-btn">
                    <button type="submit" className="btn btn-secondary">
                        <Link style={{color: 'white', textDecoration: 'none'}} to="/adminpage/request">Trở về</Link>                          
                    </button>
                    {requestDetails.tinhTrang ? "" : 
                    <button class="btn btn-primary"onClick={()=>handleApproval(requestDetails)}>Phê duyệt</button>}
                    
                </div>
            </form>
        </div>
     );
}
 
export default RequestDetails;