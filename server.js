const express = require('express');
const bodyParser = require('body-parser');

const { setStatics } = require('./utils/statics');
const adminRoutes = require('./routes/admin');
const indexRouter = require('./routes/index');
const notFoundController = require('./controllers/404');

const app = express();

//?Custome middleware
app.use(bodyParser.urlencoded({ extended: false }));

//?EJS Engine
app.set('view engine', 'ejs');

//?Static files
setStatics(app);

//?Routes
app.use(indexRouter);
app.use('/admin', adminRoutes);

//!404 Not Found
app.use(notFoundController.get404);

app.listen(3000, () => console.log(`Server is running on port 3000`));
