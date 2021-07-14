let user = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).role
    : "";

let token = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).token
    : "";

//creamos el estado inicial 
//UserDetails es para almacenar el objeto de usuario devuelto por el servidor al iniciar secion correctamente, intentamos leer las variables desde el local storage
//para mantener el estado iniciado de todas las pestañas
//TOKEN : es para almacenar el token de auth devuelto por el servidor y se conserva en el localstorage del navegador
//Loading : es para almacenar el estado de carga del formulario
//Errormsg : es para almacenar el mensaje de rror devuelto si falla el inicio de sesion

export const initialState = {
    userDetails: "" || user,
    token: "" || token,
    loading: false,
    errorMessage: null,
};

// Creamos la funcion reductora que acepta un initial state y un tipo ({type: action_type}) como argumentos y luego devuelve un nuevo estado basado
//en 
export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case "REQUEST_LOGIN":
            return {
                ...initialState,
                loading: true,
            };

        case "LOGIN_SUCCESS":
            return {
                ...initialState,
                user: action.payload.role,
                token: action.payload.token,
                loading: false,
            };
        case "LOGOUT":
            return {
                ...initialState,
                user: "",
                token: "",
            };

        case "LOGIN_ERROR":
            return {
                ...initialState,
                loading: false,
                errorMessage: action.payload.message,
            };
    }
};