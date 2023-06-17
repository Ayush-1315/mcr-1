import { Link } from "react-router-dom";
import navbar from "./navbar.module.css";
import { useLocation } from "react-router-dom";
export const Navbar=()=>{
    const location=useLocation();
    return <nav className={navbar.navbar}>
        <div><Link to="/" className={navbar.brand}>{location.pathname!=="/"?<><span className="material-symbols-outlined navIcons">
arrow_back
</span>Back</>:"Book Shelf" }</Link></div>
        <div><Link to="/search" className={navbar.navLinks}><span className="material-symbols-outlined navSearch">
search
</span></Link></div>
    </nav>
}