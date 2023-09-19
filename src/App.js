import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import "./components/HoverAnimation";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <canvas
          id="canvas"
          className="absolute left-0 w-full max-w-full h-screen -z-10"
        ></canvas>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
