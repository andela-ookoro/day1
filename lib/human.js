 class Human {
    constructor(_name,_bio,_gender,_dob= '') {
    	this.name = _name;
      this.dob = _dob;
      this.bio = _bio;
      this.gender = _gender;
    }

    sayYourName() {
    		let names = this.name.split(" "),
    				formattedName = ' ';
    		// capitalize first letter in each name
    		names.forEach(name => formattedName +=  name[0].toUpperCase() + name.substring(1, name.length) + " ");
        return 'I am ' + formattedName;
    }
  }

  