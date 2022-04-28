import RandomProgramContainer from "./components/RandomProgramContainer";

import "./App.css";
import { useRedirect } from "./hooks/useRedirect";

function App() {
  useRedirect();
  return (
    <div className="page-container">
      <RandomProgramContainer />
    </div>
  );
}

export default App;
