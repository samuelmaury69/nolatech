import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Headerlive from './Components/HeaderLive'
import Register from './Pages/Register';
import ListUser from './Pages/ListUser';
import ProtectedRoutes from './ProtectRoutes';


function App() {
  return (
    <div className="App">
      <Headerlive />
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<Register />} path="/Register" />
          <Route element={<ProtectedRoutes />}>
            <Route element={<Home />} path="/home" />
            <Route element={<ListUser />} path="/List" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
