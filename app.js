const express = require('express')
const cors = require('cors');
const app = express()

app.use(
    cors({
      origin: "*",
      preflightContinue: true,
    }))
app.options(
    '/mock/preflight',
    cors({
        origin: "*",
    })
)
app.get('/mock/preflight', (req, res) => {
    res.send('You have reached Preflight Blackhole!')
  })
app.post('/mock/preflight', (req, res) => {
    res.send('You have reached Preflight Blackhole!')
})

app.put('/mock/preflight', (req, res) => {
    res.send('You have reached Preflight Blackhole!')
})

app.delete('/mock/preflight', (req, res) => {
    res.send('You have reached Preflight Blackhole!')
})

app.listen(3000, () => console.log("Welcome to DisCORS!"));

module.exports = app;