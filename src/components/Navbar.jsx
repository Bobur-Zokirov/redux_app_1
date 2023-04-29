import { Link } from "react-router-dom"

const Navbar = () => {
  return (
<div class="container bg-dark bg-gradient mt-2">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <Link to="/" class="d-inline-flex link-body-emphasis text-decoration-none">
          <h4 className="text-white">Asosiy</h4>
        </Link>
      </div>

      <div class="col-md-3 text-end">
        <Link to="/login" type="button" class="btn btn-outline-primary me-2">Login</Link>
        <Link to="/register" type="button" class="btn btn-primary">Sign-up</Link>
      </div>
    </header>
  </div>
  )
}

export default Navbar