import React from "react";
import { useAuthDispatch, logout } from "../context";
import Main from "../Secciones/Main";
function Dashboard(props) {
    const dispatch = useAuthDispatch(); // read dispatch method from context
    const handleLogout = () => {
        logout(dispatch); //call the logout action

        props.history.push("/login"); //navigate to logout page on logout
    };
    return (
        <div className="dashForm ">
            <div className="d-flex justify-content-between">
                <h1>Dashboard</h1>
                <button className="gradient-button-2" onClick={handleLogout}>Salir</button>
            </div>
            <p className="text-center" style={{"font-size": "30px"}} >Bienvenido a tu cuenta</p>
            <Main/>
        </div>
    );
}

export default Dashboard;