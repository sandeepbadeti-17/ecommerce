import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
import Nav_Bar from './components/Nav_Bar';
import Carousel from './components/Carousel'
function App() {
  return (
    <>
    <div className="main_hero">
      <Nav_Bar/>
      <div className="container">
        <Carousel />
        {/* <LandingPage /> */}
      </div>
    </div>
    </>
  );
}

export default App;
