import React, { useReducer } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from "./config/Routes";
import { AuthProvider } from "./context";
import AppRoutes from "../src/Componentes/AppRoutes";

function App() {
  return (

    <AuthProvider>
    <Router>
        <Switch>
            {routes.map((route) => (
                <AppRoutes //COMPONENTE CREADO PARA RENDERIZAR A CADA UNA DE LAS RUTAS SEAN PUBLICAS O PRIVADAS (REEMPLAZA AL <ROUTE/> DEL ROUTER-DOM)
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    isPrivate={route.isPrivate}
                />
            ))}
        </Switch>
    </Router>
</AuthProvider>
);
}

export default App;
