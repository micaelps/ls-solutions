const listaArray = require('./ExercicioII');

function inverterNumero(n){
    let iteravel = String(n).split("")
    let invertido="";
    index = iteravel.length-1;
    
    iteravel.map((x)=>{
        invertido+=iteravel[index]
        index--
    })
    return invertido;
}

function primo (num) {
    for(let i = 2; i < num; i++)
      if(num % i === 0) {
          return false;
      };
    return num > 1;
  }

function acumuladorArray(array){
    let arrayRetorno = []
    array.map((n)=>{
        arrayRetorno.push(n*(n+1)/2)
    })
    return arrayRetorno;
}

function acimaMedia(array){
    const media = listaArray.sum(array)/array.length;
    return array.filter((x)=>x >media);
}

function range(x,y){
    return listaArray.range(x+1,y)
}
