import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
function Nav_Bar() {
  return (
    <>
     <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <a class="navbar-brand logo" href="#">
            L_og_o
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a
                  className="nav-link active nav_element"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a className="nav-link nav_element" href="/">
                  Earphones
                </a>
              </li>
              <li class="nav-item">
                <a className="nav-link nav_element" href="/">
                  HeadPhones
                </a>
              </li>
              <li class="nav-item">
                <a className="nav-link nav_element" href="/">
                  Speakers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <span className="nav_icon">
              <FaShoppingCart />
              {/* <FaBeer /> */}
            </span>
            <span className="nav_icon">
              <CgProfile />
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav_Bar