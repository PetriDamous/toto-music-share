import React from "react";
import AddSong from "./components/AddSong.component";
import Header from "./components/Header.component";
import SongList from "./components/SongList.component";
import SongPlayer from "./components/SongPlayer.component";

function App() {
  return (
    <>
      <Header />
      <AddSong />
      <SongList />
      <SongPlayer />
    </>
  );
}

export default App;
