module.exports = app => {
  // const controller = require('../controllers/customerWallets')();
  const controller = app.controllers.vehicleController;

  app.route('/api/vehicles')
    .get(controller.getVehicles)
    .post(controller.createVehicle);

  app.route('/api/vehicles/:id')
   .get(controller.getVehicleById)
    .delete(controller.deleteVehicle)
    .put(controller.updateVehicle);
}
