import React, { useEffect, useState } from 'react';
import Card from "../Componentes/Card";
import Header from "../Componentes/Header";
import InfoModal from '../Componentes/infoModal';

const Main = () => {
    
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
    
    useEffect(() => {
        getProductos();
    }, []);
    
    return (
        <div className=" bg-primary ">
            <div>
                <Header/>
                <InfoModal/>
            </div>
           <h1>Productos</h1>

            <div className="d-flex flex-wrap justify-content-around">
                
                {
                    Object.keys(productos).map(identificador => 
                        <Card 
                            className="my-2 "
                            titulo = {productos[identificador].product_name} 
                            descripcion = {productos[identificador].description}
                            seleccionado = {productos[identificador].isActive}
                            identificador = {productos[identificador]._id}
                            precio = {productos[identificador].price}
                            imagen = {productos[identificador].image}
                            key={identificador}/>)
                }
            </div>
        </div>
    )
}
export default Main;
