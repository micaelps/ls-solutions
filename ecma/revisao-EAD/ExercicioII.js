function min(...args){
    let menor = args[0];
    args.map((x)=>{ 
        if (x<menor) menor = x;
    });
    return menor;
}

function max(...args){
    let max = args[0];
    args.map((x)=>{ 
        if (x>max) max = x;
    });
    return max;
}

function range(inicio,fim, passo){
    let arrRetorno = []
    const passoConst =  typeof passo !== "undefined"  ? passo : 1;
    const fimConst =  typeof fim !== "undefined"  ? fim : inicio;
    const inicioConst = typeof fim !== "undefined"  ? inicio : 0;

    for(let i=inicioConst;i<fimConst;i=i+passoConst){
        arrRetorno.push(i)
    }
    return arrRetorno;
}

function zip(...args){
    let arrayRetorno = [];
    let temp = [];
    let cont = 0;

    args.map(()=>{
        temp = []
        args.map((element) => {
            temp.push(element[cont])
        });
        arrayRetorno.push(temp);
        cont++;
    })
    return arrayRetorno
}

function uniq(arr){
    temp = []
    arrayRetorno = []
    arr.map((x)=>{
        if(typeof arr[x] === "undefined"){
            temp[x] = x;
        }
    })

    temp.map((x)=>{
        if(arr[x] !== "undefined"){
            arrayRetorno.push(x)
        }
    })
    return arrayRetorno;
}

function sort(){
    return array.sort((a, b)=>{return a-b});
}

function sum(arr){
    const soma = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
    return soma;
}

function sumOdds(arr){
    const arrayOdds = arr.filter((x)=>x % 2)
    return sum(arrayOdds);
}

function prod(arr){
    const prod = arr.reduce((accumulator, currentValue) => accumulator * currentValue);
    return prod;
}

module.exports = {
    sum: sum,
    max: max,
    range: range
}