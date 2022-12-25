import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
// import Carousel from './components/Carousel'
import LandingPage from './components/LandingPage';
import Data from './components/Temp/Data';
function App() {
  return (
    <>
    <div className="main_hero">
      <NavBar/>
      <div className="container">
        {/* <Carousel /> */}
        <LandingPage img={'https://cdn.pixabay.com/photo/2022/10/14/08/03/earbuds-7520738_960_720.jpg'} no={1}/>
        <Data/>
      </div>
    </div>
    </>
  );
}

export default App;
