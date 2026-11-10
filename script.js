const botoesCurtir = document.querySelectorAll(".curtir ");
botoesCurtir.forEach(function(botaoCurtir){
    let curtiu = false;
    botaoCurtir. addEventlistener("click", curtir);
 function cuirtir (){
    const contador = botaoCurtir.querySelector("span");
    if(curtiu == false){
        contador.textContent++;
        curtiu = true;
        } else{
            contador.textContent--;
            curtir = false;
        }
 }   
    
}
});



const btnTema = document.querySelector(".btn-tema");
btnTema.addEventlistener("click", mudarTema);
function mudarTema(){
    document.body.classList.toggle("tema-escuro");
}
