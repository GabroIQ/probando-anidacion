import { Routes , Route , Link } from "react-router-dom"
import Contacto from "./Contacto"
import Inicio from "./Inicio"
import Productos from "./Productos"

const Header = () => {
    return(
        <div>

        
        <header className="header">
            <h1>AltoLogo</h1>
                <ul className="header__nav">
                    <li><Link to={"/"}>Inicio</Link></li>
                    <li><Link to={"/productos"}>Productos</Link></li>
                    <li><Link to={"/contacto"}>Contacto</Link></li>
                </ul>
        </header>
            <div className="fondo">
                <Routes>
                    <Route path="/" element={<Inicio/>}/>
                    <Route path="/productos" element={<Productos/>}>
                        <Route path="opcion-1" element={<h1 className="opcion">1</h1>}/>
                        <Route path="opcion-2" element={<h1 className="opcion">2</h1>}/>
                        <Route path="opcion-3" element={<h1 className="opcion">3</h1>}/>
                    </Route>
                    <Route path="/contacto" element={<Contacto/>}/>
                </Routes>
            </div>      
        </div>

    )
}

export default Header