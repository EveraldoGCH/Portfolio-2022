// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Me from "./screens/Me";
import PantallaPrincipal from "./screens/PantallaPrincipal";
import "./assets/css/App.css"

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<PantallaPrincipal/>}/>
    <Route path="/Yo" element={<Me/>}/>
  </Routes>
  </BrowserRouter>
    // <div className="App">
    // </div>
  );
}

export default App;
