const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const addWorkRoutes = require('./routes/add-work');
const workRoutes = require('./routes/works');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))
app.set('views','views');
app.set('view engine','pug');

app.use(addWorkRoutes.routes);
app.use(workRoutes);
app.listen(3000);