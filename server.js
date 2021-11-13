
// Importing Modules
const mongoose = require('mongoose');
const express = require('express');
const compression = require("compression");
const bodyParser = require('body-parser');
const path = require('path');

//possible EventEmitter memory leak detected
require('events').EventEmitter.prototype._maxListeners = 100;

// importing files
const routes = require('./routes');

// Define Global Variables
const app = express();
const log = console.log;
const PORT = process.env.PORT || 8080; // Step 1


function shouldCompress(req, res) {
    if (req.headers["x-no-compression"]) return false;
    return compression.filter(req, res);
  }

// Step 2
mongoose.connect( process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);
app.use(compression({
    level: 2,               // set compression level from 1 to 9 (6 by default)
    filter: shouldCompress, // set predicate to determine whether to compress
  }));

// Step 3
if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}

app.listen(PORT, () => {
    log(`Server is starting at PORT: ${PORT}`);
});
