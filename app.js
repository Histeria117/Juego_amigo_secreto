let secret_friend=[];
//secret friend

function agregarAmigo(){
  let friend_user=document.getElementById(`amigo`).value;
   if(verificar_valido()){
      
        if(verificar_repetidos(friend_user)){
            secret_friend.push(friend_user);
            clear_box();
        }else{
            clear_box();
            alert(`El amigo ${friend_user} ya ah sido agregado a la lista`);
            
        }
        console.log(secret_friend);
       }
       else{
        alert(`Ingresa un nombre valido `);
     }
  
}
//Sorteamos un amigo de la lista secret_friend y borramos el contenido de lu para hacer un nuevo li (miembro) y este sera el unico siendo el del amigo sorteado
function sortearAmigo(){
    let numero_sorteado=Math.floor(Math.random()*(secret_friend.length));
    let lista=document.querySelector(`#listaAmigos`);
    lista.innerHTML=``;
    let resultado=document.createElement(`li`);
    resultado.innerHTML=`El amigo secreto es: `+ secret_friend[numero_sorteado];
    document.querySelector(`#listaAmigos`).appendChild(resultado);
}
//Actualizacion de la lista haciendo primero un borrado de la lista de html para que no se duplique la informacion 
function actualizar_lista_amigos(){
    let lista=document.querySelector(`#listaAmigos`);
    lista.innerHTML=``;
    for(let i=0;i<secret_friend.length;i++){
        let titulo=document.createElement(`li`);
        titulo.innerHTML=secret_friend[i];
        document.querySelector(`#listaAmigos`).appendChild(titulo);
    }
}
 //Verificamos que ningun miembro este repetido 
function verificar_repetidos(A){
    for(let i=0;i<=secret_friend.length;i++){
        if(A==secret_friend[i]){
            return false
        }
    }
    return true;
}
//Limpieza de la caja de texto 
function clear_box(){
    document.querySelector("#amigo").value=``;
}
function verificar_valido(){
     if(document.querySelector(`#amigo`).value==``){
        return false;
     }
    return true; 
}

