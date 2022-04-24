const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() test by Marcy Payne-Lavigne", () => {
    describe("error handling", () => {
        it("Should return false if alphabet is missing", () => {
            const message = "happy birthday";
            const actual = substitution(message);

            expect(actual).to.be.false;
        });

        it("Should return flase if alphabet is not exactly 26 letters", () => {
            const message = "happy birthday";
            const alphabet = "not26letters";
            const actual = substitution(message, alphabet);

            expect(actual).to.be.false;
        });

        it("Should be false if alphabet has repeating characters", () => {
            const message = "happy birthday";
            const alphabet = "itsitsits";
            const actual = substitution(message, alphabet);

            expect(actual).to.be.false;
        });
    });

    describe("encoding a message", () => {
        it("Should encode a message by the given alphabet", () => {
            const message = "i love you";
            const alphabet = "bcdefghijklmnopqrstuvwxyza"
            const actual = substitution(message, alphabet);
            const expected = ("j mpwf zpv");

            expect(actual).to.equal(expected);
        });

        it("Should be able to handle unique characters", () => {
            const message = "i love you";
            const alphabet = "bcdefghi*klmnopqrstu&wxyza"
            const actual = substitution(message, alphabet);
            const expected = ("* mpwf zp&");

            expect(actual).to.equal(expected);
        });

        it("Should leave spaces where they are", () => {
            const message = "i love you";
            const alphabet = "bcdefghijklmnopqrstuvwxyza"
            const actual = substitution(message, alphabet);
            const expected = ("j mpwf zpv");

            expect(actual).to.equal(expected);
        });
    });
});


describe("substitution() test by Marcy Payne-Lavigne", () => {
    describe("decoding a message", () => {
      it("Should decode a message by the given alphabet", () => {
        const message = "j mpwf zpv";
        const alphabet = "bcdefghijklmnopqrstuvwxyza"
        const actual = substitution(message, alphabet, false);
        const expected = ("i love you");

        expect(actual).to.equal(expected);
      });

      it("Should work with any key of unique characters", () => {
        const message = "* mpwf zp&";
        const alphabet = "bcdefghi*klmnopqrstu&wxyza"
        const actual = substitution(message, alphabet, false);
        const expected = ("i love you");

          expect(actual).to.equal(expected);
      });

      it("Should leave space as is", () => {
        const message = "j mpwf zpv";
        const alphabet = "bcdefghijklmnopqrstuvwxyza"
        const actual = substitution(message, alphabet, false);
        const expected = ("i love you");

          expect(actual).to.equal(expected);
      });
    });
});




// Write your tests here!
