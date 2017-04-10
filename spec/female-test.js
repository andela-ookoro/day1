(function(){
  'use strict';
  var Female = require('../lib/female.js'),
      Human = require('../lib/human.js');
  describe("Desmonstrata basic female features: ", function() {

    describe("Check human attributes", function() {

      let Besola =  new Female('Basola clinton','I rule my world','24/11/1999'),
          Cele = new Human('okoro celestine okwudiri','I exist as tool of positive change','Male','24/11/1999');

      it("should return 'female' as gender", function() {
         expect(Besola.gender).toEqual('Female');
      });

      it("should return 'I am Miss Basola Clinton ' as human name", function() {
         expect(Besola.sayYourName()).toEqual('I am Miss Basola Clinton ');
      });

      it("should return 'I am Okoro Celestine Okwudiri' as Besola spouse's name", function() {
        Besola.marry(Cele);
        expect(Besola.spouses[0].sayYourName()).toEqual('I am Okoro Celestine Okwudiri ');
      });

    });

  });
})();