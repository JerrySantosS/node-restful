module.exports = app => {
  // const controller = require('../controllers/customerWallets')();
  const controller = app.controllers.customerWallets;

  app.route('/api/v1/customer-wallets')
    .get(controller.listCustomerWallets)
    .post(controller.saveCustomerWallets);

}
