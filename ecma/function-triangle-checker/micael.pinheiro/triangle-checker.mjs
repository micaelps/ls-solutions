function triangleChecker(a, b, c) {
  let result = 'none';
  let condictionA = a+b>c;
  let condictionB = b+c>a;
  let condictionC = c+a>b;

  if (condictionA && condictionB && condictionC){
    if(a==b && b==c){
      result =  "equilateral";
    }
    else if(a==b || b==c || a==c  ){
      result = "isosceles"; 
    }
    else{
      result = "scalene";
    }
  }
  return result;
}

export { triangleChecker };
