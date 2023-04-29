import { useState } from "react"
import { logo } from "../constants"
import { Input } from "../ui"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div>
      <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please login</h1>

          <Input label="Email address" state={email} setState={setEmail} type="email" name="email" />
          <Input label="Password" state={password} setState={setPassword} type="password" name="password" />

          <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
          <p className="mt-5 mb-3 text-body-secondary">© 2023</p>
      </form>
    </main>
  </div>
    </div>
  )
}

export default Login