import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Research from "./Research";

export default function Routing() {
   return (
      <Routes>
         <Route path="/home" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/research" element={<Research />} />
         <Route exact path="/" element={<Login />} />
      </Routes>
   );
}
