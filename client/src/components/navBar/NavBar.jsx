import "./NavBar.css"
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/Button";


function NavBar () {
    return (
        <>
           <div>LOGO</div>
           <div>
                <div>
                    <Link to="/">
                        <Button name='Inicio'/>
                    </Link>
                    <Link to="/servicio">
                        <Button name='Servicio'/>
                    </Link>
                    <Link to="/turnos">
                        <Button name='Turnos'/>
                    </Link>
                    <Link to="/contacto">
                        <Button name='Contacto'/>
                    </Link>
                </div>
                <div><Button name='Iniciar Sesion'/></div>
           </div>
        </>
    )
}

export default NavBar;