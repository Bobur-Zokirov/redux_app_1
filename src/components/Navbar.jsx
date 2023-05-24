import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem } from "../helpers/persistence-storage";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../slice/authSlice";

const Navbar = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    removeItem("token");
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <div className="d-flex flex-column flex-md-row align-items-center py-3 mt-2  mb-4 container bg-dark bg-gradient">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link
          to="/"
          className="d-inline-flex link-body-emphasis text-decoration-none"
        >
          <h4 className="text-white">Asosiy</h4>
        </Link>
      </div>

      <nav className="d-inlene-flex mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? (
          <div className="d-flex">
            <p className="me-3 m-0 text-white text-decoration-none fs-5 ">
              {user.username}
            </p>
            <button onClick={logoutHandler} className="btn btn-outline-danger">
              Log out
            </button>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              type="button"
              className="btn btn-outline-primary me-2"
            >
              Login
            </Link>
            <Link to="/register" type="button" className="btn btn-primary">
              Register
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
