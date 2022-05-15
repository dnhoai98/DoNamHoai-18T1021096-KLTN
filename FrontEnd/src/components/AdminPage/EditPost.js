import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';

const EditPost = ({editPost}) => {
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            id: editPost.id,
            tieuDe: editPost.tieuDe,
            moTa: editPost.moTa,
            noiDung: editPost.noiDung         
        },
        validationSchema: Yup.object({
            tieuDe: Yup.string().required("Không được để trống"),
            moTa: Yup.string().required("Không được để trống"),
            noiDung: Yup.string().required("Không được để trống"),
        }),
        onSubmit: (values) => {   
            console.log(values);
            handleEditPost(values);       
            window.alert("Cập nhật bài thành công!");
            navigate('/adminpage/');
        }
    });

    const handleEditPost = async (post) => {
        await fetch(`https://localhost:44304/api/post/${post.id}`,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(post),
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

    return (
        <div class="add-post">
            <h2>Sửa bài đăng</h2>
            <form onSubmit={formik.handleSubmit}>
                <div class="form-group">
                    <label for="tieuDe">Tiêu đề</label>
                    <input
                            type="text"
                            className={`form-control ${formik.errors.tieuDe && "is-invalid"}`}
                            id="tieuDe"
                            placeholder="Tiêu đề"
                            name="tieuDe"
                            value={formik.values.tieuDe}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.tieuDe &&
                            <div class="invalid-feedback">
                                {formik.errors.tieuDe}
                            </div>
                        }
                </div>
                <div class="form-group">
                    <label for="moTa">Mô tả</label>
                    <input
                            type="text"
                            className={`form-control ${formik.errors.moTa && "is-invalid"}`}
                            id="moTa"
                            placeholder="Mô tả"
                            name="moTa"
                            value={formik.values.moTa}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.moTa &&
                            <div class="invalid-feedback">
                                {formik.errors.moTa}
                            </div>
                        }
                </div>
                <div class="form-group">
                    <label for="noiDung">Nội dung</label>
                    <textarea
                            type="text"
                            className={`form-control ${formik.errors.noiDung && "is-invalid"}`}
                            id="noiDung"
                            name="noiDung"
                            value={formik.values.noiDung}
                            onChange={formik.handleChange}
                            style={{height:'200px'}}
                        />
                        {formik.errors.noiDung &&
                            <div class="invalid-feedback">
                                {formik.errors.noiDung}
                            </div>
                        }
                </div>
                <button className="btn btn-secondary">
                        <Link style={{color: 'white', textDecoration: 'none'}} to="/adminpage/">Trở về</Link>                      
                </button>
                <button type="submit" class="btn btn-primary">
                    Đăng                         
                </button>
            </form>
        </div>
    );
}
 
export default EditPost;