import { useEffect, useRef } from "react";

type TelaProps = {
    x: number,
    y: number
}

export default function Tela({x, y}: TelaProps) {
    let x0 = 0;
    const refCanvas = useRef(null);
    const refAnimacao = useRef(-1);
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
    }, []);

    function quadro(t) {

        x0 = x0 + 1;
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
        ctx.ellipse(x+x0, y, 5, 5, 0, 0, 2*Math.PI, false);
        ctx.closePath();
        ctx.fill();


    }
    return (<>
        <canvas ref={refCanvas}></canvas>
    </>);

}