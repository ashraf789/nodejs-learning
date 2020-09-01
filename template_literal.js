var person = {
    firstname: "ashraf",
    lastname: "ullah",

    fullname: function(){
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    }
}

obj1 = Object.create(person);
obj1.fullname();

obj2 = Object.create(person);
obj2.fullname.call({firstname: "Syed", lastname: "Ashraf"});
obj2.fullname.apply({firstname: "Syed", lastname: "test"});