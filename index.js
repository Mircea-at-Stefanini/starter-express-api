const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.json({"number": "20305"});
})
app.listen(process.env.PORT || 3000)
