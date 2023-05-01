import { useState } from "react";
import { logo } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { registerUserStart } from "../slice/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  function registerHandler(e) {
    e.preventDefault();
    dispatch(registerUserStart());
  }

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please register</h1>

          <Input
            label="Username"
            state={name}
            setState={setName}
            type="text"
            name="username"
          />
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
            onClick={registerHandler}
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? "Please wait..." : "Register"}
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2023</p>
        </form>
      </main>
    </div>
  );
};

export default Register;
