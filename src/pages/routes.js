import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from './About';

export default function Routing() {
   return (
      <Routes>
         <Route path="/home" element={<Home />} />
         <Route path="/about" element={<About />} />
      </Routes>
   );
}
