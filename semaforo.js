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
function ligarTodos(){
    return semaforo.src ="img/vermelho.png";
    
   
}
function ligarA(){
    return semaforo.src ="img/amarelo.png";
}
function ligarV(){
    return semaforo.src ="img/verde.png";
}
function deixarAutomatico(){
    if(ligarTodos()){
        ligarVermelho();
    }
}
function deixarAutomaticoV(){
    if(ligarV()){
        ligarVerde();
    }
}
function deixarAutomaticoA(){
    if(ligarA()){
        ligarAmarelo();
    }
}
function ligarAutomatico(){
    parar()
    idInterval = setInterval(deixarAutomatico,10);
    idInterval = setInterval(deixarAutomaticoA,10);
    idInterval = setInterval(deixarAutomaticoV,10);
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
