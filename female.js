import Human from './Human.js';


class Female extends Human {
    constructor (_name,_bio,_dob= '') {
    	  super(_name,_dob= '',_bio,'Female');
          this.isPregenant = false;
      }

    pregenant(_howLong) {
    	if ( !this.takeInLog)
    		this.takeInLog = [];
    	var takeinDate = new Date() - _howLong;
    	this.takeInLog.push(takeinDate);
        if ( (takeinDate + 270) > getDate()  ) ? this.isPregnant = true : this.isPregnant = false;
    }

  }