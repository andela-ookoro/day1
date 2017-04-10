 var Human = require('../lib/human.js');

class Female extends Human {
    constructor (_name,_bio,_dob= '') {
    	  super(_name,_bio,'Female',_dob);
    	  this.isPregnant = false;
      }

    pregenant(_howLong) {
    	this.isPregenant = true;
    	if ( !this.takeInLog)
    		this.takeInLog = [];
    	var takeinDate = new Date() - _howLong;
    	this.takeInLog.push(takeinDate);
        ( (takeinDate + 270) > getDate()  ) ? this.isPregnant = true : this.isPregnant = false;
    }

     // method to print person's name
    sayYourName() {
      let names = this.name.split(" "),
          formattedName = ' ';
      // capitalize first letter in each name
      names.forEach(name => formattedName +=  name[0].toUpperCase() + name.substring(1, name.length) + " ");
      if (!this.spouses)
        this.spouses =[];
      return 'I am ' + ((this.age>17 && this.spouses.length>0) ? 'Mrs' : 'Miss')  + formattedName;
    }

  }

  module.exports = Female;