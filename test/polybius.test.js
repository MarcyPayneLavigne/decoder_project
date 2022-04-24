const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() test by Marcy Payne-Lavigne", () => {
    describe("encoding a message", () => {
        it("Should encode a message by translating letters to number pairs", () => {
            const message = "i love you";
            const actual = polybius(message);
            const expected = ("42 13431551 454354");

            expect(actual).to.equal(expected);
        });

        it("Should translate both i and j to 42", () => {
            const message = "i love jesus";
            const actual = polybius(message);
            const expected = ("42 13431551 4251345434");

            expect(actual).to.equal(expected);
        });

        it("Should leave spaces where they are", () => {
            const message = "i love you";
            const actual = polybius(message);
            const expected = ("42 13431551 454354");

            expect(actual).to.equal(expected);
        });
    });

    describe("decoding a message", () => {
      it("Should translate each number pair to letter", () => {
        const message = "3251131343 2543241341";
        const actual = polybius(message, false);
        const expected = ("hello world");

        expect(actual).to.equal(expected);
      });

      it("Should translate 42 to both i and j", () => {
          const message = "42 13431551 4251345434";
          const actual = polybius(message, false);
          const expected = ("i/j love i/jesus");

          expect(actual).to.equal(expected);
      });

      it("Should leave space as is", () => {
          const message = "42 13431551 454354";
          const actual = polybius(message, false);
          const expected = ("i/j love you");

          expect(actual).to.equal(expected);
      });

      it("Should return false if length is odd including spaces", () => {
          const message = "42 13431551 45435";
          const actual = polybius(message, false);

          expect(actual).to.be.false;
      });
    });
});




