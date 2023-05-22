const Input = ({ label, id, state, setState, type, name }) => {
  return (
    <div className="form-floating mb-2 border border-primary rounded">
      <input
        type={type}
        name={name}
        className="form-control"
        id={id}
        autoComplete="true"
        required
        placeholder={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Input;
