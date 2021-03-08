import { NavLink } from 'react-router-dom';

function NavBar () {
    return (
        <header className="nav-bar">
            <div className="container mx-auto flex justify-between">
                <div className="flex">
                    <NavLink exact to="/" 
                    id="logo" 
                    className="logo p-0 mx-1">
                        CannaHome
                    </NavLink>
                </div>
                <nav className="flex">
                    <NavLink to="/plants" 
                    className="link inline-flex items-center">
                        My Plants
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;
