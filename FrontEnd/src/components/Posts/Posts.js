
import "./posts.css";
import { Link } from "react-router-dom";

const Posts = ({ posts, setPostDetails }) => { 

    const getPostDetails = async (postId) => {
        await fetch(`https://localhost:44304/api/post/${postId}`)
        .then((response) => response.json())
        .then((data) =>{           
            setPostDetails(data)
        })
    }

    const handleClick = (id) => {
        getPostDetails(id);
    }

    return (
        <div style={{ marginTop: 40}}>
        <h2 className="wide title">THÔNG BÁO</h2>
        <div className="wide posts">
            <div className="posts__left">
                {posts.map((post, index) => (
                    <div className="post" key={index}>
                    <Link to="/postDetails" className="post__img" onClick={() => handleClick(post.id)}>
                        <img src="https://ioc.thuathienhue.gov.vn/UploadFiles/TinTuc/2021/6/21/thongbao1.jpg" alt="ImgUrl"/>
                    </Link>
                    <div className="post__content">
                        <Link to="/postDetails" className="post__content-title" onClick={() => handleClick(post.id)}>
                            <h2>{post.tieuDe}</h2>
                        </Link>
                        <p className="post__content-text">{post.noiDung}</p>
                    </div>
                </div>
                ))}                                        
            </div>
        </div>
        </div>
     );
}
 
export default Posts;
