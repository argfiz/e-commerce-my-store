//const { faker } = require('@faker-js/faker')
const express = require('express')
const router = express.Router()

const UsersService = require('.././services/users.service')
const service = new UsersService

router.get('/', async (req, res) => {
  const users = await service.find()
  res.send(users)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json([
    {
      id,
      name: 'Paula',
      age: 28,
      role: 'Product Design'
    }
  ])
})

module.exports = router
