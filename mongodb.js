const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log('Unable to connect to database!')
	}

	const db = client.db(databaseName)

	// db.collection('users').insertOne({
	// 	name: "Brendan",
	// 	age: 30
	// }, (error, result) => {
	// 	if (error) {
	// 		return console.log('Unable to insert user')
	// 	}

	// 	console.log(result.ops)

	// })

	// db.collection('users').insertMany([
	// 	{
	// 		name: 'Jen',
	// 		age: 28
	// 	}, {
	// 		name: 'Candace',
	// 		age: 30
	// 	}
	// ], (error, result) => {
	// 	if (error) {
	// 		return console.log('Unable to insert user!')
	// 	}

	// 	console.log(result.ops)

	// })

	db.collection('tasks').insertMany([
			{
				description: "Feed dog",
				completed: true
			}, {
				description: "Take out trash",
				completed: true
			}, {
				description: "Do dishes",
				completed: false
			}
		], (error, result) => {
			if (error) {
				return console.log('unable to insert collection')
			}
			console.log(result.ops)
		})




})