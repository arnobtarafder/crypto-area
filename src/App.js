import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import CoinDetails from './components/CoinDetails/CoinDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element = {<Home />}></Route>
        <Route path='/coins' element = {<Coins />}></Route>
        <Route path='/coins-details/:id' element = {<CoinDetails />}></Route>
        <Route path='/contact' element = {<Contact />}></Route>
        <Route path='/about' element = {<About />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
