export function TesteRef(){
    let variavel = 2;

    function incrementaVariavel() {
        variavel++;
        console.log(variavel);
    }
    return (
    <div>
        <h2>TesteRef</h2>
        <ul>
            <li>variavel: {variavel}
                <button onClick={incrementaVariavel}>+</button>
            </li>
        </ul>
        
    </div>)
}