




const botao_login = document.querySelector(".action");
/*botao_login.onclick = teste;
botao_login.addEventListener('click', teste);*/

const form = document.querySelector("form");

const body = document.querySelector('body');

botao_login.addEventListener('click', event=>{
    event.preventDefault(); /*Como o botão é do tipo submit(definimos isso no html) então estamos fazendo com que ele não faça o submit aqui*/
    const fields = [ ... document.querySelectorAll('.input-group input')];
    fields.forEach( field => {
        if(field.value === ""){
            form.classList.add('validate-error');
        }
    });

    const formError = document.querySelector('.validate-error');    
    if(formError){
        formError.addEventListener('animationend', (event) => {
            if(event.animationName === "nono"){
                console.log(typeof(formError)==="undefined");
                formError.classList.remove("validate-error");
            }
        });
    }
    else{
        form.classList.add("form-hide");
    }    
});

form.addEventListener('animationstart', event =>{
    if(event.animationName === "down"){
        body.style.overflow = 'hidden';//Para fazer sumir a barra de rolagem
    }
});

form.addEventListener('animationend', event => {
    if(event.animationName === "down"){
        form.style.display = "none";
        body.style.overflow = "none"//Para fazer a barra de rolagem voltar ao normal ao encerrar a animação
    }
})

function teste(){
    console.log("yay")
}

// SQUARES HIHI =D

const ulSquares = document.querySelector("ul.squares");

for (let i=0;i<11;i++){
    const li = document.createElement("li");
    
    const random = (min, max) => Math.random() * (max - min) + min

    const size = Math.floor(random(10,120)); //floor para arredondar os valores. O random sorteia valores entre 0 e 1. 120 é o tamanho máximo, 10 é o mínimo. Somamos ao mínimo(10) no final.
    const position = random(1,99);
    const delay = random(5, 0.1);
    const duration = random(24,12);
    
    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;
    li.style.left =  `${position}%`;
    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

    ulSquares.appendChild(li);
}