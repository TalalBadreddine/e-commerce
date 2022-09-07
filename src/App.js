import NavBar from "./Routes/Navigation/NavBar";
import { Route,Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Authentication from "./Routes/Authentication/Authentication";
import Shop from "./Routes/Shop/Shop";
import Contact from "./Routes/ContactUs/ContactUs";
import Checkout from "./Routes/Checkout/Checkout";
import './index.css'

function App() {
  return (
    
    <div>

      <Routes>

          <Route path="/" element = {<NavBar />}>

              <Route  index path="/" element = {<Home />}></Route>
              <Route path="Auth" element = {<Authentication />}></Route>
              <Route path="Shop" element = {<Shop />}></Route>
              <Route path="Contact" element = {<Contact/>}></Route>
              <Route path="Checkout" element = {<Checkout />}></Route>

          </Route>

      </Routes>

    </div>

  );
}

export default App;
