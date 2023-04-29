import { Routes, Route } from "react-router-dom"
import { Login, Main, Register } from "./components"

export const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}
