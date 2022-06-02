import { Routes, Route } from "react-router-dom";

import { RANDOM_PROGRAM_RT, SP_3A_SBS } from "./routes";
import RandomProgramContainer from "./components/RandomProgramContainer";
import ShortProgram3AsSBS from "./pages/sp-3a-sbs";

import "./App.css";

function App() {
  return (
    <div className="page-container">
      <Routes>
        <Route path={RANDOM_PROGRAM_RT} element={<RandomProgramContainer />} />
        <Route path={SP_3A_SBS} element={<ShortProgram3AsSBS />} />
      </Routes>
    </div>
  );
}

export default App;
