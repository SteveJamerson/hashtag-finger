import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About";
import Login from "./Login";

export default function Routing() {
   return (
      <Routes>
         <Route path="/home" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route exact path="/" element={<Login />} />
      </Routes>
   );
}
