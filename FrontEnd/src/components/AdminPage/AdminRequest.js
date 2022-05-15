import { useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";


const AdminRequest = ({requests, setRequests, setRequestDetails}) => {

    const getRequests = async () => {
        await fetch("https://localhost:44304/api/request")
        .then((response) => response.json())
        .then((data) => setRequests(data))
    } 

    const deleteSupport = async (requestId) =>{
        await fetch(`https://localhost:44304/api/request/${requestId}`,{
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((data) =>{
            var newRequests = requests.filter(request => request.id === data.id);
            setRequests(newRequests);
        })
    }

    useEffect(() =>{
        getRequests();
    }, [requests]);

    const handleDelete = (id) => {
        if(window.confirm('Bạn có chắc chắn xóa?')){
            deleteSupport(id);
        }
    }

    

    return ( 
        <>
        <h2>Quản lý đơi xin hỗ trợ khó khăn</h2>         
        <table class="table">
        <thead>
            <tr>
                <th>STT</th>
                <th>Họ tên</th>
                <th>Ngày sinh</th>
                <th>Mã sinh viên</th>
                <th>Tình trạng</th>
            </tr>
            </thead>
            <tbody>
            {requests.length === 0 ? <p style={{textAlign: 'center'}}>Không có dữ liệu</p> : ""}
                {requests.map((request,index) =>(
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{request.hoTen}</td>
                    <td>{moment(request.ngaySinh).format("DD/MM/YYYY")}</td>
                    <td>{request.maSv}</td>
                    <td>{request.tinhTrang ? "Đã phê duyệt" : "Chưa phê duyệt"}
                    </td>
                    <td>
                        <button onClick={()=> setRequestDetails(request)} class="btn btn-primary">
                             <Link style={{color: 'white', textDecoration: 'none'}} to="/adminpage/requestDetails">Chi tiết</Link>                            
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-danger"onClick={()=> handleDelete(request.id)}>Xóa</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </>
     );
}
 
export default AdminRequest;