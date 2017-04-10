 class Human {
    constructor(_name,_bio,_gender,_dob= '') {

      // sanitixe user input
      let errorMessage = 'Error log:'
      if ( typeof(_name) != 'string' || _name.length <2) 
        errorMessage += ' invalid name : "' +  _name + '" \n';
      if ( typeof(_gender) != 'string' || !(_gender.includes('male') || _gender.includes('female') ) )
        errorMessage += ' invalid gender : "' +  _gender + '"\n';
      if ( typeof(_bio) != 'string'  )
        errorMessage += ' invalid biography : "' +  _bio + '" \n ';

      var dateReg =/^(0[1-9]|[12][0-9]|3[01])([-//])(0[1-9]|1[012])[-//](19|20)\d\d$/;
      if ( typeof(_dob) != '' && !(_dob.match(dateReg))  )
        errorMessage += ' invalid Dob : "' +  _dob + '" ';

      if ( errorMessage != 'Error log:') {
        throw errorMessage;
      }



      let age = 0,
          dobDate = new Date(_dob) ;
      if (_dob != '') 
        age = new Date().getFullYear() - dobDate.getFullYear();

      this.name = _name;
      this.dob = _dob;
      this.bio = _bio;
      this.gender = _gender;
      this.age = age;
      this.isAdult = (this.age < 18) ? false : true;
    }

    // method to add spouse
    marry(spouse) {
      if ( !this.spouses)
        this.spouses = [];
      (this.spouses.includes(spouse)) ? '' :this.spouses.push(spouse);

    }

    // method to add family member
    addFamilyMember(_member,role) {
      if ( !this.family)
        this.family = [];
      if ( (_member.gender != 'Male' && (role='Father' || role == 'Son') ) || (_member.gender != 'Female' && (role='Mother' || role == 'Daughter') ) )
        throw 'Invalid role';
      let member = {
        person : _member,
        role : role
      }
      (this.family.includes(member)) ? '':this.family.push(member);
    }

    // method to print person's name
    sayYourName() {
      let names = this.name.split(" "),
          formattedName = ' ';
      // capitalize first letter in each name
      names.forEach(name => formattedName +=  name[0].toUpperCase() + name.substring(1, name.length) + " ");
      return 'I am' + formattedName;
    }


  }

  module.exports = Human;