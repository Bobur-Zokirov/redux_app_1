import { useCallback } from "react";
import { useSelector } from "react-redux";

const ValidationError = () => {
  const { error } = useSelector((state) => state.auth);

  const errorMessage = useCallback(() => {
    return Object.keys(error).map((name) => {
      const msg = error[name].join(", ");
      return `${name} - ${msg}`;
    });
  }, [error]);

  return (
    error !== null &&
    errorMessage().map((item) => (
      <div
        key={item}
        className="alert alert-danger m-0, mb-1 p-1 text-start"
        role="alert"
      >
        {item}
      </div>
    ))
  );
};

export default ValidationError;
