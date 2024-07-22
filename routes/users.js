const { faker } = require('@faker-js/faker')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {

  const { limit, offset } = req.query
  if (limit && offset) {

    res.json([
      {
        limit,
        offset
      }
    ])

  } else {
    const users = []
    for (let index = 0; index < 100; index++) {
      users.push(
        {
          name: faker.person.firstName(),
          age: faker.number.int({ min: 18, max: 65 }),
          role: faker.person.jobTitle()
        },
      )
    }
    res.json(users)
  }
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
