let html = document.documentElement

function checkVisibility(elem) {
    let elemToTop = elem.getBoundingClientRect().top + pageYOffset
    let visibleArea = pageYOffset + html.clientHeight

    return elemToTop < visibleArea && elemToTop > pageYOffset ? true : false
}

function checkOurImg() {
    for(let img of img_s) {
        if(checkVisibility(img)) {
            img.setAttribute('src',img.dataset.src)
        }
    } 
}

let img_s = document.querySelectorAll('img[data-src]')

checkOurImg()
window.addEventListener('scroll',function(event) {
    checkOurImg()
})