const express = require('express')
require('dotenv').config({path: '.env'})

const app = express()
app.get('*', (req, res) => {
    res.sendDate(200)
})

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT} and in ${process.env.NODE_ENV}`)
})