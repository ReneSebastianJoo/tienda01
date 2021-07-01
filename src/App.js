import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "../src/Componentes/Header";
import Main from "../src/Secciones/Main";
import Contacto from "../src/Secciones/Contacto";
import Cuenta from "../src/Secciones/Cuenta";
import Ofertas from "../src/Secciones/Ofertas";
import Carrito from "../src/Secciones/Carrito";
import Footer from "../src/Secciones/Footer";

function App() {
  return (

      
      <Router>

        <Header/>
        
        
        <Switch>
          {/* Definir un componente por ruta */}
          <Route exact path= "/Contacto" component={Contacto}/>

          <Route exact path="/Cuenta" component={Cuenta}/>

          <Route exact path='/Ofertas' component={Ofertas}/>

          <Route exact path='/Carrito' component={Carrito}/>

        </Switch>
        <Main/>
        <Footer/>
      </Router>

  );
}

export default App;
