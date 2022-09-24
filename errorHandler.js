 //common js module
 function errorHandler(error) {
  const { name, message, stack } = error;
  console.log(name, message);
}
function two() {
  console.log("two");
}
// module.exports = errorHandler; // default export

module.exports.errorHandler = errorHandler; //named export
module.exports.two = two; //named export

module.exports = {
  errorHandler,
  error,
  //named export
};

module.exports.three = function three() {
  console.log("three");
  //named export
};
