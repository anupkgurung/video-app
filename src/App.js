import "./App.css";
import { Routes , Route} from "react-router-dom";
import { Home, Signup, Login, WatchLater } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/watchlater" element={<WatchLater />} />
     </Routes>
    </div>
  );
}

export default App;
