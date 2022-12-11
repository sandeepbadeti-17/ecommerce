import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";

export default function Nav_Bar() {
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container nav_hero">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand logo" href="/">
            L_og_o
          </a>
          <div className="nav_icons1">
            <span className="nav_icon cart">
              {/*  */}
              <button type="button" class="btn btn-dark position-relative">
                <FaShoppingCart />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  99+
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>
              {/* <FaBeer /> */}
            </span>
          </div>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarTogglerDemo03"
          >
            <ul class="nav justify-content-center nav_menu">
              <li class="nav-item avatar2">
                <a
                  className="nav-link active nav_element"
                  aria-current="page"
                  href="/"
                >
                  {" "}
                  Login/SignUp
                  <span className="nav_icon ">
                    <CgProfile />
                  </span>
                </a>
              </li>
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
          <div className="nav_icons2">
            <span className="nav_icon cart">
              <button type="button" class="btn btn-dark position-relative">
                <FaShoppingCart />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  99+
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>
            </span>
            <span className="nav_icon avatar">
              <CgProfile />
            </span>
          </div>
        </div>
      </nav>
      <form class="container d-flex justify-content-center mt-2">
        <input
          class="form-control me-2 search_bar md-w-50"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </>
  );
}
