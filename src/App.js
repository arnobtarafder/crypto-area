import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import CoinDetails from './components/CoinDetails/CoinDetails';
import BdAddress from './components/Contact/BdAddress';
import JapanAddress from './components/Contact/JapanAddress';
import USAAddress from './components/Contact/UsaAddress';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element = {<Home />}></Route>
        <Route path='/coins' element = {<Coins />}></Route>
        <Route path='/coin-details/:id' element = {<CoinDetails />}></Route>

        <Route path='/contact' element = {<Contact />}>
          <Route path='bd-address' element={<BdAddress />}></Route>
          <Route path='japan-address' element={<JapanAddress />}></Route>
          <Route path='usa-address' element={<USAAddress />}></Route>
        </Route>

        <Route path='/about'></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
