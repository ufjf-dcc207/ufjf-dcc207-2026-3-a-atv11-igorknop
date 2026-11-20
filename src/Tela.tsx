import { useEffect, useRef } from "react";

type TelaProps = {
    x: number,
    y: number
}

export default function Tela({x, y}: TelaProps) {
    const refCanvas = useRef(null);
    const refAnimacao = useRef(-1);
    const x0 = useRef(0);
    const y0 = useRef(0);

    useEffect(() => {
        desenhar();
    },[x,y]);

    useEffect(()=>{
        
        refAnimacao.current = 
        requestAnimationFrame(quadro);
        console.log("Começando...", refAnimacao.current)

        return ()=>{
            console.log("Cancelando...", refAnimacao.current)
            cancelAnimationFrame(refAnimacao.current);
        }
    }, [x,y]);

    function quadro(t) {

        x0.current = x0.current + (x - x0.current)*0.16;
        y0.current = y0.current + (y - y0.current)*0.16;
        desenhar();

        requestAnimationFrame(quadro)
    }

    function desenhar() {
        //console.log("desenhar!");
        if (!refCanvas.current) return;
        const canvas: HTMLCanvasElement = refCanvas.current;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "lightblue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.ellipse(x0.current, y0.current, 5, 5, 0, 0, 2*Math.PI, false);
        ctx.closePath();
        ctx.fill();


    }
    return (<>
        <canvas ref={refCanvas}></canvas>
    </>);

}