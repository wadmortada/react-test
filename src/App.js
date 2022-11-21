import './App.css';

import Nav from './components/Header/Nav';
import Promo from './components/Main/Promo';
import Intro1 from "./components/Main/Intro1";
import Intro2 from "./components/Main/Intro2";
import Intro3 from "./components/Main/Intro3";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Nav />
     <Promo />
     <Intro1 />
     <Intro2 />
     <Intro3 />
     <Footer />
    </div>
  );
}

export default App;
