// function sayHello(name) {
//     console.log("Hello " + name + "!");
// }

// sayHello('Anthony');

//global objects and tell me what theu are used for

// In Node.js, the global object is a special object that provides a way to access global variables and functions. It is similar to the window object in browsers. The global object allows you to define variables and functions that can be accessed from anywhere in your code without needing to import or require them.

// Some common properties and methods of the global object include:

// 1. console: This is used for logging messages to the console. It provides methods like log(), error(), warn(), etc., to output different types of messages.

// 2. setTimeout() and setInterval(): These functions are used to schedule code execution after a specified delay or at regular intervals, respectively.

// 3. process: This object provides information about the current Node.js process and allows you to interact with it. It includes properties like env (for environment variables) and methods like exit() (to terminate the process).

// 4. Buffer: This is a global class that provides a way to handle binary data in Node.js. It is used for working with streams, file I/O, and network communication.
// console.log(global);
//what  of clearInterval and clearTimeout do clearInterval() and clearTimeout() are functions used to stop the execution of code that was scheduled using setInterval() and setTimeout(), respectively.

// clearInterval() is used to stop the execution of a function that was scheduled to run repeatedly at specified intervals using setInterval(). It takes the interval ID returned by setInterval() as an argument and stops the scheduled function from executing further.

// clearTimeout() is used to stop the execution of a function that was scheduled to run once after a specified delay using setTimeout(). It takes the timeout ID returned by setTimeout() as an argument and prevents the scheduled function from executing if it hasn't already been executed.

// Example usage:
// const intervalId = setInterval(() => {
//     console.log("This will run every 2 seconds");
// }, 2000);

// const timeoutId = setTimeout(() => {
//     console.log("This will run after 5 seconds");
// }, 5000);

// var message='';
// console.log(globalThis.message); // why is it showing undefined?

// The reason why globalThis.message is showing undefined is because you have declared the variable message using var, which does not create a property on the global object. In JavaScript, variables declared with var are function-scoped and do not become properties of the global object.

// window.console.log("This will run immediately");

// console.log(module)

// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log(`Total memory: ${totalMemory}`);
// console.log(`Free memory: ${freeMemory}`);

// const fs = require('fs');
// // var files = fs.readdirSync('./');
// // console.log(files);
// fs.readdir('./', function (err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });

// const EventEmitter = require('events');

// const Logger = require('./logger');
// const logger = new Logger();
// //register a listener
// logger.on('messageLogged', (arg) => {
//     console.log('Listener called',arg);
// });
// logger.log('message');

// // emmiter.on('logging', (e)=>{
// //     console.log('I am logged in',e)
// // });
// // emmiter.emit('logging', {id:3, url:'http://'})

// const http = require('http');
// const server = http.createServer((req,res)=>{
//     if (req.url==='/'){
//         res.write('Hello World');
//         res.end();
//     }
//     if (req.url==='/api/courses'){
//         res.write(JSON.stringify([1,2,3]));
//         res.end();
//     }
// });

// server.listen(3000);
// console.log('Listening on port 3000...');

// const greet = require('./logger');
// console.log(greet('Anthony'));

// const {add, subtract, multiply, divide}= require('./logger');
// console.log(add(5,3));
// console.log(subtract(5,3));
// console.log(multiply(5,3));
// console.log(divide(5,3));

// const path = require('path');
// const filePath = path.join(__dirname, 'test', 'hello.txt');
// console.log(filePath);

// const path= require('path');
// const result = path.parse(__filename);
// console.log(result);

// const os = require('os')

// console.log('===== Server Information =====')
// console.log(`OS:           ${os.platform()}`)
// console.log(`Architecture: ${os.arch()}`)
// console.log(`CPU Cores:    ${os.cpus().length}`)
// console.log(`Total Memory: ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`)
// console.log(`Free Memory:  ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`)
// console.log(`Uptime:       ${(os.uptime() / 3600).toFixed(2)} hours`)
// console.log(`Hostname:     ${os.hostname()}`)
// console.log(`Home Dir:     ${os.homedir()}`)

