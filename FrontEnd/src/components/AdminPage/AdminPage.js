
import Menu from "./Menu";
import "./adminpage.css";
import { Outlet } from "react-router-dom";


const AdminPage = () => {
    return ( 
        <div class="row admin__container">
            <div class="col-2">
                <Menu />              
            </div>
            <div class="col">
                <Outlet />
            </div>
        </div>
     );
}
 
export default AdminPage;