import React, { useEffect, useState } from 'react';
import Card from "../Componentes/Card";
// import Crear from '../componentes/Crear';

const Main = () => {
    // Traer tareas de firebase
    // 1. función que haga petición get a firebase DONE
    // 2. Mandar llamar función cuando el componente Main se monte DONE
    // 3. Crear variable de estado para guardar nuestrar tareas DONE
    // 4. Crear una card por cada tarea
    // Variables de estado
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
    // Función que elimina una tarea
    // const deleteTarea = (id) => {
    //     console.log('delete tarea');
    //     const URL = `https://miniproy001-15129-default-rtdb.firebaseio.com/tareas/${id}.json`;
    //     fetch(URL, { method: 'DELETE' })
    //         .then(body => body.json())
    //         .then(respuesta => {
    //             // Refrescar las tareas
    //             getTareas();
    //             console.log(respuesta)
    //         });
    // }
    // Función que actualiza una tarea: Cambia el status de completada a true
    // const seleccionarProducto = (id, titulo, descripcion, seleccionado) => {
    //     const URL = `https://miniproy001-15129-default-rtdb.firebaseio.com/tareas/${id}.json`;
    //     let objetoBody = {
    //         titulo,
    //         descripcion,
    //         seleccionado
    //     }
    //     fetch(URL, { method: 'PATCH', body: JSON.stringify(objetoBody) })
    //         .then(respuesta => respuesta.json())
    //         .then(res => {
    //             console.log(res);
    //             getTareas();
    //         });
    // }

    // const crearTarea = (titulo, descripcion) => {
    //     const URL = 'https://miniproy001-15129-default-rtdb.firebaseio.com/tareas.json';

    //     const objBody = {
    //         titulo,
    //         descripcion,
    //         completada: false
    //     };

    //     fetch(URL, { method: 'POST', body: JSON.stringify(objBody)})
    //         .then(body => body.json())
    //         .then(respuesta => console.log(respuesta));
    // }

    // El callback del useEffect se ejecutará antes de que el componente se monte
    useEffect(() => {
        getProductos();
    }, []);
    return (
        <div className="container">
            <h1>Productos</h1>
            {/* <div className="my-5">
                <Crear crearTarea={crearTarea}/>
            </div> */}

            <div className="d-flex flex-wrap">
                {
                    Object.keys(productos).map(identificador => 
                        <Card 
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
