let secret_friend=[];
//secret friend

function agregarAmigo(){
    
  let friend_user=document.getElementById(`amigo`).value;
  if(verificar_repetidos(friend_user)){
      secret_friend.push(friend_user);
      clear_box();
  }else{
    clear_box();
    alert(`El amigo ${friend_user} ya ah sido agregado a la lista`);
    
  }
  console.log(secret_friend);
}

function verificar_repetidos(A){
    for(let i=0;i<=secret_friend.length;i++){
        if(A==secret_friend[i]){
            return false
        }
    }
    return true;
}

function clear_box(){
    document.querySelector("#amigo").value=``;
}


