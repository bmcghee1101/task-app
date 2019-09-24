const express = require('express')
require('./db/mongoose')
const User = require('./models/users')
const userRouter = require('./routers/user')
const Task = require('./models/tasks')
const taskRouter = require('./routers/task')
const path = require('path')
const hbs = require('hbs')


const app = express()
const port = process.env.PORT || 3000


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', async (req, res) => {
	res.render('index', {
        title: 'Weather',
        name: 'Brendan McGhee'
    })
})

app.get('/register', async (req, res) => {
	res.render('register')
})

app.get('/login', async (req, res) => {
	res.render('login')
})



// app.use((req, res) => {
// 	res.status(503).send('Site currently under maintenance!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



// Start sever listening
app.listen(port, () => {
	console.log('Server is up on port ' + port)
})


