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
  let start = last ? length : 0;
  let end = last || length;
  step = step || 1;
  
  let array = [];

  for (let number = start; number < end; number += step) {
    array.push(number);
  }
  return array;
}



function zip(...arrays) {
  let qtd = arrays.length
  let result = []
  for(let i=0; i<qtd;i++){
    let temp = []
    for(let j=0;j<arrays[i].length;j++){
      temp.push(arrays[j][i])
    }
    result.push(temp)
  }
  return result;
}

function uniq(array) {
  // TODO
}

function sortNum(array) {
  let arr = []
  for (let item of array){
    arr.push(item)
  }
  
  var aux;
  for(let i = 0;i<(arr.length)-1;i++){
    for (let j=0;(arr.length)-1;j++){

      if(arr[j]>arr[j+1]){
        aux = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = aux;

      }
    }
  }
  console.log(arr);
}

export { min, max, range, zip, uniq, sortNum };
