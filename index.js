const elementosA = document.querySelectorAll(".elementoA");
const elementosB = document.querySelectorAll(".elementoB");

let clicouNoA = false;
let alvo = null;
let coordenadasPontoA = null;
// TRAÇO DA LINHA
const tela = document.querySelector("#areaCanva");
const context = tela.getContext('2d');
tela.width = 1200;
tela.height = 600;

elementosA.forEach(elementoA => {
    elementoA.addEventListener("click", (e) => {
        let elemento = e.target;
        coordenadasPontoA = elemento.getBoundingClientRect();
        clicouNoA = true;
        console.log(coordenadasPontoA);
        alvo = elemento.dataset.vincular;
    })
})


elementosB.forEach(elementosB => {
    elementosB.addEventListener("click", (e) => {
        if (clicouNoA === true) {
            clicouNoA = false;

            let elemento = e.target;
            console.log(elemento);
            let alvoParaClicar = document.querySelector(alvo);

            if (elemento == alvoParaClicar) {
                let coordenadasPontoB = elemento.getBoundingClientRect();


                
                context.beginPath(); // INICIA O DESENHO
                context.lineWidth = 4;
                context.strokeStyle = "#c35952";
                context.moveTo(coordenadasPontoA.x, coordenadasPontoA.y); // Coordenadas de onde eu quero mover meu cursor
                context.lineTo(coordenadasPontoB.x, coordenadasPontoB.y);
                context.stroke(); // FAZ O DESENHO



            }

        }
    })
})