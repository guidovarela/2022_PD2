
// condicionales

/* 

if(condicion){
    // condicion se verifica verdadera
}else{
    //condicion se verifica falsa
}

*/
let nombre_usuario = prompt('Ingresa tu usuario')

if(nombre_usuario == null){
    alta_usuario = false
}else{
    alta_usuario = true
}

if(alta_usuario == true){
    alert('Usuario registrado')
}else{
    alert('No estas registrado :(')
}