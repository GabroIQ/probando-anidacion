import { Link, Outlet } from "react-router-dom"

const Productos = () => {
    return(
        <div className="contenedor">
            <h1>Hola simple mortal</h1>
            <h3>Estas en la parte de PRODCUTOS</h3>
            <p>En esta seccion se mostrarian los prodcutos, ej:</p>
            <div className="contenedor__prodcutos">
                <Link to={"opcion-1"} className="producto__fondo">1</Link>
                <Link to={"opcion-2"} className="producto__fondo">2</Link>
                <Link to={"opcion-3"} className="producto__fondo">3</Link>
            </div>
            <Outlet></Outlet>
        </div>
    )
}


export default Productos