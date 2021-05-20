
  // function to convert to fahrenheit
  
  function convertFahrToCelsius(n) {
    let value = Number(n);
    let convertToCelsius = ((value - 32) * 5 / 9).toFixed(4);
       
 
   if (typeof n === "boolean" || n === "") {
        return `${JSON.stringify(n)} is not a valid number but a/an ${typeof(n)}`;
     } else if (Array.isArray(n)) {
       return `${JSON.stringify(n)} is not a valid number but a/an array`;
     } else if(typeof(n) === "object") {
         return `${JSON.stringify(n)} is not a valid number but a/an ${typeof(n)}`;
     }else if (isNaN(value)) {
       return `${JSON.stringify(n)} is not a valid number but a/an ${typeof(n)}`;
     }
      return convertToCelsius;
  
  }
  
  // testing code
  console.log(convertFahrToCelsius([1,2,3]));
  console.log(convertFahrToCelsius({temp : 0}));
  console.log(convertFahrToCelsius('10'));
  console.log(convertFahrToCelsius('10n'));
  console.log(convertFahrToCelsius(false));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius("-12"));
console.log(convertFahrToCelsius(""));
console.log(convertFahrToCelsius([]));
console.log(convertFahrToCelsius(undefined))



 
 
 
  function checkYuGiOh(n) {
    Number(n)
     let arrayContainingNnumbers = [];
     for (let i = 1; i <= n; i++) {
       arrayContainingNnumbers.push(multipleFactor(i) || factorOfFive(i) || factorOfThree(i) || factorOfTwo(i) || i);
     }
   
     if(isNaN(n)) {
       return `invalid paramenter: ${JSON.stringify(n)}`;
     } else if (typeof n === "boolean" || Array.isArray(n) ){
        return `invalid paramenter: ${JSON.stringify(n)}`;
     } else if (n === "" || n === NaN) {
        return `invalid paramenter: ${JSON.stringify(n)}`;
     } else if(typeof(n) === "object") {
         return `invalid paramenter: ${JSON.stringify(n)}`;
     }
   
      return arrayContainingNnumbers;
   }
  
   function factorOfThree(n) {
     if (n % 3 == 0)
       return "gi";
   }
   
   
   function factorOfTwo(n) {
     if (n % 2 == 0)
       return "yu";
   }
   
   function factorOfFive(n) {
     if (n % 5 == 0)
       return "oh";
   }
   
   function multipleFactor(n) {
     if ((n % 2 == 0) && (n % 3 == 0) && (n % 5 == 0)) {
       return "yu-gi-oh";
     } else if ((n % 2 == 0) && (n % 3 == 0)) {
       return "yu-gi";
     } else if ((n % 3 == 0) && (n % 5 == 0)) {
       return "gi-oh";
     } else if ((n % 2 == 0) && (n % 5 == 0)) {
       return "yu-oh";
     }
   }
   
   // testing code
   console.log(checkYuGiOh(30));
   console.log(checkYuGiOh(5));
   console.log(checkYuGiOh("50"));
   console.log(checkYuGiOh({}));
  console.log(checkYuGiOh([]));
  console.log(checkYuGiOh("fizzbuzz is meh"));
   console.log(checkYuGiOh(true));
   console.log(checkYuGiOh(false));
   console.log(checkYuGiOh(NaN));
   console.log(checkYuGiOh('Korex'));
    console.log(checkYuGiOh(undefined));
  console.log(checkYuGiOh(""));
  console.log(checkYuGiOh("10"))
   