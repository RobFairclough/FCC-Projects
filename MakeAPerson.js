var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly  
  let fullName = firstAndLast;
  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
  };
  this.getFullName = function() {
    return fullName;
  };
  this.setFirstName = function(first) {
    fullName = first + " " + fullName.split(" ")[1];
  };
  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };
  this.setLastName = function(last) {
    fullName = fullName.split(" ")[0] + " " + last;
  };
  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

};
//definitely practise getts and setters, object oriented in general more!
var bob = new Person('Bob Ross');
bob.getFullName();