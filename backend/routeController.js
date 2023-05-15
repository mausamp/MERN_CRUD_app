const crud = require('./schema')
const mongoose = require('mongoose')

//get all
const getAll = async (req, res) => {
    const content = await crud.find({}).sort({createdAt: -1})
    res.status(200).json(content)
}

const createNew = async (req, res) => {
    const {title, body} = req.body

    try {
        const content =  await crud.create({title, body})
        res.status(200).json(content)
    } catch(error) {
        res.status(400).json({error: error.msg})
    }
}

const getContent = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid id'})
    }

    const content = await crud.findById(id)

    if(!content) { 
        return res.status(404).json({error:'Not Found'})
    }
    res.status(200).json(content)
}

const deleteContent = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: 'Invalid id'})
    }

    const content = await crud.findOneAndDelete({_id: id}) 
    if(!content) {
        return res.status(404).json({error: 'Delete Failed'})
    }
    res.status(200).json(content)
}

const updateContent = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: 'Invalid id'})
    }

    const content = await crud.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!content) {
        return res.status(404).json({error: 'Update Failed'})
    }
}

module.exports = { getAll, createNew, getContent, deleteContent, updateContent}