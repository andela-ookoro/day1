import Human from './Human.js';


class Memale extends Human {
    constructor (_name,_bio,_dob= '') {
    	  super(_name,_dob= '',_bio,'Male');
    	  this.isPregnant = false;
    	  this.Pre
      }

    pregenant(_howLong) {
    	this.isPregenant = true;
    	if ( !this.takeInLog)
    		this.takeInLog = [];
    	var takeinDate = new Date() - _howLong;
    	this.takeInLog.push(takeinDate);
        if ( (takeinDate + 270) > getDate()  ) ? this.isPregnant = true : this.isPregnant = false;
    }

  }