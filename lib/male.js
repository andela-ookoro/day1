var Human = require('../lib/human.js');
class Male extends Human {
    
  constructor (_name,_bio,_dob= '') {
   	super(_name,_bio,'Male',_dob);
  }

  sayYourName() {
    let names = this.name.split(" "),
    formattedName = ' ';
    // capitalize first letter in each name
    names.forEach(name => formattedName +=  name[0].toUpperCase() + name.substring(1, name.length) + " ");
    return 'I am ' + ((this.age>17 ) ? 'Mr' : 'Master')  + formattedName;
  }

}
module.exports=Male