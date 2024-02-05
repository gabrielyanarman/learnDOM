let modal = document.querySelector('.modal')
let message = document.querySelector('#prompt-message')
let form = document.forms[0]
let question = form.elements.text
let back = form.elements.cancel


opeen.onclick = () => {
    modal.classList.add('open')
}

modal.addEventListener('click',function(event) {
    if(event.target.closest('.page')) return
    modal.classList.remove('open')
})

function showPrompt(html,callback) {
    modal.classList.add('open');
    message.textContent = html
    form.addEventListener('submit',function(event) {
        let answer = question.value
        callback(answer)
        event.preventDefault()
        modal.classList.remove('open')
    })

    back.onclick = function() {
        callback(null)
        modal.classList.remove('open')
    }

    form.addEventListener('keydown',(event) => {
			if(event.key == 'Escape') {
                callback(null)
                modal.classList.remove('open')
            }
		})   
        form.elements.text.focus()    
}

opeen.onclick = () => {
    showPrompt('Do you like programming ?', function (a) {
			alert(a)
		})
}

