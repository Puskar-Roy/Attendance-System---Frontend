import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
