import React from 'react';
import Main from "./Main";

const Home = () => {
    return (
        <div className="bg-info">
            <h1 className="text-center">Pagina Principal</h1>
            <div className="d-flex justify-content-between">
                <a className="btn orangeNeon " style={{backgroundColor: "Gold"}} href="/Login">Logeate</a>
                <a className="btn greenNeon " style={{backgroundColor: "lightgreen"}} href="/Cuenta">Registrate</a>
            </div>
            <Main/>
        </div>
    )
}


export default Home
