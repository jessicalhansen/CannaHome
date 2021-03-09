import { NavLink } from 'react-router-dom';

function NavBar () {
    return (
        <header className="nav-bar">
            <div className="container mx-auto flex justify-between">
                <div className="flex">
                    <NavLink exact to="/" 
                    id="logo" 
                    className="logo p-1 mx-0 text-4xl font-bold">
                        CannaHome
                    </NavLink>
                </div>
                <div className="plant-links justify-between">
                   <nav className="flex">
                        <NavLink to="/plants" 
                        className="link p-1 mx-1 inline-flex items-center text-2xl font-medium">
                        My Plants
                        </NavLink>
                        <NavLink to="/new-plant"
                        className="link p-2 mx-1 inline-flex items-center text-2xl font-medium">
                        Add a Plant
                        </NavLink>
                    </nav> 
                </div>
            </div>
        </header>
    )
}

export default NavBar;
