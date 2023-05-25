import { useEffect, useState } from "react";
import { logo } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import {
  signUserFailure,
  signUserStart,
  signUserSuccess,
} from "../slice/authSlice";
import AuthService from "../service/authServise";
import { useNavigate } from "react-router-dom";
import { ValidationError } from "./";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isLoading, loggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { username, email, password };
    try {
      const response = await AuthService.userRegister(user);
      dispatch(signUserSuccess(response.data.user));
      navigate("/");
    } catch (error) {
      dispatch(signUserFailure(error?.response?.data?.errors));
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);

  return (
    <div className="text-center mt-5 container">
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
          <ValidationError />

          <Input
            label="Username"
            id={"registerUsername"}
            state={username}
            setState={setUsername}
            type="text"
            name="username"
          />
          <Input
            label="Email address"
            id={"registerEmail"}
            state={email}
            setState={setEmail}
            type="email"
            name="email"
          />
          <Input
            label="Password"
            id={"registerPassword"}
            state={password}
            setState={setPassword}
            type="password"
            name="password"
          />
          <button
            className="w-100 btn btn-lg btn-primary"
            onClick={registerHandler}
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? (
              <>
                <span
                  className="spinner-grow spinner-grow-sm mr-3"
                  role="status"
                  aria-hidden="true"
                ></span>
                Please wait...
              </>
            ) : (
              "Register"
            )}
          </button>
          <p className="mt-5 mb-3 text-body-secondary">
            © 2023 All rights reserved
          </p>
        </form>
      </main>
    </div>
  );
};

export default Register;
