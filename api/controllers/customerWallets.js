const {v4: uuidv4} = require('uuid');

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
      parentId: uuidv4(),
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

  controller.removeCustomerWallets = (req, res) => {
    const { customerId, } = req.params;

    const foundCustomerIndex = customerWalletsMock.data.findIndex(
      customer => customer.id === customerId);

    if (foundCustomerIndex === -1) {
      res.status(404).json({
        message: 'cliente não encontrado na base.',
        succcess: false,
        customerWallets: customerWalletsMock,
      })
    }else {
      customerWalletsMock.data.splice(foundCustomerIndex, 1);
      res.status(200).json({
        message: 'cliente encotrado e deletado com sucesso.',
        success: true,
        customerWallets: customerWalletsMock,
      });
    }

  }

  controller.updateCustomerWallets = (req, res) => {
    const { customerId, } = req.params;

    const foundCustomerIndex = customerWalletsMock.data.findIndex(
      customer => customer.id === customerId);

    if (foundCustomerIndex === -1) {
      res.status(404).json({
        message: 'cliente não encontrado na base.',
        succcess: false,
        customerWallets: customerWalletsMock,
      })
    }else {
      const newCustomer = {
        id: customerId,
        parentId: req.body.parentId,
        name: req.body.name,
        birthDate: req.body.birthDate,
        cellPhone: req.body.cellPhone,
        phone: req.body.phone,
        email: req.body.email,
        occupation: req.body.occupation,
        state: req.body.state,
        createdAt: new Date()
      };

      customerWalletsMock.data.splice(foundCustomerIndex, 1, newCustomer);
      console.log(newCustomer)
      res.status(200).json({
        message: 'cliente encotrado e atualizado com sucesso.',
        success: true,
        customerWallets: customerWalletsMock,
      });
    }
  }


  return controller;
}
