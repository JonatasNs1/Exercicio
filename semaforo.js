"use strict"
const semaforo= document.getElementById("semaforo");
let idInterval;



function ligarVermelho(evento){
    semaforo.src ="img/vermelho.png";
    if (evento)parar()
}
function ligarAmarelo(evento){
    semaforo.src ="img/amarelo.png";
   
    if (evento)parar()
}

function ligarVerde(evento){
    semaforo.src ="img/verde.png";
    if (evento)parar()
}
function semaforoVermelho(){
    return semaforo.src.includes ("vermelho");
   
}
function semaforoAmarelo(){
    return semaforo.src.includes("amarelo");
   
}
function semaforoVerde(){
    return semaforo.src.includes("verde");
   
}


function deixarAutomatico(){
    if(semaforoVermelho()){
        ligarAmarelo();
        
    }
    else if(semaforoAmarelo()){
        ligarVerde();
      
    }
    else if(semaforoVerde()){
        ligarVermelho();
    }
}



function ligarAutomatico(){
    parar()
    idInterval = setInterval(deixarAutomatico,1000);
   
}
function parar(){
    clearInterval(idInterval)
}






//eventos

    document.getElementById("vermelho")
    .addEventListener('click',ligarVermelho);
    document.getElementById("amarelo")
    .addEventListener('click',ligarAmarelo);
    document.getElementById("verde")
    .addEventListener('click',ligarVerde);
    document.getElementById("automatico")
    .addEventListener('click',ligarAutomatico);
