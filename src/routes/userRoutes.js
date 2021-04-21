'use strict';

const express = require('express');

const User = require('../models/userModel.js');
const users = new User();

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getOneUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

function getAllUsers(req, res) {
    let getUsers = users.read();
    res.status(200).json(getUsers);
}

function getOneUser(req, res) {
    const id = parseInt(req.params.id);
    let getUser = users.read(id);
    res.status(200).json(getUser);
}

function createUser(req, res) {
    let newUser = users.create(req.body);
    res.status(201).json(newUser);
}

function updateUser(req, res) {
    const id = parseInt(req.params.id);
    let updateUser = users.update(id, req.body);

    res.status(200).json(updateUser);
}

function deleteUser(req, res) {
    const id = parseInt(req.params.id);
    let deleteUser = users.delete(id, req.body);

    res.status(200).json(deleteUser);
}




module.exports = router;