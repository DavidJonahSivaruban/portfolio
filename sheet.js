const scriptURL = 'https://script.google.com/macros/s/AKfycbykeTtSL_3n685gHwPsHaHA3yeMfuFEBAcg2iZ-jL_l2iwiAaiRsG7j_a8gSn5N7Jzk/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, {method: 'POST', body: new FormData(form)})
  .then(Response => alert("Thank you! Your form is submitted succesfully."))
  .then(() => {window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})