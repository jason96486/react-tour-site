import { Outlet } from "react-router-dom";
import NavComponent from "./Header/nav-component";
import FooterComponent from "./Footer/footer-component";
import "./layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <NavComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
};

export default Layout;
