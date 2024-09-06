const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userDataRoute = require('./routes/userDataRoute');
const resColRoute = require('./routes/resColRoute')
const http = require('http');
const SocketService = require('./services/socket');


const app = express();

app.use(cors());
app.use(bodyParser.json());


const httpServer = http.createServer(app);
const sockerService = new SocketService(httpServer);

sockerService.initListeners();

app.use('/api', userDataRoute);
app.use('/api', resColRoute)

app.post('/api/', (req, res) => {
    
    if(!req.body.msg){
        res.status(400).send('Bad Request');
    }else{
        res.status(200).send('Hello World');
        sockerService.getIO().emit('alertMsg', req.body.msg);
    }
})

app.post('/api/submit', (req, res) => {
    console.log(req.body)
})

httpServer.listen(4000, () => {
    console.log('Server is running on port 4000');
});