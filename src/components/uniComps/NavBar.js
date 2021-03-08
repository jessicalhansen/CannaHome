import { NavLink } from 'react-router-dom';

function NavBar () {
    return (
        <header>
            <div className="container mx-auto flex justify-evenly">
                <div className="flex">
                    <NavLink exact to="/">
                        CannaHome
                    </NavLink>
                </div>
                
            </div>
        </header>
    )
}

export default NavBar;
