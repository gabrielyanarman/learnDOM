let cursor_hover
let timeout_id
let current_elem = document.getElementById('elem')
let tooltip = document.getElementById('tooltip')

function cursor_on_element() {
	cursor_hover = true
	timeout_id = setTimeout(hover_check, 400)

	function hover_check() {
		if (cursor_hover) {
			tooltip.style.left = current_elem.getBoundingClientRect().left + 5 + 'px'
			tooltip.style.top = current_elem.getBoundingClientRect().bottom + 5 + 'px'
			tooltip.hidden = false
		}
	}
}

function cursor_out() {
	tooltip.hidden = true
	cursor_hover = false
	clearTimeout(timeout_id)
}

current_elem.addEventListener('mouseenter', cursor_on_element)
current_elem.addEventListener('mouseleave', cursor_out)
