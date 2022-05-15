import { useState } from "react";
import { useNavigate } from 'react-router';

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();


    const login = async () => {
    var item = {username, password};
        await fetch("https://localhost:44304/api/admin",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(item),
        })
        .then(response =>{
            if(response.status !== 200){
                window.alert("Đăng nhập không thành công");
                return
            }
            else{
                window.alert("Đăng nhập thành công");
                navigate("/adminpage");
                return response.json();
            }
        })
        .then(data => {
            console.log(data);
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    }
    return ( 
        <div style={{margin: '50px auto', width: '1000px'}}>
            <h2 style={{textAlign: 'center'}}>Admin Đăng nhập</h2>
            <form className="col-sm-6 offset-sm-3" onSubmit={handleSubmit}>
                <input onChange={(e)=>setUsername(e.target.value)} type="text" className="form-control" placeholder="Username" />
                <br />
                <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" />
                <br />
                <button style={{width: '120px'}} typeo="submit" className="btn btn-primary">Đăng nhập</button>
            </form>
        </div>
     );
}
 
export default AdminLogin;