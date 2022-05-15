import { Link } from "react-router-dom";

const Menu = () => {
    return ( 
        <div class="admin__menu">
            <ul class="list-group">
                <li class="list-group-item">
                    <Link to="/adminpage">Quản lý bài đăng</Link>
                </li>
                <li class="list-group-item">
                    <Link to="/adminpage/declare">Quản lý đơn khai báo y tế</Link>
                </li>
                <li class="list-group-item">
                    <Link to="/adminpage/support">Quản lý đơn xin hỗ trợ khó khăn</Link>
                </li>
                <li class="list-group-item">
                    <Link to="/adminpage/request">Quản lý đơn xin mở hoạt động</Link>
                </li>
            </ul>
        </div>
    );
}
 
export default Menu;<>

</>
