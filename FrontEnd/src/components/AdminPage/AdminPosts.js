import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import moment from "moment";

const AdminPosts = ({setEditPost}) => {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        await fetch("https://localhost:44304/api/post")
        .then((response) => response.json())
        .then((data) => setPosts(data))
    }
    useEffect(() =>{
        getPosts();
    }, [posts]);

    const deletePost = async (postId) => {
        await fetch(`https://localhost:44304/api/post/${postId}`,{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((data) => {
            var newPosts = posts.filter(post => post.id === data.id);
            setPosts(newPosts);
        })
    }
    
    const handleClick = (id) => {
        if(window.confirm('Bạn có chắc chắn xóa?')){
            deletePost(id);
        }
    }

    return (    
        <>
        <h2>Quản lý bài đăng</h2>  
        <button class="btn btn-primary">
            <Link style={{color: 'white', textDecoration: 'none'}} to="/adminpage/addpost">Tạo bài đăng</Link>       
        </button>
        <table class="table">
            <thead>
            <tr>
                <th>STT</th>
                <th>Tiêu đề</th>
                <th>Ngày đăng</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {posts.map((post, index) =>(
                <tr>
                    <td>{index + 1}</td>
                    <td>{post.tieuDe}</td>
                    <td>{moment(post.ngayTao).format("DD/MM/YYYY")}</td>
                    <td>
                        <button onClick={()=>setEditPost(post)} class="btn btn-primary">
                            <Link style={{color: 'white', textDecoration: 'none'}} to="/adminpage/editPost">Sửa</Link>                      
                        </button>
                    </td>
                    <td>
                        <button onClick={()=> handleClick(post.id)} class="btn btn-danger">Xóa</button>
                    </td>
                </tr>
            ))}           
            </tbody>
        </table>
        </>
     );
}
 
export default AdminPosts;