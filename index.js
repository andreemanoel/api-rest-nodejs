// require("dotenv-safe").config();
const app = require('./src/app');

const port = 8081;

// user node 12
app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})