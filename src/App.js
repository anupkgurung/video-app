import "./App.css";
import { Routes , Route} from "react-router-dom";
import { Home, Signup, Login, WatchLater, Playlist } from "./pages";
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
     </Routes>
    </div>
  );
}

export default App;
