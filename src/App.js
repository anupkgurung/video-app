import "./App.css";
import { Routes , Route} from "react-router-dom";
import { Home, Signup, Login, WatchLater, Playlist, PlaylistVideo, SingleVideo, History, LikedVideo } from "./pages";
import { Navbar, Modal } from "./components";

function App() {
  return (
    <div className="App">
    <Modal />
    <Navbar /> 
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/playlist/:id" element={<PlaylistVideo />} />
          <Route path="/video/:id" element={<SingleVideo />} />
          <Route path="/history" element={<History />} />
          <Route path="/likedvideos" element={<LikedVideo />} />
     </Routes>
    </div>
  );
}

export default App;
