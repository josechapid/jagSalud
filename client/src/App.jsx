import Home from "./views/home/Home";
import NavBar from "./components/navBar/NavBar";
import { Route, Routes } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App;
