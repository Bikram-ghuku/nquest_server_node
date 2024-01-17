const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userDataRoute = require('./routes/userDataRoute');
const http = require('http');
const SocketService = require('./services/socket');


const app = express();

app.use(cors());
app.use(bodyParser.json());


const httpServer = http.createServer(app);
const sockerService = new SocketService(httpServer);

sockerService.initListeners();

app.use('/api', userDataRoute);
app.get('/api/', (req, res) => {
    sockerService.getIO().emit('alertMsg', 'Hello from server');
    res.status(200).send('Hello World');
})

app.post('/api/submit', (req, res) => {
    console.log(req.body)
})

httpServer.listen(4000, () => {
    console.log('Server is running on port 4000');
});