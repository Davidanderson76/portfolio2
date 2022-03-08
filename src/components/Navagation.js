import React from "react";

const navStyle = {
  backgroundColor: "#313131",
  textAlign: "center",
};

function Navagation() {
  return (
    <div>
      <nav
        class="navbar sticky-top navbar-expand-lg navbar-dark"
        style={navStyle}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            D // A
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navagation;
