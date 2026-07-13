import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./router/home/Home";
import Single from "./router/singler/Single";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app-wr">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Single />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
