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

function errorHandler(error) {
  const { name, message, stack } = error;
  console.log(name, message);
}

console.log("Done");
