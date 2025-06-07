import "./App.css";
import WatchList from "./Components/WatchList/WatchList";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar";
import MovieContextWrapper from "./Components/MovieContextWrapper";

function App() {
  return (
    <>
      <NavBar />
      <MovieContextWrapper>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/watchList" element={<WatchList />}></Route>
        </Routes>
      </MovieContextWrapper>
    </>
  );
}

export default App;
