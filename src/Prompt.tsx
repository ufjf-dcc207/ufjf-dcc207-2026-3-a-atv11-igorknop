import { useRef, useState } from "react";
import Tela from "./Tela";

export default function Prompt() {
    const [entrada, setEntrada] = useState("");
    const [comando, setComando] = useState("");
    const [x, setX] = useState(150);
    const [y, setY] = useState(75);
    const refInput = useRef(null);

    function aoDigitar(evento) {
        setEntrada(evento.target.value);
        console.log(evento.target.value);
    }
    function aoExecutar() {
        console.log(refInput.current)
        setComando(entrada);
        refInput.current.select();
        const params = entrada.split(" ");
        if (params[0] === "move") {
            const novoX = parseInt(params[1]);
            const novoY = parseInt(params[2]);
            setX(novoX);
            setY(novoY);
        }
    }
    return (
        <div>
            <input ref={refInput} onChange={aoDigitar} />
            <button onClick={aoExecutar}>Executar</button>
            <div>Comando: {comando}</div>
            <Tela x={x} y={y} />
        </div>
    );
}