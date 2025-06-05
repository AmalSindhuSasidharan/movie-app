import "./App.css";
import Movies from "./Movies";
import WatchList from "./WatchList";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/watchList" element={<WatchList />}></Route>
      </Routes>
    </>
  );
}

export default App;
