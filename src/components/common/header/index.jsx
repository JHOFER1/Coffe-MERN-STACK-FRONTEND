import Sign from "./signin";
// import './index.scss';
import Addcoffe from "../../addcoffee";
import {Link} from 'react-router-dom';
import Search from '../searchBar';
import Logo from "../logoinicio";
import Register from "../../register";
import {useIsLoggedIn} from "../../../const/auth";
import {useEffect, useState } from "react";

// const Header= () => {
    function Header() {
        const us=useIsLoggedIn()
        const [isLog, setisLog] = useState(us);
        useEffect(()=>{
            setisLog(us);
        },[us])
          
return(
    <>
    <header className="header-container">
        <Link to="/">
                <div className="img1">
                <Logo/>
                </div>
        </Link>
        <ul>
            {isLog?
            <li>
            <Link to="/profile">My Cooffes</Link>
            </li>:
            <li>
            <Link to="/nocoffee">Coffes</Link>
            </li>
            }
        </ul>
        <div>
            {isLog?
            <Addcoffe/>:
            null
            }
        </div>
        <div className="search-container">
        {isLog?<Search/>:null}       
        </div>
        <div>
            <Register/>
        </div>
        <div>
            <Sign/>
        </div>      
    </header>
    </>
    );
}
export default Header;
