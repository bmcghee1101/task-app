const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log('Unable to connect to database!')
	}

	const db = client.db(databaseName)

	db.collection('users').findOne({ _id: ObjectID("5d81b6457221cf3ed264303d") }, (error, user) => {
		if (error) {
			return console.log('Unable to fetch')
		}

		console.log(user)

	})

	db.collection('users').find({ name: 'Brendan' }).toArray((error, users) => {
		console.log(users)
	})

	db.collection('users').find({ name: 'Brendan' }).count((error, count) => {
		console.log(count)
	})


})