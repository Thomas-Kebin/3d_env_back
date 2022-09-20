const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const path = require('path');
const cors = require("cors");
// const passport = require('passport');


const app = express();

// Connect Database
// connectDB();


app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true,limit:"50mb" }));
app.use(bodyParser.json({limit:"50mb"}));


// Passport middleware
// app.use(passport.initialize());

// Passport Config
// require('./config/passport')(passport);

const doors = require('./routes/api/doors');


app.use('/api/doors', doors);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
