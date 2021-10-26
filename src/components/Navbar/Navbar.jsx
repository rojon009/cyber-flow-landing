import React from 'react';

const Navbar = () => {
  return (
    <div className="d-flex justify-content-center">
      <nav className="navbar navbar-expand-sm navbar-dark bg-transparent fs-4 text-uppercase">
        <div className="container-fluid justify-content-center text-center">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Articles</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Photos
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Photo 1</a></li>
                  <li><a className="dropdown-item" href="/">Photo 2</a></li>
                  <li><a className="dropdown-item" href="/">Photo 3</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
};

export default Navbar;