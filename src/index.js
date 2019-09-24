const express = require('express')
require('./db/mongoose')
const User = require('./models/users')
const userRouter = require('./routers/user')
const Task = require('./models/tasks')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT || 3000



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


