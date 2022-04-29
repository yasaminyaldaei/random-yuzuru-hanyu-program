import { Loading } from "../Loading";

import "./RandomProgram.css";

export function RandomProgram({ program }) {
  return (
    <div className="random-program-text-container">
      <Loading show={!program} />
      {program && (
        <div className="random-program-text-inner-container">
          <span className="sparkles">✨</span>
          <h3 className="random-program-text"> {program}</h3>{" "}
          <span className="sparkles">✨</span>
        </div>
      )}
    </div>
  );
}
