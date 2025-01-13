const scriptURL = 'https://script.google.com/macros/s/AKfycbxb3-w-qpZDgizxpsK7FA_8EtwGAzTwczKM9PVjIolluKU0evsG4f4axZ26EI1JKgpI/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, {method: 'POST', body: new FormData(form)})
  .then(Response => alert("Thank you! Your form is submitted succesfully."))
  .then(() => {window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
