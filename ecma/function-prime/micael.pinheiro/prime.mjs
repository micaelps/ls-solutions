function isPrime(number) {
  let dividers = 0;
  for(let i =1;i<10;i++){
    if(number%i==0){
      dividers+=1
      if (dividers>2){
        return false;
      }
    }
  }
  return true;
}

export { isPrime };
