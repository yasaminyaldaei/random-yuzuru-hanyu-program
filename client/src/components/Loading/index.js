import "./Loading.css";

export function Loading({ show }) {
  if (!show) return null;
  return (
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
