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
var one = new Child("Aidy");
one.setBaseVar(5);
one.changeName("Johan");
var two = new Child("Paul");
two.setChildVar("ho");
console.log("Base", base);
console.log("one", one);
console.log("two", two);

