const mongoose = require('mongoose')
const Schmea = mongoose.Schema;

const taskSchema = new Schmea ({
    title: String,
    description: String,
    status: {type:Boolean, default: false},
})

module.exports = mongoose.model('Tasks', taskSchema)
