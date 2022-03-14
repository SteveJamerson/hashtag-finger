import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

export default function Routing() {
   return (
      <Routes>
         <Route path="/home" element={<Home />} />
      </Routes>
   );
}
