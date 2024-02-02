let table = document.querySelector('table')
let rows = table.rows
let td_s = document.querySelectorAll('td')
let openedTd = false

document.addEventListener('click',function(event) {
    if(event.target.tagName == 'TEXTAREA') return
    if(event.target.tagName == 'TABLE') return
    if(event.target.tagName == 'TBODY') return
    if(event.target.tagName == 'TR') return
    if(event.target.tagName == 'BUTTON') return
    if(event.target.classList.contains('areaTd')) return

    if(openedTd) {
       let cancel = document.querySelector('.cancel')
       cancel.dispatchEvent(new Event('click'))
    }
    let target = event.target.closest('TD')
    target.classList.add('areaTd')

    addArea(target)
    openedTd = target
})

function addArea(target) {
    let textarea = document.createElement('textarea')
    textarea.value = target.innerHTML
    let canceledHtml = target.innerHTML
    textarea.style.border = 0
    target.innerHTML = '';
    target.append(textarea)

    addButtons(target)

    let cancel = document.querySelector('.cancel')
    cancel.addEventListener('click',() => {
        target.innerHTML = canceledHtml
        target.classList.remove('areaTd')
        removeButtons()
        openedTd = null
    })

    let edit = document.querySelector('.edit');
    edit.addEventListener('click',() => {
        target.innerHTML = textarea.value
        target.classList.remove('areaTd')
        removeButtons()
        openedTd = null
    })
}

function addButtons(target) {
    let edit = document.createElement('button')
    let cancel = document.createElement('button')
    cancel.className = 'cancel'
    edit.className = 'edit'
    let coords = target.getBoundingClientRect()

    edit.textContent = 'OK'
    cancel.textContent = 'CANCEL'

    edit.style.position = 'absolute'
	cancel.style.position = 'absolute'

    let left = coords.left 
    let top = coords.top + target.offsetHeight

    edit.style.left = left + 'px'
    edit.style.top = top + 'px'
    cancel.style.left = left + 35 +  'px'
    cancel.style.top = top + 'px'

    document.body.append(edit)
    document.body.append(cancel)
}

function removeButtons() {
    document.querySelector('.cancel').remove()
    document.querySelector('.edit').remove()
}
