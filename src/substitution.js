// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let holdinput = input;
    let holdalpha = alphabet;
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let holdencode = encode;
    let holdoutput = "";

    if (alphabet === undefined) {
      return false;
    } else if ((alphabet.length < 26) || (new Set(alphabet).size < 26)) {
      return false;
    };

    if (!holdencode) {
      for (let i = 0; i < holdinput.length; i++) {
        if (holdinput[i] === " ") {
         holdoutput += holdinput[i];
        } else {
          for (let j = 0; j < holdalpha.length; j++) {
            if (holdinput[i] === holdalpha[j]) {
              holdoutput += alpha[j];
            }
          }
        }
      }
    } else {
       for (let i = 0; i < holdinput.length; i++) {
         if (holdinput[i] === " ") {
           holdoutput += holdinput[i];
         } else {
           for (let j = 0; j < alpha.length; j++) {
             if (holdinput[i] === alpha[j]) {
               holdoutput += holdalpha[j];
             }
           }
         }
      }
    }
    return holdoutput;

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
