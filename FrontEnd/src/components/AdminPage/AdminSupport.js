import { useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";


const AdminSupport = ({supports, setSupports, setSupportDetails}) => {

    const getSupports = async () => {
        await fetch("https://localhost:44304/api/support")
        .then((response) => response.json())
        .then((data) => setSupports(data))
    } 

    const deleteSupport = async (supportId) =>{
        await fetch(`https://localhost:44304/api/support/${supportId}`,{
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((data) =>{
            var newSupports = supports.filter(support => support.id === data.id);
            setSupports(newSupports);
        })
    }

    useEffect(() =>{
        getSupports();
    }, [supports]);

    const handleClick = (id) => {
        if(window.confirm('Bạn có chắc chắn xóa?')){
            deleteSupport(id);
        }
    }
    return ( 
        <>
        <h2>Quản lý đơn xin mở hoạt động</h2>         
        <table class="table">
        <thead>
            <tr>
                <th>STT</th>
                <th>Họ tên</th>
                <th>Ngày sinh</th>
                <th>Mã sinh viên</th>
            </tr>
            </thead>
            <tbody>
                {supports.length === 0 ? <p style={{textAlign: 'center'}}>Không có dữ liệu</p> : ""}
                {supports.map((support,index) =>(
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{support.hoTen}</td>
                    <td>{moment(support.ngaySinh).format("DD/MM/YYYY")}</td>
                    <td>{support.maSv}</td>
                    <td>
                        <button onClick={()=> setSupportDetails(support)} class="btn btn-primary">
                            <Link style={{color: 'white', textDecoration: 'none'}} to="/adminpage/supportDetails">Chi tiết</Link>    
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-danger" onClick={()=> handleClick(support.id)}>Xóa</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </>
     );
}
 
export default AdminSupport;