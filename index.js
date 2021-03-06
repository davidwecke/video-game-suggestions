const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const dburi = process.env.ATLAS_URI;
mongoose.connect(dburi, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
	console.log("MongoDB database connection established succesfully");
});

const suggestionRouter = require('./routes/suggestions');
const userRouter = require('./routes/users');


app.use(express.static('client/build'));
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


app.use('/api/suggestions', suggestionRouter);
app.use('/api/users', userRouter);


app.listen(port, () => {
	console.log('Server is running on port %d', port);
});