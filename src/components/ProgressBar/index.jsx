function ProgressBar({ current }) {
  const percent = Math.round((current) * 9.8);

  return (
    <div className="bar">
      <div
        className="progress"
        style={{
          width: `${percent}%`,
          height: "3px",
          backgroundColor: "purple",
          
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
