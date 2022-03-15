import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login";

export default function Routing() {
   return (
      <Routes>
         <Route path="/home" element={<Home />} />
         <Route exact path="/" element={<Login />} />
      </Routes>
   );
}
