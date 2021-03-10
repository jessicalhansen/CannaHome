import logo from '../images/logocannahome.png';

const HomePage = () => {
    return (
        <div className="home-container">
            <div className="flex justify-center mt-10">
                <h1 className="font-extrabold text-6xl">Welcome to CannaHome!</h1>
            </div>
            <div>
                <div className="flex justify-center">
                    <img src={logo} alt="CannaHome" />
                </div>
                <div className="flex justify-center">
                    <p className="text-4xl">Grow your own medicine.</p> 
                </div>
            </div>
        </div>
    )
};

export default HomePage;
