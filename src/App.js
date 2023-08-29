import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import "./styles/App.scss";
import "./components/HoverAnimation";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <canvas id="canvas"></canvas>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
