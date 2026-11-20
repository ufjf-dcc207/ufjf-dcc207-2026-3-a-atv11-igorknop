import { useEffect, useRef } from "react";

export default function Tela() {
    const refCanvas = useRef(null);
    useEffect(() => {
        desenhar();
    },[]);

    function desenhar() {
        console.log("desenhar!");
        if (!refCanvas.current) return;
        const canvas: HTMLCanvasElement = refCanvas.current;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "lightblue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "red";
        ctx.ellipse(150, 75, 5, 5, 0, 0, 2*Math.PI, false);
        ctx.fill();


    }
    return (<>
        <canvas ref={refCanvas}></canvas>
    </>);

}