import { useState } from "react";
import { logo } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { loginUserStart } from "../slice/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  function loginHandler(e) {
    e.preventDefault();
    dispatch(loginUserStart());
  }
  return (
    <div>
      <div className="text-center mt-5">
        <main className="form-signin w-25 m-auto">
          <form>
            <img className="mb-4" src={logo} alt="" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Please login</h1>

            <Input
              label="Email address"
              state={email}
              setState={setEmail}
              type="email"
              name="email"
            />
            <Input
              label="Password"
              state={password}
              setState={setPassword}
              type="password"
              name="password"
            />

            <button
              className="w-100 btn btn-lg btn-primary"
              onClick={loginHandler}
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? "loading..." : "Login"}
            </button>
            <p className="mt-5 mb-3 text-body-secondary">© 2023</p>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;
