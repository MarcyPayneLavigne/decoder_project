// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    holdline1 = [
      ["A", "B", "C", "D", "E"], 
      ["F", "G", "H", "I/J", "K"],
      ["L", "M", "N", "O", "P"],
      ["Q", "R", "S", "T", "U"],
      ["V", "W", "X", "Y", "Z"]
    ];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let holdinput = input;
    let holdencode = encode;
    let holdoutput = "";
    let holdspace = 0;
    let countnums = 0;
    let holdnumber1 = 0;
    let holdnumber2 = 0;

    if (holdencode) {
      for (let x = 0; x < holdinput.length; x++) {
        if (holdinput[x] === " ") {
          holdoutput += holdinput[x];
        } else if (holdinput[x] === "i" || holdinput[x] === "j") {
            holdoutput += "42";
        } else {
          for (let i = 0; i < holdline1.length; i++) {
            for (let j = 0; j < holdline1.length; j++) {
             if (holdline1[i][j] === holdinput[x].toUpperCase()) {
               holdoutput += j + 1;
               holdoutput += i + 1;
             }
           }
         }
        }
      }
    } else {
       holdspace = (holdinput.split(' ').length - 1);
       countnums = holdinput.length - holdspace;
       if (countnums % 2 !== 0) {
         return false;
       } else {
         for (let i = 0; i < holdinput.length; i++ ) { 
          const index = alphabet.indexOf(holdinput[i].toLowerCase()) > -1;
          if (!index) {
            holdoutput += holdinput[i];
          } else {
            const holdi = i;
            holdnumber1 = holdinput[holdi] - 1;
            holdnumber2 = holdinput[holdi + 1] - 1;
            i += 1;
            holdoutput += holdline1[holdnumber2][holdnumber1].toString().toLowerCase();
          }
       }
      }
    }
    return holdoutput;
  }


  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
