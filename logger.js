// const EventEmitter = require('events');

// console.log(__filename);
// console.log(__dirname);
// var url ='http://localhost:3000/log';
// class Logger extends EventEmitter {
//         log(message) {
//         // Send an HTTP request
//         console.log(message);
//         //raise an event
//         this.emit('messageLogged', {id:1, url:'http://'})

// }
// }

// module.exports = Logger;

// //instead of exporting an object from the module, we can also export individual functions or variables directly. For example, we can export the log function and the url variable separately like this:

// // module.exports= log;
// // module.exports.endPoint = url;
// // we do not need to export the url variable because it is not used outside of this module. By exporting only the log function, we can keep the internal implementation details hidden and only expose what is necessary for other modules to use. This helps to maintain a clean and modular code structure.
// //what is happening when we use module.exports?

// // When we use module.exports in Node.js, we are defining what a module should export when it is required by another file. It allows us to specify which functions, objects, or values should be accessible to other files that import the module.

// // In the provided code snippet, we are exporting an object with two properties: log and endPoint. The log property is assigned the log function, and the endPoint property is assigned the url variable. This means that when another file requires this module, it can access these properties and use them as needed.

// // For example, if another file requires this module, it can call the log function and access the endPoint value like this:

// // const logger = require('./logger');
// // logger.log('This is a message'); // This will call the log function and print the message
// // console.log(logger.endPoint); // This will print the value of url (http://localhost:3000/log)


// const greet = (name) => {
//     return `Hello, ${name}!`;
// }

// module.exports = greet;


// const add = (x, y) => x + y;
// const subtract = (x, y) => x - y;
// const multiply = (x, y) => x * y;
// const divide = (x, y) => x / y;

// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide
// };