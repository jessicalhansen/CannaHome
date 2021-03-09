import NavBar from './components/uniComps/NavBar';
import Footer from './components/uniComps/Footer';
import Routes from './config/routes';

function App() {
  return (
    <div id="app">
      <NavBar />
      <div className="app-routes">
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
