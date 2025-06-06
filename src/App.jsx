import "./App.css";
import Movies from "./Movies";
import WatchList from "./WatchList";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";

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
