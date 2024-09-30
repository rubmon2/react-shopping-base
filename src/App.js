import { Routes, Route } from "react-router-dom";
import './App.css';
import { Headers } from "./component/Headers";
import { Homepage } from "./pages/Homepage";
import { CarritoPage } from "./pages/CarritoPage";

function App() {
  return (
<div>
    <Headers />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/carrito" element={<CarritoPage />} />
      <Route path="/*" element={<Homepage />} />
    </Routes>
</div>
  );
}

export default App;
