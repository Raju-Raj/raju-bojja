import './App.css';
import About from './components/About/About';
import Explore from './components/Explore/Explore';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <div>
         <Home/>
      </div>
      <div>
        <Explore/>
      </div>
      <div>
         <About/>
      </div>
      <div>
         <Footer/>
      </div>
    </div>
  );
}

export default App;
