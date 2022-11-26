import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar () {
    return(
     <nav className="nav">
        <a href="/" className="site-title">Rick and morty App</a>
        <ul>
            <li className="active">
                <a href="/contacto">Registro</a>
            </li>
            <li>
                <a href="/UncontrolledExample">Galeria</a>
            </li>

        </ul>
    </nav>
    )
}