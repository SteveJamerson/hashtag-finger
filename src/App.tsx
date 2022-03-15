import { Helmet } from "react-helmet";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./pages/routes";
import GlobalStyle from "./components/Tokens/global";

function App() {
   return (
      <>
         <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin=""
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
               rel="stylesheet"
            />
         </Helmet>
         <GlobalStyle />
         <Router>
            <Routing />
         </Router>
      </>
   );
}

export default App;
