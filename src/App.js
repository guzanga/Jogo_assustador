
import './App.css';
import Caixao from "./components/Caixao";
import Header from "./components/Header";
import {useState} from "react";
import Ponto from "./components/Ponto";


function randomiza(){
    let min = Math.ceil(1);
    let max = Math.floor(9);
    return Math.floor(Math.random() * (max - min) + min);
}

let bixo1 = randomiza()
let bixo2 = randomiza()
let bixo3 = randomiza()

if (bixo1 === bixo2){
    bixo1 = randomiza()
}  else if(bixo1 === bixo3){
    bixo1 = randomiza()
}

if (bixo1 === bixo3){
    bixo1 = randomiza()
}else if(bixo2 === bixo3){
    bixo2 = randomiza()
}

if (bixo3 === bixo1){
    bixo3 = randomiza()
} else if(bixo3 === bixo2){
    bixo3 = randomiza()
}


if (bixo2 === bixo3){
    bixo2 = randomiza()
} else if(bixo3 === bixo1){
    bixo3 = randomiza()
}

console.log(bixo3, bixo2, bixo1)

function App() {

    const [pontos, setPontos] = useState(0)

    return (


    <div className="App">
        <Header></Header>
        <div className="todo" style={{backgroundImage: "url(/fundo.png)"}}>
            <div className="div1">
                <Caixao numero={1} pontos={pontos} setPontos={setPontos} bixo1={bixo1} bixo2={bixo2} bixo3={bixo3}></Caixao>
                <Caixao numero={2} pontos={pontos} setPontos={setPontos} bixo1={bixo1} bixo2={bixo2} bixo3={bixo3}></Caixao>
                <Caixao numero={3} pontos={pontos} setPontos={setPontos} bixo1={bixo1} bixo2={bixo2} bixo3={bixo3}></Caixao>
            </div>
            <div className="div1">
                <Caixao numero={4} pontos={pontos} setPontos={setPontos} bixo1={bixo1} bixo2={bixo2} bixo3={bixo3}></Caixao>
                <Caixao numero={5} pontos={pontos} setPontos={setPontos} bixo1={bixo1} bixo2={bixo2} bixo3={bixo3}></Caixao>
                <Caixao numero={6} pontos={pontos} setPontos={setPontos} bixo1={bixo1} bixo2={bixo2} bixo3={bixo3}></Caixao>
            </div>
            <div className="div1">
                <Caixao numero={7} pontos={pontos} setPontos={setPontos} bixo1={bixo1} bixo2={bixo2} bixo3={bixo3}></Caixao>
                <Caixao numero={8} pontos={pontos} setPontos={setPontos} bixo1={bixo1} bixo2={bixo2} bixo3={bixo3}></Caixao>
                <Caixao numero={9} pontos={pontos} setPontos={setPontos} bixo1={bixo1} bixo2={bixo2} bixo3={bixo3}></Caixao>
            </div>
            <Ponto pontos={pontos}></Ponto>
        </div>

    </div>
  );
}

export default App;
