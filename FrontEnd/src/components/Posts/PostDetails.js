import moment from "moment";


const PostDetails = ({postDetails}) => {
    return ( 
        <div className="wide postdetails">
            <h3 className="postdetails__heading">THÔNG BÁO</h3>
            <h2 className="postdetails__title">{postDetails.tieuDe}</h2>
            <span>{moment(postDetails.ngayTao).format("DD/MM/YYYY")}</span>
            <p className="postdetails__desc">{postDetails.moTa}
            </p>
            <p className="postdetails__content">{postDetails.noiDung}
            </p>
        </div>
     );
}
 
export default PostDetails;