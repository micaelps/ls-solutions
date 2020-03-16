function min(array) {
  let menor = array[0];
  for ( let number of array){
    if (number<menor)
      menor= number
  }
  return menor;
}

function max(array) {
  let maior = array[0];
  for (let number of array){
    if (number>maior)
      maior= number
  }
  return maior;
}

function range(length, last, step) {
  const start = last ? length : 0;
  const end = last || length;
  step = step || 1;
  
  let array = [];

  for (let number = start; number < end; number += step) {
    array.push(number);
  }
  return array;
}



function zip(...arrays) {
  const qtd = arrays.length
  const result = []
  for(let i=0; i<qtd;i++){
    const temp = []
    for(let j=0;j<arrays[i].length;j++){
      temp.push(arrays[j][i])
    }
    result.push(temp)
  }
  return result;
}

function uniq(array) {
  const set = new Set(array)
  const unico  = []

  for(const i of set){
    unico.push(i)
  }
  return unico;
}

function sortNum(array) {
  return array.sort((a,b)=>a-b)

   
}

export { min, max, range, zip, uniq, sortNum };
