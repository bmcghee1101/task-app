const button = document.getElementById('btnLogin')
const unameIn = document.getElementById('uname')
const passwdIn = document.getElementById('passwd')


button.addEventListener('click', (e) => {
	e.preventDefault()
	


	const uname = unameIn.value
	const passwd = passwdIn.value
	const data = { email: uname, password: passwd}
	const jsonData = JSON.stringify(data)


	fetch('http://localhost:3000/users/login', {
		method: 'POST',
		headers: {
    	"Content-Type": "application/json"
    },
		body: jsonData
	}).then((response) => {
		response.json().then((data2) => {
			if (data2.error) {
				alert(data2.error)
			} else {
				alert(data2.token)
			}
		})
	})


	alert(document.cookie)

})