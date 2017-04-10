 class Human {
    constructor(_name,_bio,_gender,_dob= '') {
    	this.name = _name;
      this.dob = _dob;
      this.bio = _bio;
      this.gender = _gender;
    }

    // method to add spouse
    marry(spouse) {
    	if ( !this.spouses)
    		this.spouses = [];
    	if (this.spouses.includes(spouse)) ? :this.spouses.push(spouse);

    }

    // method to add family member
    addFamilyMember(_member,role) {
    	if ( !this.family)
    		this.family = [];
    	if ( (_member.gender != 'Male' && (role='Father' || role == 'Son') ) || (_member.gender != 'Female' && (role='Mother' || role == 'Daughter') ) )
    		throw 'Invalid role';
    	let member = {
    		person : _member;
    		role : role
    	}
    	if (this.family.includes(member)) ? :this.family.push(member);
    }

    // method to print person's name
    sayYourName() {
    		let names = this.name.split(" "),
    				formattedName = ' ';
    		// capitalize first letter in each name
    		names.forEach(name => formattedName +=  name[0].toUpperCase() + name.substring(1, name.length) + " ");
        return 'I am ' + formattedName;
    }
  }

  module.exports = Human;