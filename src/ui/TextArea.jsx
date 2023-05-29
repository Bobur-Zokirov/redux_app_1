const TextArea = ({ label, id, state, setState, name, height }) => {
  return (
    <div className="form-floating mb-2 border border-primary rounded">
      <textarea
        className="form-control"
        placeholder={label}
        name={name}
        id={id}
        style={{ height: height }}
        required
        value={state}
        onChange={(e) => setState(e.target.value)}
      ></textarea>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default TextArea;
