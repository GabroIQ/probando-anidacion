const Contacto = () => {
    return(
        <div className="contenedor">
            <form className="form">
                <label htmlFor="">Nombre</label>
                <input type="text" placeholder="Ingrese su nombre" />

                <label htmlFor="">Apellido</label>
                <input type="text" placeholder="Ingrese su apellido" />

                <label htmlFor="">Mail</label>
                <input type="email" placeholder="Ingrese su mail" />

                <textarea className="textarea" type="text" placeholder="Ingrese un comentario"></textarea>

                <button className="btn">Enviar</button>
            </form>
            
        </div>
    )
}


export default Contacto