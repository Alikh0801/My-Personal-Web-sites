const { default: mongoose } = require("mongoose")
const config = require(".")


const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(config.db_url)
        console.log('Db Connection Successfully...')
    } catch (error) {
        console.log('Db Connection failed !!!', error)
    }
}

module.exports = dbConnect;