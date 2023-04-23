const User = require('../models/User');

const getUsers = async (req, res) => {
  const users = await User.findAll();

  res.status(200).json(users);
}

const getUserById = async (req, res) => {
  const id = parseInt(req.params.id);

  const user = await User.findByPk(id);

  res.status(200).json(user);
}

const createUser = async (req, res) => {
  const { name, email } = req.body;

  const results = await User.create({
    name: name,
    email: email
  })

  res.status(201).send(`User added with ID: ${results}`)
}

const updateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  await User.update({
    name,
    email
  }, {
    where: {
      id: id
    }
  })
  res.status(200).send(`User modified with ID: ${id}`)
}

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  User.destroy({ where: { id } });

  res.status(200).send(`User deleted with ID: ${id}`);
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
