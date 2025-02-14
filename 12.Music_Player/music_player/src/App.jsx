import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Add from "./components/Add";
import Show from "./components/Show";
import { ToastContainer } from "react-toastify";
import Edit from "./components/Edit";


function App() {
    
   const [songList, setSongList] = useState(JSON.parse(localStorage.getItem("songList"))||[])

  return (
    <div className="overflow-x-hidden">
      <ToastContainer position="bottom-right"/>
      <Routes>
        <Route path="/" element={<Add  songList={songList} setSongList={setSongList}/>} />
        <Route path="/show" element={<Show  songList={songList}  setSongList={setSongList}/>} />
        <Route path="/edit/:id" element={<Edit songList={songList} setSongList={setSongList}/>} />
      </Routes>
    </div>
  );
}

export default App;
