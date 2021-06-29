import React from 'react'

const Header = () => {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" aria-current="page" href="https://www.google.com">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.google.com">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.google.com">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.google.com">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage: "url('https://th.bing.com/th/id/R955794765a46cc7a46341a22cfdb1fad?rik=sv2ekRXYqhAsbg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2019%2f01%2fOnline-shopping.jpg&ehk=xmDj627D3Bod%2bHDa6MiHdTK3EFWPeWaRsidA14WHEj8%3d&risl=&pid=ImgRaw')",
            height: "400px"
            }}>
          <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">Super tiendas</h1>
                <h4 className="mb-3" style={{color: "royalblue"}}>Grandes ahorros!!! </h4>
                <a className="btn btn-outline-light btn-lg" href="#!" role="button"
                  >Call to action</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;
