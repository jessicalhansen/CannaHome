import { NavLink } from 'react-router-dom';
import logo from '../../images/cannahomelogofull.png';

function NavBar () {
    return (
        <header className="nav-bar">
            <div className="container mx-auto flex justify-between">
                <div className="flex">
                    <NavLink exact to="/" 
                    id="logo" 
                    className="logo pt-1 mx-0 text-4xl font-bold">
                        <img src={logo} alt="CannaHome" id="logo-img" />
                    </NavLink>
                </div>
                <div className="plant-links justify-between items-end">
                   <nav className="flex">
                        <NavLink to="/plants"
                        activeClassName="active-link underline text-lime-800"
                        className="link pr-3 mx-1 inline-flex items-center text-2xl font-bold text-primary">
                        My Plants
                        </NavLink>
                        <NavLink to="/new-plant"
                        activeClassName="active-link underline text-lime-800"
                        className="link mx-1 inline-flex items-center text-2xl font-bold text-primary">
                        Add a Plant
                        </NavLink>
                    </nav> 
                </div>
            </div>
        </header>
    )
}

export default NavBar;
