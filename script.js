let mouse = document.getElementById('mouse')

mouse.style.position = 'fixed';

mouse.addEventListener('keydown',function(event) {
    switch(event.key) {
        case 'ArrowRight' :
            arrowRight();
            break;
        case 'ArrowLeft' :
            arrowLeft();
            break;
        case 'ArrowUp' :
            arrowUp();
            break;
        case 'ArrowDown' :
            arrowDown();
            break
    }
})

function arrowRight() {
    let coords = mouse.getBoundingClientRect()
    mouse.style.left = coords.left + mouse.offsetWidth + 'px'
}

function arrowLeft() {
    let coords = mouse.getBoundingClientRect()
	mouse.style.left = coords.left - mouse.offsetWidth + 'px'
}

function arrowUp() {
    let coords = mouse.getBoundingClientRect()
    mouse.style.top = coords.top - mouse.offsetHeight + 'px'
}

function arrowDown() {
    let coords = mouse.getBoundingClientRect()
	mouse.style.top = coords.top + mouse.offsetHeight + 'px'
}