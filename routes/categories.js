const express = require('express')
const router = express.Router()

router.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params
  res.json([
    {
      categoryId,
      category: 'Electronics',
      products: []
    }
  ])
})

router.get('/', (req, res) => {
  const { categoryId } = req.params
  res.json([
    {
      categoryId,
      category: 'Clothes',
      products: []
    },
    {
      categoryId,
      category: 'Electronics',
      products: []
    },
    {
      categoryId,
      category: 'furnitures',
      products: []
    }
  ])
})

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params
  res.json([
    {
      categoryId,
      productId,
      name: 'Mouse Genius'
    }
  ])
})

module.exports = router
