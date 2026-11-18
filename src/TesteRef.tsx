import { useRef, useState } from "react";

export function TesteRef(){
    let variavel = 2;
    const [estado, setEstado] = useState(3);
    const referencia = useRef(1);

    function incrementaVariavel() {
        variavel++;
        console.log("variável: ", variavel);
    }
    function incrementaEstado() {
        setEstado(estado+1);
        console.log("estado: ", estado);
    }
    function incrementaReferencia() {
        referencia.current++;
        console.log("referencia.current: ", referencia.current);
    }
    return (
    <div>
        <h2>TesteRef</h2>
        <ul>
            <li>variavel: {variavel}
                <button onClick={incrementaVariavel}>+</button>
            </li>
            <li>estado: {estado}
                <button onClick={incrementaEstado}>+</button>
            </li>
            <li>referencia.current: {referencia.current /* errado*/}
                <button onClick={incrementaReferencia}>+</button>
            </li>
        </ul>
        
    </div>)
}