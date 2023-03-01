function ordenarArrays(){

    const numeros = [];
    const letras = [];
    const mezclados = [2, 150,"h", "pedro", "AB", 250, 35, "Lou",455];
    let i = 0;

    while (i <= mezclados.length){
        if (isNaN(mezclados[i])){
            mezclados.shift[i];
            letras.push(mezclados[i])
        }
        if(!isNaN(mezclados[i])){
            numeros.push(mezclados[i])
        }
        i++
    }
    console.log("el array de letras contiene: " +letras)
    console.log("el array de numeros contiene: " + numeros)
    console.log(Math.max(...numeros))
}
ordenarArrays()

///////////////////////////////////////////////////////////////////////////////////////////////////////

function verificarNumero() {

    let a = 10
    let positivo = false
    const array = [10, 11, "a", 25, "b", 123, ]

    for (i = 0; i < array.length || positivo; i++) {
        if (array[i] == a) {
            positivo = true;
            console.log("el numero se encuentra en el array")
            break;
        }
    }
}
verificarNumero()

//////////////////////////////////////////////////////////////////////////////////////////////////////

function generarRandomId(){
    
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let id="";
    
    for (let i =0 ; i<4 ; i++){
        id+= caracteres.charAt(Math.floor(Math.random()* caracteres.length))
    }
    id+= "-";
    for (let i =0 ; i<4 ; i++){
        id+= caracteres.charAt(Math.floor(Math.random()* caracteres.length))
    }
    id+= "-";
    for (let i =0 ; i<4 ; i++){
        id+= caracteres.charAt(Math.floor(Math.random()* caracteres.length))
    }
    id+= "-";
    for (let i =0 ; i<4 ; i++){
        id+= caracteres.charAt(Math.floor(Math.random()* caracteres.length))
    }

   return id;
}
const randomId = generarRandomId();
console.log(randomId)
generarRandomId();