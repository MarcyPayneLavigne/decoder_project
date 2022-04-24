// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
        const holdinput = input;
        let holdshift = shift;
        const encodeyes = encode;
        let holdoutput = '';
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
        if ((!shift) || (shift < -25) || (shift > 25) || (shift === 0)) {
           return false;
        }

        if (!encode) {
          holdshift = shift * -1;
        }
    
        for (let i = 0; i < holdinput.length; i++) {
          const index = alphabet.indexOf(holdinput[i].toLowerCase()) > -1;
          if (!index) {
            holdoutput += holdinput[i].toLowerCase();
          } else { 
            for (let j = 0; j < alphabet.length; j++) {  
              if (holdinput[i].toLowerCase() === alphabet[j]) {
                let holdj = j + holdshift;
                if (holdj >= 26) {
                  holdj = holdj - 26;
                } else if ( holdj < 0) {
                  holdj = holdj + 26;
                }
              const newletter = alphabet[holdj];
              holdoutput += newletter;
              }
            }
          }
        }
        return holdoutput;
    }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
