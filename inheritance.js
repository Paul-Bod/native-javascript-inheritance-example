var Base = (function () {
    function Base(name) {
        console.log("CONSTRUCTING BASE!");
        this.baseVar = 1;
        this.name = name;
    }
    
    Base.prototype.setBaseVar = function (value) {
      console.log("Base.setBaseVar");
      this.baseVar = value;  
    };
    
    Base.prototype.changeName = function (value) {
      this.name = value;  
    };
    
    return Base;
})();

var Child = (function() {
    function Child(name) {
        console.log("CONSTRUCTING CHILD!");
        Base.call(this, name); // inherit Base object context
        this.childVar = "hey";    
    }
    Child.prototype = Object.create(Base.prototype); // inherit Base prototype
    Child.prototype.constructor = Child; // correctly set constructor
    
    Child.prototype.setBaseVar = function (value) {
        console.log("Child.setBaseVar");
        Base.prototype.setBaseVar.call(this, value + 10);    
    };
    
    Child.prototype.setChildVar = function (value) {
        this.childVar = value;
    };
    
    return Child;
})();

var base = new Base("Gavin");
base.setBaseVar(10);
var childOne = new Child("Aidy");
childOne.setBaseVar(5);
childOne.changeName("Johan");
var childTwo = new Child("Paul");
childTwo.setChildVar("ho");
console.log("Base", base);
console.log("one", one);
console.log("two", two);
console.log("childOne is instance of Child: ", childOne instanceof Child);
console.log("childOne is instance of Base: ", childOne instanceof Base);
console.log("base is instance of Child: ", base instanceof Child);
console.log("base is instance of Base: ", base instanceof Base);

