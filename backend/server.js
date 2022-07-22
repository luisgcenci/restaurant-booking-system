//database
require('./config/database').connect();
require('dotenv').config();

//routes
const user = require('./routes/User.routes');
const company = require('./routes/Company.routes');

//app
const express = require('express');
const app = express();
const port = 5000;
var cors = require('cors')

//bodyParser
const bodyParser = require('body-parser');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Home');
});

app.use('/api/v1/user', user);
app.use('/api/v1/company', company);

app.listen(port, () => console.log(`Listening on port ${port}`));

// //if ssl certificate
// //ssl config
// const https = require('https');
// const fs = require('fs');

// const options = {
// 	key: fs.readFileSync('/etc/letsencrypt/live/restaurant-booking-system.ga/privkey.pem'),
// 	cert: fs.readFileSync('/etc/letsencrypt/live/restaurant-booking-system.ga/cert.pem')
// }

// const httpsServer = https.createServer(options, app);
// httpsServer.listen(port, () => console.log(`Listening on port ${port}`));
// //app.listen(port, () => console.log(`Listening on port ${port}`));