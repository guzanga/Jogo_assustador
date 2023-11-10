import caixacss from './Caixao.module.css'
import {useState} from "react";

function Caixao(props){

  function som() {
        let audio = new Audio("/RisadaBruxa.mp3")
        audio.play()
    }

    const [Aberto, setAberto] = useState(false)
    // função que altera pontos e muda imagem
    function click(){
        setAberto(true)

        if (props.bixo1 !== props.numero && props.bixo2 !== props.numero && props.bixo3 !== props.numero){
            props.setPontos(props.pontos + 10)
        }
        else{
            props.setPontos(props.pontos - 10)
            som()
        }

    }

    return(
        <div>
            <div>
                <a onClick={click}>
                    {Aberto === false ? (
                        <div>
                            <img className={caixacss.tamanho} alt={""} src={"/caixao.png"} />
                        </div>
                    ) : (
                        <div>
                            {props.bixo1 === props.numero && <img className={caixacss.tamanho} alt={""} src="/fantasma1.png"/>}
                            {props.bixo2 === props.numero  &&  <img className={caixacss.tamanho} alt={""} src="/espantalho1.png" />}
                            {props.bixo3 === props.numero &&  <img className={caixacss.tamanho} alt={""} src="/morte1.png" />}
                            {(props.bixo1 !== props.numero && props.bixo2 !== props.numero && props.bixo3 !== props.numero) && <img className={caixacss.tamanho} alt={""} src="/doces1.png" />}
                        </div>
                    )}



                </a>
            </div>

        </div>
    )
}

export default Caixao
