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

httpServer.listen(4000, () => {
    console.log('Server is running on port 4000');
});