import logo from "./logo.svg";
import "./App.css";
import image from "./image/im1.jpg";
function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark  text-white">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ color: "white" }} href="#">
            Victrix.Tech
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{background-color:" white" !impotant" }}
          >
            <span className="navbar-toggler-icon " style={{color:"white !important"}}></span>
          </button>
          <div
            className="collapse navbar-collapse text-white "
            id="navbarSupportedContent"
            style={{ color: "white" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end text-white ">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "white" }}
                >
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{ color: "white" }}
                  aria-current="page"
                  href="#"
                >
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }} href="#">
                  Link
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{ color: "white" }}
                  aria-current="page"
                  href="#"
                >
                  ContactUS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{ color: "white" }}
                  aria-current="page"
                  href="#"
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  // aria-expanded="false"
                  style={{ color: "white" }}
                >
                  Other Pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button
                className="btn btn-outline-success"
                style={{ color: "white" }}
                type="submit"
              >
                Request A Quote
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div id="div1" className="container-fluid">
        <div className="row">
          <div className="col-md-8 text-center">
            <hr />
            <h1>EXTRAORDINARY DIGITAL EXPERIENCE</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button>Read More</button>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div>
          <div className="row m-20">
            <div className="col-md-12 text-start ">
              <h2>WELCOME TO</h2>
              <h2>VICTRIX TECH</h2>
              <p style={{ textAlign: "center", textOverflow: "ellipsis" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="div2" className="container-fluid">
        <div className="row mt-5 mb-5">
          <h2>WHY WE ARE SPECIAL</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <ul className="d-flex">
            <li>Genuine</li>
            <li>Trusteworthuness</li>
            <li>Responsibility</li>
            <li>Call Support</li>
          </ul>
        </div>
      </div>
      {/* carosul  */}
      <div
        id="carouselExample"
        class="carousel slide"
        style={{ height: "400px" }}
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default App;
