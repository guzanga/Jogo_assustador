function randomiza (){
    let min = Math.ceil(0);
    let max = Math.floor(9);
    return Math.floor(Math.random() * (max - min) + min);
}

let num1 = randomiza()
let num2 = randomiza()
let num3 = randomiza()

if (num1 === num2){
    num1 = randomiza()
}  else if(num1 === num3){
    num1 = randomiza()
}

if (num1 === num3){
    num1 = randomiza()
}else if(num2 === num3){
    num2 = randomiza()
}

if (num3 === num1){
    num3 = randomiza()
} else if(num3 === num2){
    num3 = randomiza()
}


function Jogo(props){



    return(

        <div>

            {num1 === 0 && (
                <div>
                    <img src="/caixao.png"/>
                    <img src=""/>
                </div>
            )}
            {num1 === 1 && (
                <div>
                    <img src="/caixao.png"/>
                    <img src=""/>
                </div>
            )}
            {num1 === 2 && (
                <div>
                    <img src="/caixao.png"/>
                    <img src=""/>
                </div>
            )}
            {num1 === 3 && (
                <div>
                    <img src="/caixao.png"/>
                    <img src=""/>
                </div>
            )}
            {num1 === 4 && (
                <div>
                    <img src="/caixao.png"/>
                    <img src=""/>
                </div>
            )}
            {num1 === 5 && (
                <div>
                    <img src="/caixao.png"/>
                    <img src=""/>
                </div>
            )}
            {num1 === 6 && (
                <div>
                    <img src="/caixao.png"/>
                    <img src=""/>
                </div>
            )}
            {num1 === 7 && (
                <div>
                    <img src="/caixao.png"/>
                    <img src=""/>
                </div>
            )}
            {num1 === 8 && (
                <div>
                    <img src="/caixao.png"/>
                    <img src=""/>
                </div>
            )}
            {num1 === 9 && (
                <div>
                    <img src="/caixao.png"/>
                    <img src=""/>
                </div>
            )}

        </div>
    )
}

export default Jogo