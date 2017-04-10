(function(){
  'use strict';
  var Human = require('../lib/human.js');
  var datatype = function(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  }
  describe("Desmonstrata basic human features: ", function() {

    describe("Check human features", function() {
      let Cele = new Human('okoro celestine okwudiri','I exist as tool of positive change','Male','24/11/1999');

      it("should return 'I am Okoro Celestine Okwudiri' as human name", function() {
         expect(Cele.sayYourName()).toEqual('I am Okoro Celestine Okwudiri ');
      });

    });

    describe("Check human attributes", function() {

      let Besola =  new Human('Basola Clinton','I rule my world','Female','24/11/1999');

      it("should return 'female' as gender", function() {
         expect(Besola.gender).toEqual('Female');
      });

      it("should return 'I rule my world' as bio", function() {
         expect(Besola.bio).toEqual('I rule my world');
      });

      it("should return '24/11/1999' as dob", function() {
         expect(Besola.dob.getFullYear()).toEqual(1999);
         expect(datatype(Besola.dob)).toEqual('date');
      });

      it("should return '19' as age", function() {
         expect(Besola.age).toEqual(18);
         expect(Besola.isAdult).toBe(true);
      });

    });

  });
})();