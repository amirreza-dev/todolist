const express = require('express');
const bodyParser = require('body-parser');

const { setStatics } = require('./utils/statics');
const adminRoutes = require('./routes/admin');

const app = express();

//?Custome middleware
app.use(bodyParser.urlencoded({ extended: false }));

//?EJS Engine
app.set('view engine', 'ejs');

//?Static files
setStatics(app);

//?Routes
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
  res.render('index', { pageTitle: 'اپلیکیشن کارهای روزمره' });
});

app.listen(3000, () => console.log(`Server is running`));
