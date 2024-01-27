document.addEventListener('mouseover',function(event) {
    if(!event.target.closest('[data-tooltip]')) return
    addTooltip(event.target.closest('[data-tooltip]'))
    
})

document.addEventListener('mouseout',function(event) {
    if(!event.target.closest('[data-tooltip]')) return
    let tooltip = document.querySelector('.tooltip');
    tooltip.remove()
})

function addTooltip(target) {
    let tooltip = document.createElement('div')
    tooltip.className = 'tooltip'
    tooltip.innerHTML = target.getAttribute('data-tooltip')
    document.body.append(tooltip)

    let coords = target.getBoundingClientRect()
    let left = coords.left
    let top = coords.top
    let tooltipHeight = tooltip.offsetHeight
    if(top < tooltipHeight) {
        tooltip.style.top = top + target.offsetHeight + 5 + 'px';
        tooltip.style.left = (left + target.offsetWidth - tooltip.offsetWidth) / 2 + 'px'
    } else {
        tooltip.style.top = top - tooltip.offsetHeight - 5 + 'px';
        tooltip.style.left = (left + target.offsetWidth - tooltip.offsetWidth) / 2 + 'px'
    }

    return tooltip
}

