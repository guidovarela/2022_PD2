
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

//Condicional sin else
if(nombre_usuario != null){
    alert('Hola '+nombre_usuario)
}else if(nombre_usuario == null){
    alert('Debe completar su nombre')
}

let nota = parseInt(prompt('Insertar calificacion: '))

/* 0-3 desaprobado */
/* 4-6 regular */
/* 7-8 Muy bueno */
/* 9-10 excelente */

/* 
|| or
&& and
*/

if(nota <= 3){
    console.log('desaprobado')
}else if(nota > 4 && nota <= 6){
    console.log('regular')
}else if(nota > 6 && nota <=8){
    console.log('Muy bueno')
}else{
    console.log('Excelente')
}

