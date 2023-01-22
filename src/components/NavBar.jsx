import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";


function NavBar() {
    const navRef = useRef();

    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav")
    }

    return(
        <header>
            <h3>LOGO</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Search</a>
                <a href="/#">Library</a>
                <button onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    )
}

export default NavBar;