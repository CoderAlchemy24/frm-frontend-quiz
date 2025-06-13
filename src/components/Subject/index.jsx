function Subject({ title, icon, onClick }) {
  return (
    <div className="subject-container" onClick={onClick}>
      <img src={icon} alt="subject-icon" />
      <h2 className="subject-h2">{title}</h2>
    </div>
  );
}

export default Subject;
