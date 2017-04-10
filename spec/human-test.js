(function(){
  'use strict';
    var   Human = require('../lib/human.js');
  describe("Desmonstrata basic human features: ", function() {

    describe("Case Invalid input", function() {

      it("should return 0 for an empty array", function() {
        let Cele = new Human('okoro celestine okwudiri','I exist as tool of positive change','male','24/11/1999');
         expect(Cele.sayYourName()).toEqual('I am Okoro Celestine Okwudiri ');
      });

    });

  });
})();