import NavBar from "./Routes/Navigation/NavBar";
import { Route,Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import SignIn from "./Routes/SignIn/SignIn";
import Shop from "./Routes/Shop/Shop";
import Contact from "./Routes/ContactUs/ContactUs";
import Payments from "./Routes/Payments/Payments";
import './index.css'

function App() {
  return (
    <div>
      <NavBar/>

      <Routes>
          <Route path="/" element = {<Home />}></Route>
          <Route path="/SignIn" element = {<SignIn />}></Route>
          <Route path="/Shop" element = {<Shop />}></Route>
          <Route path="/Contact" element = {<Contact/>}></Route>
          <Route path="/Payments" element = {<Payments />}></Route>
      </Routes>
    </div>
  );
}

export default App;
