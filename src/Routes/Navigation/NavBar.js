import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from './NavBarCss.module.css'
import { signOutUser } from "../../Utils/FireBase/FireBaseUtils";
import CartIcon from "../../Components/CartIcon/CartIcon";
import {useSelector} from 'react-redux'
import { selectCurrentUser } from "../../store/user/user.selector";

const NavBar = () => {
    const currentUser = useSelector(selectCurrentUser)
    
    const handleLogout =  async () => {
        await signOutUser()
    }

    return (
        <div className={styles.container}>
            <div className={styles.navBar}>

                <Link to="/">
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="60px" height="60px"><path d="M18.36 3.48C17.93 4.94 16.59 6 15 6s-2.93-1.06-3.36-2.52C12.7 3.17 13.83 3 15 3S17.3 3.17 18.36 3.48zM15 8A1 1 0 1015 10 1 1 0 1015 8zM15 20A1 1 0 1015 22 1 1 0 1015 20zM18.36 26.52C17.3 26.83 16.17 27 15 27s-2.3-.17-3.36-.48C12.07 25.06 13.41 24 15 24S17.93 25.06 18.36 26.52zM27 15c0 1.17-.17 2.3-.48 3.36C25.06 17.93 24 16.59 24 15c0-1.59 1.06-2.93 2.52-3.36C26.83 12.7 27 13.83 27 15zM21 14A1 1 0 1021 16 1 1 0 1021 14zM9 14A1 1 0 109 16 1 1 0 109 14zM6 15c0 1.59-1.06 2.93-2.52 3.36C3.17 17.3 3 16.17 3 15c0-1.17.17-2.3.48-3.36C4.94 12.07 6 13.41 6 15zM25.53 9.23c-1.33.73-3.04.53-4.17-.59-1.12-1.13-1.32-2.84-.59-4.17C22.77 5.57 24.43 7.23 25.53 9.23zM19.243 9.757A1 1 0 1019.243 11.757 1 1 0 1019.243 9.757zM10.757 18.243A1 1 0 1010.757 20.243 1 1 0 1010.757 18.243zM9.23 25.53c-2-1.1-3.66-2.76-4.76-4.76 1.33-.73 3.04-.53 4.17.59C9.76 22.49 9.96 24.2 9.23 25.53zM8.64 8.64C7.51 9.76 5.8 9.96 4.47 9.23c1.1-2 2.76-3.66 4.76-4.76C9.96 5.8 9.76 7.51 8.64 8.64zM10.757 9.757A1 1 0 1010.757 11.757 1 1 0 1010.757 9.757zM19.243 18.243A1 1 0 1019.243 20.243 1 1 0 1019.243 18.243zM25.53 20.77c-1.1 2-2.76 3.66-4.76 4.76-.73-1.33-.53-3.04.59-4.17C22.49 20.24 24.2 20.04 25.53 20.77z" /></svg>
                </Link>

                <div className="flex space-x-20 navBarClass font-mono items-center ">
                    <Link to="/Shop">SHOP</Link>
                    <Link to="/Contact">CONTACT</Link>
                    {
                     currentUser ?  <span className="hover:cursor-pointer" onClick={handleLogout}>Sign Out</span>  : <Link to='/Auth'>Sign In</Link>
                        }
                        
                    <CartIcon></CartIcon>

                </div>

            </div>
            <div className={styles.Outlet}>
                <Outlet />
            </div>
           
        </div>
    )
}

export default NavBar