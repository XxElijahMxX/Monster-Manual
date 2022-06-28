const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./config/connection');

const app = express();

app.get('/', (req, res) => res.send('INDEX'));

// Monster routes
app.use('/monsters', require('./routes/monsters'));

const PORT = process.env.PORT || 3001;

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});