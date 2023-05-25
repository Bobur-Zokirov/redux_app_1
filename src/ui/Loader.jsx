const Loader = () => {
  return (
    <div className="d-flex justify-content-center gap-3 align-items-center">
      <div className="spinner-border" role="status"></div>
      <span className="sr-only fs-3">Loading...</span>
    </div>
  );
};

export default Loader;
