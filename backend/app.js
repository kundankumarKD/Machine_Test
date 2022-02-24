const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
var SequelizeStore = require("connect-session-sequelize")(session.Store);
const multer = require('multer');
const { v4: uuidv4 } = require('uuid')

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const Brand = require('./models/brand');
const Category= require('./models/category');
const User = require('./models/user');

const app = express();

const __dirnametwo = path.resolve()
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
    
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
app.set('trust proxy', 1)

const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);


app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/uploads', express.static(path.join(__dirnametwo, 'uploads')));


app.use(
  session({
    secret: "keyboard cat",
    store: new SequelizeStore({
      db: sequelize,
    }),
    resave: false, // we support the touch method so per the express-session docs this should be set to false
    proxy: true, // if you do SSL outside of node.
  })
);


app.use((req, res, next) => {
  // throw new Error('Sync Dummy');
  if (!req.session.user) {
    return next();
  }
  User.findByPk(req.session.user.id)
    .then(user => {
      if (!user) {
        return next();
      }
      req.user = user;
      next();
    })
    .catch(err => {
      next(new Error(err));
    });
});

app.use('/admin', adminRoutes);
app.use(authRoutes);

app.get('/500', errorController.get500);

app.use(errorController.get404);

app.use((error, req, res, next) => {
  res.status(500).json({ msg : 'error in the controller of the respected route'});
});

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
Product.belongsTo(Brand, { constraints: true, onDelete: 'CASCADE' });
Brand.hasMany(Product);
Product.belongsTo(Category, { constraints: true, onDelete: 'CASCADE' });
Category.hasMany(Product);

sequelize
 //  .sync({ force: true })
 .sync()
  .then(result => {
    app.listen(8000);
  })
  .catch(err => {
    console.log(err);
  });
