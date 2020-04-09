const db = require('../config/db.config.js');
const Customer = db.customers;
 
// Post a Customer
exports.create = (req, res) => {  
  // Save to MySQL database
  Customer.create({  
    fullname: req.body.name,
    username: req.body.username,
    email: req.body.email,
    phonenumber: req.body.phonenumber
  }).then(customer => {    
    // Send created customer to client
    res.send(customer);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 
// FETCH all Customers
exports.findAll = (req, res) => {
  Customer.findAll().then(customers => {
    // Send all customers to Client
    res.send(customers);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 
// Find a Customer by Id
exports.findById = (req, res) => {  
  Customer.findById(req.params.customerId).then(customer => {
    res.send(customer);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
  const id = req.params.customerId;
  Customer.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('Customer has been deleted!');
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  });
};