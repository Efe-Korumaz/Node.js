const EventEmitter = require("events");

let url = "https://mylogger.io/log";

class Logger extends EventEmitter{
 log(message) {
  //send an HTTP request
  console.log(message);

  //raise an event
this.emit('messageLogged', {id: 1, url: 'http://'});
}
}

module.exports = Logger;