// const fs = require('fs');
// const content=fs.readFileSync('logger.js', 'utf-8');
// console.log(content);

// const fs = require('fs');
// fs.readFile('logger.js', 'utf-8', (err, content) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log(content);
// });
//show a code that it will have error, i want to try in my terminal, with async
// const fs = require('fs');
// const content = fs.readFile('nonexistentfile.txt', 'utf-8', (err, content) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log(content);
// });
//for the file system module, we can read, write, update, delete files and directories. We can also watch for changes in files and directories, and we can create streams to read and write large files efficiently. The fs module provides both synchronous and asynchronous methods for performing these operations, allowing us to choose the appropriate approach based on our application's needs.

//professional code for reading a file asynchronously with error handling
// const fs = require('fs');
// const path = require('path');

// const filePath = path.join(__dirname, 'test');
// fs.readFile(filePath, 'utf-8', (err, content) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('Content of file:', content);
// });

// const EventEmitter = require('events')
// const emitter = new EventEmitter()

// // Step 1 — Register a listener
// // "When 'greet' event happens, run this function"
// emitter.on('greet', (name,age) => {
//   console.log(`Hello ${name}! You are ${age} years old.`)
// })

// // Step 2 — Emit the event
// // "Fire the greet event right now"
// emitter.emit('greet', 'Anthony', 25)

// const EventEmitter = require('events')
// const emitter = new EventEmitter()

// // Listener 1
// emitter.on('userLoggedIn', (user) => {
//   console.log(`Welcome back ${user}!`)
// })

// // Listener 2
// emitter.on('userLoggedIn', (user) => {
//   console.log(`Sending welcome email to ${user}...`)
// })

// // Listener 3
// emitter.on('userLoggedIn', (user) => {
//   console.log(`Logging ${user}'s activity...`)
// })

// // One emit — all 3 listeners fire
// emitter.emit('userLoggedIn', 'Anthony')

// const EventEmitter = require('events')
// const emitter = new EventEmitter()

// emitter.once('connect', () => {
//   console.log('Connected to database!')
// })

// emitter.emit('connect') // fires ✅
// emitter.emit('connect') // nothing happens ❌ — already fired once
// emitter.emit('connect') // nothing happens ❌

// const EventEmitter = require('events')

// class OrderService extends EventEmitter {
//   placeOrder(item, quantity) {
//     console.log(`Processing order for ${quantity} of ${item}...`)
//     this.emit('orderPlaced', item, quantity)
//   }
// }
// const orderService = new OrderService()

// orderService.on('orderPlaced', (item, quantity) => {
//   console.log(`Sending order confirmation email for ${quantity} quantity of ${item}.`)
// })
// orderService.on('orderPlaced', (item, quantity) => {
//   console.log(`Updating inventory for ${quantity} quantity of ${item}.`)
// })
// orderService.on('orderPlaced', (item, quantity) => {
//   console.log(`Logging order for ${quantity} quantity of ${item}.`)
// })

// orderService.placeOrder('Laptop', 2)


//My First Node.js Server
// const http = require('http')

// const server = http.createServer((req, res) => {
//     console.log(req.method)
//     console.log(req.url)
//     console.log(req.headers)
//     res.write('Hello World!')
//     res.end()
// })

// server.listen(4000, () => {
//     console.log('Server is listening on port 4000...')
// })

// const server = http.createServer((req, res) => {

//   if (req.url === '/') {
//     // 200 = OK, plain text
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     res.write('Welcome to the home page!\n')
//     res.write('This is a simple Node.js server.\n')
//     res.end('Home page — everything is fine!\n')
//   }

//   else if (req.url === '/html') {
//     // 200 = OK, HTML content
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     res.end('<h1>Hello Anthony!</h1><p>This is an HTML response</p>')
//   }

//   else if (req.url === '/json') {
//     // 200 = OK, JSON data
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify({ name: 'Anthony', age: 25 }))
//   }

