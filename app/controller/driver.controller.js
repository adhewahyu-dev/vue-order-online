const db = require('../config/db.config.js');
const Driver = db.drivers;
 
exports.create = (req, res) => {  
  Driver.create({  
    full_name: req.body.name,
    phone_number: req.body.phone_number
  }).then(driver => {    
    res.send(driver);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 
exports.findAll = (req, res) => {
  Driver.findAll().then(drivers => {
    res.send(drivers);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 
exports.findById = (req, res) => {  
  Driver.findById(req.params.driverId).then(driver => {
    res.send(driver);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 
exports.delete = (req, res) => {
  const id = req.params.driverId;
  Driver.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('Driver has been deleted!');
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  });
};