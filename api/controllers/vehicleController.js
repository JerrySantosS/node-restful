const Vehicle = require('../models/vehicle');

  const getVehicles = async (req, res) => {
    const vehicles = await Vehicle.findAll();
    res.status(200).send(vehicles);
  }

  const getVehicleById = async (req, res) => {
    const id = parseInt(req.params.id);
    const vehicle = await Vehicle.findByPk(id);

    res.status(200).send(vehicle);
  }

  const createVehicle = async (req, res) => {
    const { description, paca } = req.body;
    const vehicle = await Vehicle.create({
      description: description,
      paca: paca
    });

    res.status(201).json(vehicle);
  }

  const updateVehicle = async (req, res) => {
    const id = parseInt(req.params.id);
    const { description, paca } = req.body;

    await Vehicle.update({description, paca}, {
      where: {
        id: id
      }
    });

    res.status(200).send('Updated');
  }

  const deleteVehicle = async (req, res) => {
    const id = parseInt(req.params.id);

    await Vehicle.destroy({
      where: {
        id: id
      }
    });

    res.status(200).send('destroy');
  }

  module.exports = {
    getVehicles,
    createVehicle,
    updateVehicle,
    getVehicleById,
    deleteVehicle
  }

