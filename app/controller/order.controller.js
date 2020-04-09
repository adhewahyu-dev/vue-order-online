const db = require('../config/db.config.js');
const Order = db.orders;
 
exports.create = (req, res) => {  
  Order.create({  
    user_id: req.body.user_id,
    driver_id: req.body.driver_id
  }).then(order => {    
    res.send(order);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 
exports.findAll = (req, res) => {
  Order.findAll().then(orders => {
    res.send(orders);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 
exports.findById = (req, res) => {  
  Order.findById(req.params.orderId).then(order => {
    res.send(order);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 
exports.delete = (req, res) => {
  const id = req.params.orderId;
  Order.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('Order has been deleted!');
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  });
};