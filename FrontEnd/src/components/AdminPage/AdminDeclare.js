import moment from "moment";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AdminDeclare = ({declares, setDeclares, setDeclareDetails}) => {

    const getDeclares = async () => {
        await fetch("https://localhost:44304/api/declare")
        .then((response) => response.json())
        .then((data) => setDeclares(data))
    } 

    const deleteDeclare = async (declareId) =>{
        await fetch(`https://localhost:44304/api/declare/${declareId}`,{
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((data) =>{
            var newDeclares = declares.filter(declare => declare.id === data.id);
            setDeclares(newDeclares);
        })
    }

    useEffect(() =>{
        getDeclares();
    }, [declares]);

    const handleClick = (id) => {
        if(window.confirm('Bạn có chắc chắn xóa?')){
            deleteDeclare(id);
        }
    }

    return ( 
        <>
        <h2>Quản lý đơn khai báo y tế</h2>         
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
            {declares.length === 0 ? <p style={{textAlign: 'center'}}>Không có dữ liệu</p> : ""}
                {declares.map((declare,index) =>(
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{declare.hoTen}</td>
                    <td>{moment(declare.ngaySinh).format("DD/MM/YYYY")}</td>
                    <td>{declare.maSv}</td>
                    <td>
                        <button onClick={()=> setDeclareDetails(declare)} class="btn btn-primary">
                            <Link style={{color: 'white', textDecoration: 'none'}} to="/adminpage/declareDetails">Chi tiết</Link>
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-danger" onClick={()=> handleClick(declare.id)}>Xóa</button>
                    </td>
                </tr>
                ))}
            
            </tbody>
        </table>
        </>
     );
}
 
export default AdminDeclare;