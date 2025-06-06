import "./App.css";
import WatchList from "./Components/WatchList/WatchList";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/watchList" element={<WatchList />}></Route>
      </Routes>
    </>
  );
}

export default App;
