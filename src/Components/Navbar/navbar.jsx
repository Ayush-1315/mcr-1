import { Link } from "react-router-dom";
import navbar from "./navbar.module.css";
import { useLocation } from "react-router-dom";
export const Navbar=()=>{
    const location=useLocation();
    return <nav className={navbar.navbar}>
        <div><Link to="/" className={navbar.brand}>{location.pathname!=="/"?"<- Back":"Book Shelf" }</Link></div>
        <div><Link to="/search" className={navbar.navLinks}>🔍</Link></div>
    </nav>
}