(function(){
  'use strict';
  var Male = require('../lib/male.js'),
      Human = require('../lib/human.js');
  describe("Desmonstrata basic male features: ", function() {

    describe("Check human attributes", function() {

      let Besola =  new Human('Basola clinton','I rule my world','Female','24/11/1999'),
          Cele = new Male('okoro celestine okwudiri','I exist as tool of positive change','24/11/1999'),
          Junoir = new Male('okoro celestine Junoir','I love my home','04/11/2016');;

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

        it("should return 'Basola clinton' as human name", function() {
          Cele.addFamilyMember(Besola,'Wife');
          Cele.addFamilyMember(Junoir,'Son');

         expect(Cele.family[0].person.name).toEqual('Basola clinton');
         expect (Cele.family[0].role).toEqual('Wife');
         expect(Cele.family.length).toEqual(2);
      });

    });

  });
})();