//   else if (req.url === '/not-found') {
//     // 404 = page doesn't exist
//     res.writeHead(404, { 'Content-Type': 'text/plain' })
//     res.end('404 - Page not found!')
//   }

//   else if (req.url === '/error') {
//     // 500 = server broke
//     res.writeHead(500, { 'Content-Type': 'text/plain' })
//     res.end('500 - Something went wrong on the server!')
//   }

// })

// server.listen(4000, () => console.log('Server on port 4000...'))



// const http = require('http')

// const server = http.createServer((req, res) => {

//   // Route 1 — Home page (plain text)
//   if (req.url === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     res.write('Welcome to my server!\n')
//     res.write('Server is running perfectly!')
//     res.end()
//   }

//   // Route 2 — About page (HTML)
//   else if (req.url === '/about') {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     res.write('<h1>About Page</h1>')
//     res.write('<p>This server was built by Anthony</p>')
//     res.end()
//   }

//   // Route 3 — API data (JSON)
//   else if (req.url === '/api/user') {
//     const user = {
//       id: 1,
//       name: 'Anthony',
//       role: 'Backend Developer in training 🚀'
//     }
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(user))
//   }

//   // Route 4 — Everything else (404)
//   else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' })
//     res.end('404 - Route not found!')
//   }

// })

// server.listen(4000, () => console.log('Server on port 4000...'))



// const http = require('http')

// const server = http.createServer((req, res) => {
    
//   if (req.url === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     res.write('Welcome to my API!\n')   
//     res.end('Use /api/products to get products data.')
//   }
//   else if (req.url === '/api/products') {
//     const products = [
//       { id: 1, name: 'Laptop', price: 999 },
//       { id: 2, name: 'Smartphone', price: 499 },
//       { id: 3, name: 'Headphones', price: 199 }
//     ]
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(products))
//   }
//     else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' })
//     res.end('404 - Route not found!')
//   }
// })

// server.listen(4000, () => console.log('Server on port 4000...'))



// const express = require('express')
// const app = express()

// const products = [
//   { id: 1, name: 'Laptop', price: 999 },
//   { id: 2, name: 'Smartphone', price: 499 },
//   { id: 3, name: 'Headphones', price: 199 }
// ]

// // Get ALL products
// app.get('/api/products', (req, res) => {
//   res.json(products)
// })

// // Get ONE product by id
// app.get('/api/products/:id', (req, res) => {
//   const id = parseInt(req.params.id) // convert '1' string to 1 number
//   const product = products.find(p => p.id === id)

//   if (!product) {
//     return res.status(404).json({ error: 'Product not found' })
//   }

//   res.json(product)
// })

// app.listen(4000, () => console.log('Server on port 4000...'))

// const express = require('express')
// const app = express()

// const users= [
//     {id:1, name:'Anthony'},
//     {id:2, name:'John'},
//     {id:3, name:'Jane'}
// ]

// app.get('/api/users', (req,res)=>{
//     res.json(users)
// })

// app.get('/api/users/:id', (req,res)=>{
//     const id = parseInt(req.params.id)
//     const user = users.find(u=>u.id===id)

//     if (!user){
//         return res.status(404).json({error:'User not found'})
//     }

//     res.json(user)
// })

// app.listen(4000, ()=>console.log('Server on port 4000...'))


// const express = require('express')
// const app = express()

// const products = [
//   { id: 1, name: 'Laptop', price: 999,category:'electronics' },
//   { id: 2, name: 'Smartphone', price: 499,category:'electronics' },
//   { id: 3, name: 'Headphones', price: 199,category:'electronics' },
//   { id: 4, name: 'Shirt', price: 29,category:'clothing' },
//   { id: 5, name: 'Pants', price: 49,category:'clothing' }
// ]

// app.get('/api/products', (req, res) => {
//   console.log(req.query)
//   let filteredProducts = products

//   if (req.query.category) {
//     filteredProducts = filteredProducts.filter(p => p.category === req.query.category)
//   }

