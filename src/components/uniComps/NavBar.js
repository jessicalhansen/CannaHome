import { NavLink } from 'react-router-dom';
import logo from '../../images/logocannahome.png';

function NavBar () {
    return (
        <header className="nav-bar">
            <div className="container mx-auto flex justify-between">
                <div className="flex flex-row">
                    <NavLink exact to="/" 
                    id="logo" 
                    className="logo pt-1 mx-0 text-4xl font-bold">
                        <div className="flex">
                            <img src={logo} alt="CannaHome" id="logo-img" />
                            <h1 className="my-2">CannaHome</h1>
                        </div>
                        
                    </NavLink>
                </div>
                <div className="plant-links justify-between items-end m-2">
                   <nav className="flex">
                        <NavLink to="/plants"
                        activeClassName="active-link underline text-primary"
                        className="link pr-3 mx-1 inline-flex items-center text-2xl font-bold">
                        My Plants
                        </NavLink>
                        <NavLink to="/new-plant"
                        activeClassName="active-link underline text-primary"
                        className="link mx-1 inline-flex items-center text-2xl font-bold">
                        Add a Plant
                        </NavLink>
                    </nav> 
                </div>
            </div>
        </header>
    )
}

export default NavBar;
