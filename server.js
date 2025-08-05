const express = require('express');
const bodyParser = require('body-parser');

const { setStatics } = require('./utils/statics');
const adminRoutes = require('./routes/admin');
const indexRouter = require('./routes/index');

const app = express();
const port = 3000;

//?Custome middleware
app.use(bodyParser.urlencoded({ extended: false }));

//?EJS Engine
app.set('view engine', 'ejs');

//?Static files
setStatics(app);

//?Routes
app.use(indexRouter);
app.use('/admin', adminRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
