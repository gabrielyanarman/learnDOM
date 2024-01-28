let slider = document.querySelector('.slider')
let thumb = document.querySelector('.thumb')
let thumbOn = false

function moveThumb(event) {
    if(!thumbOn) return
    let left = event.clientX
    
	if (
        left > slider.offsetLeft + slider.offsetWidth ||
        left < slider.offsetLeft
	) return

	thumb.style.left = left - slider.offsetLeft + 'px'
}

document.addEventListener('mousemove', moveThumb)

thumb.addEventListener('mousedown',()=> thumbOn = true)
document.addEventListener('mouseup',() => thumbOn = false)