import React, { useState } from "react";
import { registerUser } from "../context";
import Main from "../Secciones/Main";

function Cuenta(props) {
    // Estados para almacenar los datos introducidos en los input

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // ESTA FUNCION MANEJA EL ENVIO DE LOS DATOS HACIA EL SERVIDOR
    const handleReg = async (e) => {
        e.preventDefault();

        try {
            let response = await registerUser({ first_name, last_name, password, email }); //La accion de login user hace la peticion mediante el metodo de envio que le dice el dispatch, envia en un objeto los datos de inicio de sesion y maneja los cambios de estado
            console.log("RESPUESTA!!", response);
            if (!response.role) return; //Verifica si existe la propiedad role del usuario
            props.history.push("/dashboard"); //Si es asi, Navegamos al dashboard
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <div className="text-center gForm" >
                <h1 className="fw-bold mb-2 text-uppercase text-dark">Pagina de Registro</h1>
                <form>
                    <div className="d-flex justify-content-center align-items-center h-100 ">
                    <div className="form-outline mb-4">
                        <label className="label m-2" htmlFor="first_name">Nombre</label>
                        <input
                            type="text"
                            id="first_name"
                            value={first_name} //asignamos el valor del estado del input
                            onChange={(e) => setFirstName(e.target.value)} //Seteamos al estado lo que se escriba en el input
                            />
                    </div>
                    <div className="form-outline mb-4">
                            <label className="label m-2" htmlFor="first_name">Apellido</label>
                            <input
                                type="text"
                                id="last_name"
                                value={last_name} //asignamos el valor del estado del input
                                onChange={(e) => setLastName(e.target.value)} //Seteamos al estado lo que se escriba en el input
                            />
                        </div>
                        
                        <div className="form-outline mb-4">
                            <label className="label m-2" htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                value={email} //asignamos el valor del estado del input
                                onChange={(e) => setEmail(e.target.value)} //Seteamos al estado lo que se escriba en el input
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="label" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password} //asignamos el valor del estado del input
                                onChange={(e) => setPassword(e.target.value)} //Seteamos al estado lo que se escriba en el input
                            />
                        </div>
                    </div>
                    {/* //estado de carga de datos del formulario. Si se estan cargando los datos, deshabilita el BOTON para evitar que el usuario siga haciendo click hasta que se obtiene una respuesta */}
                    <button className="btn orangeNeon " style={{backgroundColor: "Gold", fontSize: "larger"}} onClick={handleReg} >
                        Registrate
                    </button>
                </form>
            </div>
            <Main/>
        </div>
    );
}

export default Cuenta;