function runOnKeys(func,...codes) {
    let pressKeys = new Set();
    document.addEventListener('keydown',function(event) {
        pressKeys.add(event.code)
        for(let code of codes) {
            if(!pressKeys.has(code)) return
        }
        pressKeys.clear()
        func()
    })

    document.addEventListener('keyup',function(event) {
        pressKeys.delete(event.code)
    })

}

runOnKeys(()=> {alert('fine')},'KeyT','KeyR')