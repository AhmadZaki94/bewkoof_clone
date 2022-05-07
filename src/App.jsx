// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Home/Navbar';
import {Routes,Route} from "react-router-dom"
import { Home } from './components/Home/Home';
import {Men} from './components/Home/Men'
import { Women } from './components/Home/Women';
import { MobileCover } from './components/Home/MobileCover';
import { Login } from './components/Home/Login';
import { Wishlist } from './components/Home/Wishlist';
// import { Cart } from './components/Home/Cart';
import { Signup } from './components/Home/Signup';
import { Cart } from './components/Cart/Cart';
import {Footer} from './components/Home/Footer'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        {/* <Route><Home/></Route> */}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Home/men' element={<Men/>}></Route>
        <Route path='/Home/women' element={<Women/>}></Route>
        <Route path='/Home/mobilecovers' element={<MobileCover/>}></Route>
        <Route path='/Home/login' element={<Login/>}></Route>
        <Route path='/Home/wishlist' element={<Wishlist/>}></Route>
        <Route path='/Home/cart' element={<Cart/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/Cart/cart' element={<Cart/>}></Route>
        <Route path='/Home/footer'  element={<Footer/>}></Route>
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