//   if (req.query.maxPrice) {
//     const maxPrice = parseFloat(req.query.maxPrice)
//     filteredProducts = filteredProducts.filter(p => p.price <= maxPrice)
//   }

//   res.json(filteredProducts)
// })

// app.listen(4000, () => console.log('Server on port 4000...'))

//sorting with query strings
// const express = require('express')
// const app = express()

// const products = [
//   {id: 1, name: 'Laptop', price: 999 ,category:'electronics', rating:4.5},
//   {id: 2, name: 'Smartphone', price: 499 ,category:'electronics', rating:4.2},
//   {id: 3, name: 'Headphones', price: 199 ,category:'electronics', rating:4.0},
//   {id: 4, name: 'Shirt', price: 29 ,category:'clothing', rating:3.8},
//   {id: 5, name: 'Pants', price: 49 ,category:'clothing', rating:4.1},
//   {id: 6, name: 'Shoes', price: 79 ,category:'clothing', rating:4.3},
//    {id: 7, name: 'Tablet', price: 299 ,category:'electronics', rating:4.4},
//    {id: 8, name: 'Monitor', price: 199 ,category:'electronics', rating:4.6},
//    {id: 9, name: 'Jacket', price: 99 ,category:'clothing', rating:4.0},
//    {id: 10, name: 'Socks', price: 9 ,category:'clothing', rating:3.5}
// ]

// app.get('/api/products', (req, res) => {
//   console.log(req.query)
//   let filteredProducts = products

//   if (req.query.sortBy) {
//     if (req.query.sortBy === 'price') {
//       filteredProducts.sort((a, b) => a.price - b.price)
//     } else if (req.query.sortBy === 'rating') {
//       filteredProducts.sort((a, b) => b.rating - a.rating)
//     }
//   }

//   res.json(filteredProducts)
// })
// app.listen(4000, () => console.log('Server on port 4000...'))


//write a code that will sort products by price under 500, from lowest to highest, and their category is electronics
// const express = require('express')
// const { count } = require('node:console')
// const app = express()

// const products = [
//   {id: 1, name: 'Laptop', price: 999 ,category:'electronics', rating:4.5},
//   {id: 2, name: 'Smartphone', price: 499 ,category:'electronics', rating:4.2},
//   {id: 3, name: 'Headphones', price: 199 ,category:'electronics', rating:4.0},
//   {id: 4, name: 'Shirt', price: 29 ,category:'clothing', rating:3.8},
//   {id: 5, name: 'Pants', price: 49 ,category:'clothing', rating:4.1},
//   {id: 6, name: 'Shoes', price: 79 ,category:'clothing', rating:4.3},
//    {id: 7, name: 'Tablet', price: 299 ,category:'electronics', rating:4.4},
//    {id: 8, name: 'Monitor', price: 199 ,category:'electronics', rating:4.6},
//    {id: 9, name: 'Jacket', price: 99 ,category:'clothing', rating:4.0},
//    {id: 10, name: 'Socks', price: 9 ,category:'clothing', rating:3.5}
// ]

// app.get('/api/products', (req, res) => {
//   console.log(req.query)
//   let filteredProducts = products

//   if (req.query.category) {
//     filteredProducts = filteredProducts.filter(p => p.category === req.query.category)
//   }

//   if (req.query.maxPrice) {
//     const maxPrice = parseFloat(req.query.maxPrice)
//     filteredProducts = filteredProducts.filter(p => p.price <= maxPrice)
//   }

//   if (req.query.sortBy === 'price') {
//     filteredProducts.sort((a, b) => a.price - b.price)
//   }

//   res.json({
//     count: filteredProducts.length,
//     products: filteredProducts
//   })
// })

// app.listen(4000, () => console.log('Server on port 4000...'))

