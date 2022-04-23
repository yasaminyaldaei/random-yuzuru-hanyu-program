import { Loading } from "../Loading";

import "./RandomProgram.css";

export function RandomProgram({ program }) {
  return (
    <div className="random-program-text-container">
      <Loading show={!program} />
      {program && <p className="random-program-text">{program}</p>}
    </div>
  );
}
