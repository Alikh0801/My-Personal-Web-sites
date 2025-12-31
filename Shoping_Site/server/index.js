const { config } = require("dotenv");
const app = require("./src/app");


app.listen(config.port, () => {
    console.log('Server is running...')
})