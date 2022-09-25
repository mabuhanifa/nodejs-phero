const events = require("events");

const eventEmitter = new events.EventEmitter();

//creating an event handler

const eventHandler = () => {
  console.log("event emitted !!!!!!!!!!!!!!!!!!!!!!");
};

// assign the handler to the event

eventEmitter.on("scream", eventHandler);

//firing the event

eventEmitter.emit("scream");
