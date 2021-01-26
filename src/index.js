const express = require('express');
const app = express();
const port = process.env.PORT || '8000';

const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb+srv://root:123@cluster0.qv3nf.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

app.listen(port, function () {
    console.log('Web server listening on port ' + port);
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose connected');
});

app.use(express.json());
app.use(require('./routes'));