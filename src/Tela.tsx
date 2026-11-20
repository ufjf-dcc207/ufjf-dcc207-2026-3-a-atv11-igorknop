import { useEffect, useRef } from "react";

type TelaProps = {
    x: number,
    y: number
}

export default function Tela({x, y}: TelaProps) {
    const refCanvas = useRef(null);
    useEffect(() => {
        desenhar();
    },[x,y]);

    function desenhar() {
        console.log("desenhar!");
        if (!refCanvas.current) return;
        const canvas: HTMLCanvasElement = refCanvas.current;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "lightblue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.ellipse(x, y, 5, 5, 0, 0, 2*Math.PI, false);
        ctx.closePath();
        ctx.fill();


    }
    return (<>
        <canvas ref={refCanvas}></canvas>
    </>);

}