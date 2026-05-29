const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Topic = new Schema({
    lessonId: { type: Schema.Types.ObjectId, ref: 'lessons' },
    index: { type: Number, default: 0 },
    title: { type: String, default: '' },
    content: { type: String, default: '' }
}, {
    versionKey: false
})
module.exports = mongoose.model('topic', Topic)