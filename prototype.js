function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function(){
    return this.firstName+" "+this.lastName;
};

var kaka = new Person("Mr", "Rafiq");
console.log(kaka.firstName);
console.log("Full name, "+kaka.fullName());

var malvai = new Person("Md", "Towhid");
console.log(malvai.firstName);
console.log("Full name, "+malvai.fullName());

console.log(kaka.__proto__);