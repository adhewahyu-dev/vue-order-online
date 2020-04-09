const db = require('../config/db.config.js');
const Product = db.products;
 
exports.create = (req, res) => {  
  Product.create({  
    name: req.body.name,
    price: req.body.price
  }).then(product => {    
    res.send(product);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 
exports.findAll = (req, res) => {
  Product.findAll().then(products => {
    res.send(products);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 
exports.findById = (req, res) => {  
  Product.findById(req.params.productId).then(product => {
    res.send(product);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 
exports.delete = (req, res) => {
  const id = req.params.productId;
  Product.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('Product has been deleted!');
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  });
};