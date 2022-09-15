import { BrowserRouter } from "react-router-dom";
import "./style.css";

import Rute from "./Rute/rute";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Rute />
    </BrowserRouter>
  );
}

export default App;
