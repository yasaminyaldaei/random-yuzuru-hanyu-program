import "./RandomProgram.css";

export function RandomProgram({ program }) {
  return (
    <div className="random-program-text-container">
      {program && <p className="random-program-text">{program}</p>}
    </div>
  );
}
