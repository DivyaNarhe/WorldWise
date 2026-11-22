import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Styles from "./PageNav.module.css"
function PageNav(){
    return(
        <nav className={Styles.nav}>
            <Logo/>
            <ul>
                <li>
                    <NavLink to="/product">Product</NavLink>
                </li>
                <li>
                    <NavLink to="/pricing">Pricing</NavLink>
                </li>
                <li>
                    <NavLink className={Styles.ctaLink} to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default PageNav;