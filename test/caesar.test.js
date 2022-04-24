const { expect } = require("chai");
const { caesar } = require("../src/caesar");


describe("caesar() test by Marcy Payne-Lavigne", () => {
    describe("error handling", () => {
      it("Should return false if the shift is 0", () => {
        const message = "Hello World";
        const shift = 0;
        const actual = caesar(message, shift); 
        expect(actual).to.be.false;
      });

      it("Should return false if the shift is greater than 25", () => {
        const message = "Hello World";
        const shift = 28;
        const actual = caesar(message, shift); 
        expect(actual).to.be.false;
      });

      it("Should return false if the shift is less than -25", () => {
        const message = "Hello World";
        const shift = -30;
        const actual = caesar(message, shift); 
        expect(actual).to.be.false;
      });
    });

    describe("encoding a message", () => {
        it("Should encode a message by shifting letters", () => {
            const message = "hello";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "khoor";

            expect(actual).to.equal(expected);
        });

        it("Should leave spaces and other sympbols as is", () => {
            const message = "hello world!";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "khoor zruog!";

            expect(actual).to.equal(expected);
        });

        it("Should ignore capital letters", () => {
            const message = "Hello World";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "khoor zruog";

            expect(actual).to.equal(expected);
        });

        it("Should handle a shift at the end of the alphabet", () => {
            const message = "Hello Worldz!";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "khoor zruogc!";

            expect(actual).to.equal(expected);
        })

        it("Should handle a shift at the beginning of the alphabet", () => {
            const message = "A new world!";
            const shift = -3;
            const actual = caesar(message, shift);
            const expected = "x kbt tloia!";

            expect(actual).to.equal(expected);
        });
    });

    
    describe("decoding a message", () => {
       it("Should decode a message by shifting the letters in the opposite direction", () => {
           const message = "Khoor zruog!";
           const shift = 3;
           const actual = caesar(message, shift, false);
           const expected = "hello world!";

           expect(actual).to.equal(expected);
       });

       it("Should leave spaces and other symbols as is", () => {
           const message = "Khoor zruog!";
           const shift = 3;
           const actual = caesar(message, shift, false);
           const expected = "hello world!";

           expect(actual).to.equal(expected);
       });

       it("Should ignore capital letters", () => {
           const message = "Khoor zruogc!";
           const shift = 3;
           const actual = caesar(message, shift, false);
           const expected = "hello worldz!";

           expect(actual).to.equal(expected);
       });

       it("Should handle letters at the end of the alphabet", () => {
           const message = "Khoor zruogc!"
           const shift = 3;
           const actual = caesar(message, shift, false);
           const expected = "hello worldz!";

           expect(actual).to.equal(expected);
       });

       it("Should allow a shift to the left", () => {
           const message = "x kbt tloia";
           const shift = -3;
           const actual = caesar(message, shift, false);
           const expected = "a new world";

           expect(actual).to.equal(expected);
       });
    });
});

