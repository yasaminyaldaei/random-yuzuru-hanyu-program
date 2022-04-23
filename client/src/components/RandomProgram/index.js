import { Loading } from "../Loading";

import "./RandomProgram.css";

export function RandomProgram({ program }) {
  return (
    <div className="random-program-text-container">
      <Loading show={!program} />
      {program && (
        <div className="random-program-text-inner-container">
          <span>✨ </span>
          <p className="random-program-text"> {program}</p> <span> ✨</span>
        </div>
      )}
    </div>
  );
}
