import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Research from "./Research";
import { AuthProvider } from '../contexts/auth';
import { ToastProvider } from '../contexts/toast';


export default function Routing() {
   return (
      <AuthProvider>
         <ToastProvider>
            <Routes>
               <Route path="/home" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/research" element={<Research />} />
               <Route exact path="/" element={<Login />} />
            </Routes>
         </ToastProvider>
      </AuthProvider>
   );
}
