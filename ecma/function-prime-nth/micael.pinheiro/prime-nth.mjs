import { isPrime } from '../../function-prime/micael.pinheiro/prime.mjs';


function nthPrime(nth) {
  let indexPrime = 0;
  let i = 1;
  
  while (indexPrime!=nth){
    i++
    if(isPrime(i)){
      indexPrime++;
    }

    if (indexPrime==nth)
      return i;
  }

}

export { nthPrime };
