const mongoose = require('mongoose');

async function connect() {
    try {
        const url = 'mongodb+srv://khuatminh2905_db_user:8SiOkjIhYQUm4y2e@cluster0.n5lrelo.mongodb.net/?appName=Cluster0'
        var a = await mongoose.connect(url);
        console.log('Connect to db success '+url)
    } catch (e) {
        console.log('Connect to db failed '+e)
    }
}

module.exports = {connect}