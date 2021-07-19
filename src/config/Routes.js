import Login from "../Componentes/Login";
import Dashboard from "../Componentes/Dashboard";
import NotFound from "../Componentes/NotFound";
import Header from "../Componentes/Header";
import Main from "../Secciones/Main";
import Contacto from "../Secciones/Contacto";
import Cuenta from "../Secciones/Cuenta";
import Ofertas from "../Secciones/Ofertas";
import Carrito from "../Secciones/Carrito";
import Footer from "../Secciones/Footer";
import Home from "../Secciones/Home";

//ARRAY DESDE DONDE SE RECOJEN LAS RUTAS DE LA APLICACION

const routes = [
    {
        path: "/dashboard",
        component: Dashboard,
        isPrivate: true, //PROPIEDAD QUE SIRVE PARA ESTABLECER A UNA RUTA PRIVADA
    },
    {
        path: "/",
        component: Home,
    },
    {
        path: "/Home",
        component: Home,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/Main",
        component: Main,
    },
    {
        path: "/Carrito",
        component: Carrito,
        isPrivate: true,
    },
    {
        path: "/Header",
        component: Header,
    },
    {
        path: "/Ofertas",
        component: Ofertas,
        isPrivate: true,
    },
    {
        path: "/Contacto",
        component: Contacto,
        isPrivate: true,
    },
    {
        path: "/Cuenta",
        component: Cuenta,
    },
    {
        path: "/Footer",
        component: Footer,
    },
    {
        path: "/*",
        component: NotFound,
    },
];

export default routes;