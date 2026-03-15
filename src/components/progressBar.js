export default function ProgressBar({ progress }) {
  return (
    <div className="progress-title">
      <h1>Progress Bar</h1>
      <div className="outer">
        <div
          className="inner"
          style={{
            width: `${progress}`,
            color: `${progress <= "10%" ? "white" : "black"}`,
          }}
        >
          {progress}
        </div>
      </div>
    </div>
  );
}
