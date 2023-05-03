const Input = ({ label, state, setState, type, name }) => {
  return (
    <div className="form-floating mb-2 border border-primary rounded">
      <input
        type={type}
        name={name}
        className="form-control"
        // id="floatingInput"
        autoComplete="true"
        required
        placeholder={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
};

export default Input;
