import { Outlet } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";


const Layout = () => {
  return (
    <>
      <MyNavbar/>
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
