import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import ViewAttendanse from "./components/ViewAttendanse";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { state } = useAuthContext();

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={state.user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!state.user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!state.user ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/viewAttendance"
            element={
              state.user?.role === `${import.meta.env.VITE_ROLE}` ? (
                <ViewAttendanse />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
