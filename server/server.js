const express = require('express');

const app = express();
const bodyParser = require('body-parser');

//Route includes
const countRouter = require ('./routes/count.router');

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.use('/count', countRouter);

// Serve static files
const PORT = process.env.PORT || 5000;

/** Listen **/
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});