import './NavBar.css'
import logo from '../../logo.svg';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">

                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" width="30" height="30" />
                        React Coder
                    </a>
                    
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nuetros Planes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contactanos</a>
                        </li>

                    </ul>

                    <a className="nav-link login-button" href="#">Login</a>
                   
                </div>
            </nav>
        </div>
    )
}

export default NavBar
