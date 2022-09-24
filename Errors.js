const { errorHandler, two } = require("./errorHandler");

//const errorHandler = require("./errorHandler"); default import
two();

async function getError() {
  // try and catch will not crash the server
  try {
    //null.get();
    // creating new error
    const error = new Error("New error occurred");
    throw error;
  } catch (error) {
    errorHandler(error);
  }
}

getError();

console.log("Done");
