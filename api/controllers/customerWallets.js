const uuidv4 = require('uuid/v4');

module.exports = app => {
  // const customerWalletsDB = require('../data/customerWallets.json');
  const customerWalletsDB = app.data.customerWallets;
  const controller = {};

  const {
    customerWallets: customerWalletsMock,
  } = customerWalletsDB;

  controller.listCustomerWallets = (req, res) => {
    res.status(200).json(customerWalletsDB);
  }

  controller.saveCustomerWallets = (req, res) => {
    customerWalletsMock.data.push({
      id: uuidv4(),
      parentID: uuidv4(),
      name: req.body.name,
      birthDate: req.body.birthDate,
      cellPhone: req.body.cellPhone,
      phone: req.body.phone,
      email: req.body.email,
      occupation: req.body.occupation,
      state: req.body.state,
    });

    res.status(201).json(customerWalletsMock)
  }

  return controller;
}
