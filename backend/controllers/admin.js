const fileHelper = require('../util/file');

const { validationResult } = require('express-validator/check');

const Product = require('../models/product');
const Brand = require('../models/brand');
const Category = require('../models/category');

exports.postUpload = (req, res, next) => {
  const img = req.file.path;
  console.log(img)
  return res.json({imageUrl : img});
  
}

exports.getBrandAndCat = (req, res, next) => {
  let brands;
  let categories;

  Brand
    .findAll()
    .then(fetchedbrands => {
      brands = fetchedbrands;
      return Category.findAll();
    })
    .then(fetchedcategory => {
      categories = fetchedcategory;
      return categories;
    })
    .then(cat => {
      res.json({  brandslist: brands, categories: cat }); 
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });

 
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const brand = req.body.brand_id;
  const category = req.body.category_id;
  const image = req.body.imgref;
  const color = req.body.color;
  const selling_price = req.body.selling_price;
  const discount_price = req.body.discount_price;
  const product_qty = req.body.product_qty;
  const product_code = req.body.product_code;
  const description = req.body.description;

  
  if (!image) {
        console.log(title + brand + category + image + color + selling_price + discount_price + product_qty + product_code + description)
        return res.status(422).json({ 
          product: {
          title: title,
          price: price,
          description: description
        },
        errorMessage: 'Attached file is not an image.',
        validationErrors: []
      });
  }
  const errors = validationResult(req);

  console.log(category);
  console.log(brand);

  if (!errors.isEmpty()) {
        console.log(errors.array());
        return res.status(422).json({ 
          product: {
          title: title,
          price: price,
          description: description
        },
        errorMessage: errors.array()[0].msg,
        validationErrors: errors.array()
      });
  }

  const product = {
    // _id: new mongoose.Types.ObjectId('5badf72403fd8b5be0366e81'),
    title: title,
    brandId: brand,
    categoryId: category,
    imageUrl: image,
    color: color,
    selling_price: selling_price,
    discount_price: discount_price,
    product_qty: product_qty,
    status: product_qty,
    product_code: product_code,
    description: description,
    userId: req.user.id
  };
  Product
    .create(product)
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.json({ msg : 'Product Added Successfully' });
    })
    .catch(err => {
      // return res.status(500).render('admin/edit-product', {
      //   pageTitle: 'Add Product',
      //   path: '/admin/add-product',
      //   editing: false,
      //   hasError: true,
      //   product: {
      //     title: title,
      //     imageUrl: imageUrl,
      //     price: price,
      //     description: description
      //   },
      //   errorMessage: 'Database operation failed, please try again.',
      //   validationErrors: []
      // });
      // res.redirect('/500');
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getEditProduct = (req, res, next) => {
  
  const prodId = req.params.productId;
  Product.findByPk(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.json({ product: product})
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const title = req.body.title;
  const brand = req.body.brand_id;
  const category = req.body.category_id;
  const image = req.body.imgref;
  const color = req.body.color;
  const selling_price = req.body.selling_price;
  const discount_price = req.body.discount_price;
  const product_qty = req.body.product_qty;
  const product_code = req.body.product_code;
  const description = req.body.description;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log('Check Me')
    return res.status(422).json({ product: {
      title: updatedTitle,
      price: updatedPrice,
      description: updatedDesc,
      id: prodId
    },
    errorMessage: errors.array()[0].msg,
    validationErrors: errors.array()});
  }

  Product.findByPk(prodId).then(product => {
      console.log(product)
      
      if (product.userId !== req.user.id) {
        return res.redirect('/');
      }

      console.log("Your File")
      console.log(image)
      console.log("Your File")
      console.log(req.body)
      
      product.title = title;
      product.brandId = brand;
      product.categoryId = category;
      product.color = color;
      product.selling_price = selling_price;
      product.discount_price = discount_price;
      product.product_qty = product_qty;
      product.status = product_qty;
      product.product_code = product_code;
      product.description = description;
      if (image) {
        fileHelper.deleteFile(product.imageUrl);
        product.imageUrl = image;
      

      }
      return product.save().then(result => {
        console.log('UPDATED PRODUCT!');
        res.json({ msg : "Product Updated Successfully" });
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getProducts = (req, res, next) => {
  console.log(req.user.id + 'is your user id')
  Product.findAll( {
    where: {
      userId: req.user.id
    }
  } )
    // .select('title price -_id')
    // .populate('userId', 'name')
    .then(products => {
      console.log(products);
      res.json({ prods: products })
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId)
    .then(product => {
      if (!product) {
        return next(new Error('Product not found.'));
      }
      fileHelper.deleteFile(product.imageUrl);
      return Product.destroy({ where: { id: prodId, userId: req.user.id } });
    })
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.json( {msg : 'Product Deleted' })
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};
