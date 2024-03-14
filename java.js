let visor = document.querySelector('.visor');

function digitar(input){
    visor.innerHTML += input;
}

function deletaTudo(){
    visor.innerHTML = "";
}

function deletaUltimoDig(){
    visor.innerHTML = visor.innerHTML.toString().slice(0, -1);
}

function resultado(){
    visor.innerHTML = eval(visor.innerHTML);
}