// const express = require('express')
// const app = express() 
// const users = [
//   {id: 1, name: 'Anthony',city:'New York'},
//   {id: 2, name: 'John',city:'Los Angeles'},
//   {id: 3, name: 'Jane',city:'Houston'},
//   {id: 4, name: 'Alice',city:'Houston'},
//   {id: 5, name: 'Bob',city:'New York'},
//   {id: 6, name: 'Charlie',city:'Lagos'}
// ]

// app.get('/api/users', (req,res)=>{
//     console.log(req.query)
//     let filteredUsers = users

//     if (req.query.city) {
//         filteredUsers = filteredUsers.filter(u => u.city === req.query.city)
//     }
//     if (req.query.name) {
//   filteredUsers = filteredUsers.filter(u => u.name === req.query.name)
// }

//     res.json({
//         count: filteredUsers.length,
//         users: filteredUsers
//     })
// })

// app.listen(4000, ()=>console.log('Server on port 4000...'))


//Application-level middleware example
// const express = require('express')
// const app = express()

// app.use((req,res,next)=>{
//     console.log(`${req.method} ${req.url}`)
//     next()
// })

// app.get('/', (req,res)=>{
//     res.send('Home page')
// })

// app.get('/about', (req,res)=>{
//     res.send('About page')
// })

// app.listen(4000, ()=>console.log('Server on port 4000...'))

//Route-level middleware example
// const express = require('express')
// const app = express()

// app.use('/api/users', (req,res,next)=>{
//     console.log('You are accessing the users route')
//     next()
// })
// app.get('/', (req,res)=>{
//     res.send('Home page')
// })
// app.get('/about', (req,res)=>{
//     res.send('About page')
// })
// app.get('/api/users', (req,res)=>{
//     res.send('Users page')
// })
// app.listen(4000, ()=>console.log('Server on port 4000...'))

// const express = require('express')
// const app = express()

// // Serve everything inside the 'public' folder
// app.use(express.static('public'))

// app.listen(4000, () => console.log('Server on port 4000...'))

// const express = require('express')
// const morgan = require('morgan')
// const app = express()

// app.use(morgan('dev'))

// app.get('/', (req, res) => res.send('Home'))
// app.get('/api/users', (req, res) => res.send('Users'))

// app.listen(4000, () => console.log('Server on port 4000...'))


// const express = require('express')
// const cors = require('cors')
// const app = express()

// // Allow ALL origins — good for development
// app.use(cors())

// app.get('/api/users', (req, res) => {
//   res.json([{ id: 1, name: 'Anthony' }])
// })

// app.listen(4000, () => console.log('Server on port 4000...'))

// const express = require('express')
// const helmet = require('helmet')
// const app = express()

// app.use(helmet())

// app.get('/', (req, res) => res.send('Secure app!'))

// app.listen(4000, () => console.log('Server on port 4000...'))

// const express = require('express')
// const morgan = require('morgan')
// const cors = require('cors')
// const helmet = require('helmet')
// const app = express()

// app.use(helmet())
// app.use(cors())
// app.use(morgan('dev'))

// app.get('/', (req, res) => res.send('Welcome to my API!'))
// app.get('/api/users', (req, res) => {
//   res.json([
//     { id: 1, name: 'Anthony' },
//     { id: 2, name: 'John' },
//     { id: 3, name: 'Jane' }
//   ])
// })

// app.listen(4000, () => console.log('Server on port 4000...'))

// const express = require('express')
// const app = express()

// // Without this — req.body is undefined ❌
// app.use(express.json())

// app.post('/api/users', (req, res) => {
//   console.log(req.body) // data sent from the client
//   res.json({ message: 'User created!', user: req.body })
// })

// app.listen(4000, () => console.log('Server on port 4000...'))


// const express = require('express')
// const app = express()

// app.use(express.json())

// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Jane' }
// ]

// // GET — fetch all users
// app.get('/api/users', (req, res) => {
//   res.json(users)
// })

// // POST — create a new user
// app.post('/api/users', (req, res) => {
//   const newUser = {
//     id: users.length + 1,  // generate a simple id
//     name: req.body.name
//   }

