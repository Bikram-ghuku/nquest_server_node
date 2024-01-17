const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userDataRoute = require('./routes/userDataRoute');
const http = require('http');


const app = express();
const httpServer = http.createServer(app);


app.use(cors());
app.use(bodyParser.json());

app.use('/api', userDataRoute);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});