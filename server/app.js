const express = require('express') // import express package
const http = require('http')    // to create a server for real-time connection
const morgan = require('morgan')
require('dotenv').config()      // importing the dot env file
const bodyParser = require('body-parser')
const cors = require('cors')
const WebSocket = require('ws')
const authRoutes = require('./routes/authroutes')
const profileRoutes = require('./routes/profileroutes')

const app = express()       // creating an instance of express (class)
const PORT = process.env.PORT || 3000       // using the dot env file


// Middlewares
app.use(morgan('dev'))

app.use(bodyParser.json())      // used to identify the body of a request

app.use(
    cors({
        origin: ["http://127.0.0.1:5500", "https://wordweaver-api.onrender.com"],
        credentials: true,
    })
)

app.use('/accounts', authRoutes)
app.use('/profile', profileRoutes)

const server = http.createServer(app)   // to create out http server and pass our express server into it.

const wss = new WebSocket.Server({ server });    // create the web socket server


// Create a Web Socket Server connection
wss.on('connection', (ws) => {
    console.log('Connection Established')

    // handle incoming WebSocket messages
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        ws.send(`${message}`)
    });

    // handle WebSocket disconnection
    ws.on('close', () => {
        console.log(`WebSocket disconnected:`);
    });
});

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})