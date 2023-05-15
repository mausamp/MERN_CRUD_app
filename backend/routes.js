const express = require('express')
const { 
    getAll, createNew, getContent, deleteContent, updateContent 
} = require('./routeController')

const router = express.Router()

router.get('/', getAll)

router.post('/', createNew)

router.get('/:id', getContent)

router.delete('/:id', deleteContent)

router.patch('/:id', updateContent)

module.exports = router