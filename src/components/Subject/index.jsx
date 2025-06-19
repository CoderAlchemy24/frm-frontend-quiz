function Subject({ title, icon, onClick }) {
  return (
    <div 
      className="subject-container" 
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
      onClick={onClick}>
      <img src={icon} alt={`${title}-icon`}  />
      <h2 className="subject-h2">{title}</h2>
    </div>
  );
}

export default Subject;
