import './NavBar.css'
import CartWidget from '../Landing/CartWidget';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ofertas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contactanos</a>
                        </li>

                    </ul>

                    <CartWidget />

                    <a className="nav-link login-button" href="#">Login</a>
                   
                </div>
            </nav>
        </div>
    )
}

export default NavBar
