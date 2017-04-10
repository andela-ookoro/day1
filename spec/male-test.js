(function(){
  'use strict';
  var Male = require('../lib/male.js'),
      Human = require('../lib/human.js');
  describe("Desmonstrata basic male features: ", function() {

    describe("Check human attributes", function() {

      let Besola =  new Human('Basola clinton','I rule my world','Female','24/11/1999'),
          Cele = new Male('okoro celestine okwudiri','I exist as tool of positive change','24/11/1999');

      it("should return 'female' as gender", function() {
         expect(Cele.gender).toEqual('Male');
      });

      it("should return 'I am Mr Okoro Celestine Okwudiri ' as human name", function() {
         expect(Cele.sayYourName()).toEqual('I am Mr Okoro Celestine Okwudiri ');
      });

      it("should return 'I am Miss Basola Clinton ' as Celestine spouse's name", function() {
        Cele.marry(Besola);
        expect(Cele.spouses[0].sayYourName()).toEqual('I am Basola Clinton ');
      });

    });

  });
})();