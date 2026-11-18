import { useState } from "react";

export default function Prompt() {
    const [entrada, setEntrada] = useState("");
    const [comando, setComando] = useState("");
    function aoDigitar(evento){
        setEntrada(evento.target.value);
        console.log(evento.target.value);
    }
    function aoExecutar() {
        setComando(entrada);
    }
    return (
        <div>
            <input onChange={aoDigitar}/>
            <button onClick={aoExecutar}>Executar</button>
            <div>Comando: {comando}</div>
        </div>
    );
}