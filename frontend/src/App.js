import "./App.css";
import Navbar from "./Pages/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import UserDetails from "./Pages/UserDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userdetail" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
