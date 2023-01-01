import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Cart from "./Pages/Cart"
import Navbar from "./Pages/Navbar"
import Footer from './Pages/Footer';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <div className="App">
          
          <BrowserRouter>
          <CartProvider>
          <Navbar />
            <Routes>
                <Route path="*" element={<Home />} />
                <Route exect path="/" element={<Home />} />
                <Route exect path="/login" element={<Login />} />
                <Route exect path="/signup" element={<Signup />} />
                <Route exect path="/Cart" element={<Cart />} />

            </Routes>
          <Footer />
          </CartProvider>
          </BrowserRouter>
          
          
    </div>
  );
}

export default App;
