import React, {useState} from "react";
import Error from "./Error";
import shortid from "shortid";

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(true)
    const [gastos, guardarGastos] = useState([]);

    /*const agregarNuevoGasto = gasto =>{
        console.log(gasto);
    }*/


    const agregarGasto = e => {
        e.preventDefault();
        //validar
        if(cantidad<1 || isNaN(cantidad) || nombre.trim() ===''){
            guardarError(true);
            return;
        }
        guardarError(false)
        //construir el gato
        const gasto ={
            nombre,
            cantidad,
            id:shortid.generate()
        }

        //pasar los componentes principales
        guardarGasto(gasto);
        guardarCrearGasto(true);
        //resetear el form
        guardarNombre('');
        guardarCantidad(0);
    }

    return(
        <form
        onSubmit={agregarGasto}
        >
            <h2>Agrega aqui tus gastos</h2>

            {Error ? <error mensaje="Ambos sonn requeridos o presupuesto incorrecto"/> : null  } 

            <div className="campo">
                <label>Nombre Gasto</label>
                <input type="text" className="u-full-width" placeholder="EJ. comida"
                value={nombre} onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>cantidad del Gasto</label>
                <input type="number" className="u-full-width" placeholder="EJ. 500"
                value={cantidad} onChange={e => guardarCantidad( parseInt (e.target.value))}
                />

            </div>
            <input type="submit" className="button-primary u-full-width"
            value="agregar gasto" />
        </form>
    );
}

export default Formulario;
