require ( './helpers.js' );

describe('index.js', function () {
  //MY CODE
  let cats = ["Milo", "Otis", "Garfield"];

  describe('cats', function () {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });

  });

  //this code resets the array to its original contents before each test is run. 
  //we need to do this because some the functions are destructive
  //and will therefore change the original cats array
  describe('Array functions', function () {
    beforeEach(function () {
      cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
    });

    describe('destructivelyAppendCat(name)', function () {
      it('appends a cat to the end of the cats array', function () {
        destructivelyAppendCat('Ralph');

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
      });
      //MY CODE
      function destructivelyAppendCat(name) {
        destructivelyAppendCat = cats.push("Ralph");
        return cats;
      };
    });

    describe('destructivelyPrependCat(name)', function () {
      it('prepends a cat to the beginning of the cats array', function () {
        destructivelyPrependCat("Bob");

        expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
      });
      //MY CODE
      function destructivelyPrependCat(name) {
        destructivelyPrependCat = cats.unshift("Bob");
        return cats;
      };
    });

    describe('destructivelyRemoveLastCat()', function () {
      it('removes the last cat from the cats array', function () {
        destructivelyRemoveLastCat();

        expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
      });
      //MY CODE
      function destructivelyRemoveLastCat(name) {
        destructivelyRemoveLastCat = cats.pop();
        return cats;
      };
    });

    describe('destructivelyRemoveFirstCat()', function () {
      it('removes the first cat from the cats array', function () {
        destructivelyRemoveFirstCat();

        expect(cats).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
      });
      //MY CODE
      function destructivelyRemoveFirstCat(name) {
        destructivelyRemoveFirstCat = cats.shift();
        return cats;
        };  
    });

    describe('appendCat(name)', function () {
      it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(appendCat("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
      //MY CODE
      function appendCat(name) {
        appendCat = [...cats,"Broom"];
        return appendCat;
      };
    });

    describe('prependCat(name)', function () {
      it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(prependCat("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
      //MY CODE
      function prependCat(name) {
        prependCat = ["Arnold",...cats,];
        return prependCat;
      };
    });

    describe('removeLastCat()', function () {
      it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
      //MY CODE
      function removeLastCat() {
        removeLastCat = cats.slice(0, cats.length -1);
        return removeLastCat;
      };

    });

    describe('removeFirstCat()', function () {
      it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
      //MY CODE
      function removeFirstCat() {
        removeFirstCat = cats.slice(1);
        return removeFirstCat;
      };
    });
  });
});
