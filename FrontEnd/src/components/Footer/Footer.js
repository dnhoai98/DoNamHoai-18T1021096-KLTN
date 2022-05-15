import "./footer.css";
import logo from "./logo.png";

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footer__container wide">
                <div className="footer__logo">
                    <a href="/">
                        <img src={logo}/>
                    </a>
                </div>
                <div className="footer__info">
                    <h1>TRƯỜNG ĐẠI HỌC KHOA HỌC, ĐẠI HỌC HUẾ</h1>
                    <span>Địa chỉ: 77 Nguyễn Huệ - TP Huế</span>
                    <span>Điện thoại: (0234) 3823290</span>
                    <span>Email: khcndhkh@hueuni.edu.vn</span>              
                    <span>Facebook: facebook.com/husc.edu.vn</span>              
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;
