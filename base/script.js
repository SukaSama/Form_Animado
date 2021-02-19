




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
        body.style.overflow = 'hidden';
    }
});

form.addEventListener('animationend', event => {
    if(event.animationName === "down"){
        form.style.display = "none";
        body.style.overflow = "none"
    }
})

function teste(){
    console.log("yay")
}