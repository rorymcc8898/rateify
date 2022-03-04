// module "module.js"
function cube(x) {
    return x * x * x;
  }
  
  // Math is part of the JavaScript language.
  // Unlike other objects, the Math object has no constructor.
  // All methods and properties can be used without creating a Math object first.
  const foo = Math.PI + Math.SQRT2;
  
  var graph = {
    // Declaring a property (key, value pair) with a function.
    draw: function () {
      console.log("From graph draw function");
    },
  };
  
  export { cube, foo, graph };