//   users.push(newUser) // add to array

//   res.status(201).json({ message: 'User created!', user: newUser })
//   //      ^
//   //      | 201 = Created (more accurate than 200 for POST)
// })

// app.listen(4000, () => console.log('Server on port 4000...'))

// const express = require('express')
// const app = express()

// app.use(express.json())

// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Jane' },
//   { id: 3, name: 'Anthony' }
// ]

// // GET — fetch all users
// app.get('/api/users', (req, res) => {
//   res.json(users)
// })

// // PUT — update a user
// app.put('/api/users/:id', (req, res) => {

//   // Step 1 — get the id from the URL
//   const id = parseInt(req.params.id)

//   // Step 2 — find the user
//   const user = users.find(u => u.id === id)

//   // Step 3 — if user doesn't exist, return 404
//   if (!user) {
//     return res.status(404).json({ error: 'User not found' })
//   }

//   // Step 4 — update the user's name with data from body
//   user.name = req.body.name

//   // Step 5 — send back the updated user
//   res.json({ message: 'User updated!', user: user })

// })

// app.listen(4000, () => console.log('Server on port 4000...'))


// const express = require('express')
// const app = express()

// app.use(express.json())

// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Jane' },
//   { id: 3, name: 'Anthony' }
// ]

// // GET — fetch all users
// app.get('/api/users', (req, res) => {
//   res.json(users)
// })

// // DELETE — remove a user
// app.delete('/api/users/:id', (req, res) => {

//   // Step 1 — get the id from the URL
//   const id = parseInt(req.params.id)

//   // Step 2 — find the index of the user
//   const index = users.findIndex(u => u.id === id)

//   // Step 3 — if user doesn't exist, return 404
//   if (index === -1) {
//     return res.status(404).json({ error: 'User not found' })
//   }

//   // Step 4 — remove the user from the array
//   users.splice(index, 1)

//   // Step 5 — send back success message
//   res.json({ message: 'User deleted successfully!' })

// })

// app.listen(4000, () => console.log('Server on port 4000...'))

//build a full crud api for products with id, name, price, and category fields. Use an array to store products in memory. Implement GET (all and by id), POST, PUT, and DELETE routes. Include error handling for not found cases.

const express = require('express')
const app = express()

app.use(express.json())

const products = [
  { id: 1, name: 'Laptop', price: 999, category: 'electronics' },
  { id: 2, name: 'Smartphone', price: 499, category: 'electronics' },
  { id: 3, name: 'Headphones', price: 199, category: 'electronics' },
  { id: 4, name: 'Shirt', price: 29, category: 'clothing' },
  { id: 5, name: 'Pants', price: 49, category: 'clothing' },
  { id: 6, name: 'Shoes', price: 79, category: 'clothing' }
]

// GET — fetch all products
app.get('/api/products', (req, res) => {
  res.json(products)
})

// GET — fetch one product by id
app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const product = products.find(p => p.id === id)

  if (!product) {
    return res.status(404).json({ error: 'Product not found' })
  }

  res.json(product)
})

// POST — create a new product
app.post('/api/products', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category
  }

  products.push(newProduct)

  res.status(201).json({ message: 'Product created!', product: newProduct })
})

// PUT — update a product
app.put('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const product = products.find(p => p.id === id)

  if (!product) {
    return res.status(404).json({ error: 'Product not found' })
  }

  product.name = req.body.name
  product.price = req.body.price
  product.category = req.body.category

  res.json({ message: 'Product updated!', product: product })
})

// DELETE — remove a product
app.delete('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = products.findIndex(p => p.id === id)

  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' })
  }

  products.splice(index, 1)

  res.json({ message: 'Product deleted successfully!' })
})

app.listen(4000, () => console.log('Server on port 4000...'))

// This code sets up a simple CRUD API for products using Express. It includes routes to get all products, get a product by ID, create a new product, update an existing product, and delete a product. The products are stored in an in-memory array, and error handling is included for cases where a product is not found.