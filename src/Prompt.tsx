import { useRef, useState } from "react";

export default function Prompt() {
    const [entrada, setEntrada] = useState("");
    const [comando, setComando] = useState("");

    const refInput = useRef(null);

    function aoDigitar(evento){
        setEntrada(evento.target.value);
        console.log(evento.target.value);
    }
    function aoExecutar() {
        console.log(refInput.current)
        setComando(entrada);
        refInput.current.select();
    }
    return (
        <div>
            <input ref={refInput} onChange={aoDigitar}/>
            <button onClick={aoExecutar}>Executar</button>
            <div>Comando: {comando}</div>
        </div>
    );
}