let form = document.querySelector('.contact_form')
let validateBtn = form.querySelector('.message')
let firstName = form.querySelector('.first_name')
let lastName = form.querySelector('.last_name')
let mail = document.querySelector('.e_mail')
let telephone = form.querySelector('.telephone')
let fields = form.querySelectorAll('.field')

let generateError = function (text) {

	let error = document.createElement('div')
		error.className = 'error'
		error.innerHTML = text
		return error
}

let removeValidation = function () {

	let error = form.querySelectorAll('.error')

	for (i = 0; i < error.length; i ++)
		error[i].remove()
}

let checkFields = function () {

	for (i = 0; i < fields.length; i++) {

		if (!fields[i].value) {
            let error = generateError('The field must be filled')
            form[i].parentElement.insertBefore(error, fields[i])
		} else {
            
        }
	}
}

let validMail = function () {
	let patternMail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

	if (mail.value.match(patternMail)) {
		console.log(true)
	}else {
		let error = generateError('Incorrect mail')
		mail.parentElement.insertBefore(error, mail)
	}
}

let validTelephone = function () {
	let patternTelephone = /^(8|\+7)\d{10}/

	if (telephone.value.match(patternTelephone)) {
		console.log(true)
	}else {
		let error = generateError('Incorrect number')
		telephone.parentElement.insertBefore(error, telephone)
	}
}

form.addEventListener ('submit', function(event) {
	event.preventDefault()
	removeValidation()
    checkFields()
    validMail()
    validTelephone()
})