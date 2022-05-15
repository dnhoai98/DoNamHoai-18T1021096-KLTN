import { Link } from "react-router-dom";
import "./header.css";
import logo from "./logo.png";

const Header = () => {
    return ( 
        <header className="header">
            <div className="header__middle wide">
                <a href="/" className="header__logo">
                    <img src={logo} />
                </a>
                <h1>CỔNG THÔNG TIN CỦA ĐẠI HỌC KHOA HỌC, ĐẠI HỌC HUẾ VỀ ĐẠI DỊCH COVID-19</h1>
            </div>
            <div className="header__nav wide">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <Link className="header__nav-link" to="/declare">
                            Khai báo y tế
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <Link className="header__nav-link" to="/support">
                            Đăng ký xin hỗ trợ
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <Link className="header__nav-link" to="/request">
                            Đăng ký mở hoạt động
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <Link className="header__nav-link" to="/admin">
                            Admin
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
     );
}
 
export default Header;