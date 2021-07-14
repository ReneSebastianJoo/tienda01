import React, { useEffect, useState } from 'react';

const Header = () => {

  const [productos, setProductos] = useState([]);
  const getProductos = () => {
    console.log('Función GET');
    const URL = 'https://ecomerce-master.herokuapp.com/api/v1/item';
    fetch(URL)
        .then(body => body.json())
        .then(respuesta => {
            console.log(respuesta);
            setProductos(respuesta);
        });
}

    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light topNav">
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
                  <a className="nav-link" href="/Home">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/Cuenta">Cuenta</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Contacto">Contacto</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/Ofertas">Ofertas!!!</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/Carrito">Carrito</a>
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
                <div className="input-group">
                  <div className="form-outline-lg busqueda">
                  <input onChange={(evento) => 
                    {getProductos(evento.target.value)}} type="text" className="form-control" placeholder="¿Qué deseas buscar?" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                    <button type="button" className="btn orangeNeon " style={{backgroundColor: "Gold"}}> Search
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;
