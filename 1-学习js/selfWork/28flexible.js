(function flexible(window, document) {
    var docEl = document.documentElement
    var dpr = window.devicePixelRatio || 1
    //dpr是物理像素比根据客户端而变化

    //设置字体大小
    function setBodyFontSize() {
        //如果页面中由body
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'//让字体根据客户端变化
        } else {

            document.addEventListener('DOMContentLoaded', setBodyFontSize)//如果页面中没有body元素那么等到页面标签加载完后再设置字体大小
        }
    }
    setBodyFontSize();

    //设置html元素大小    set 1rem = viewWidth / 10
    function setRemUnit() {
        var rem = docEl.clientWidth / 10
        docEl.style.fontSize = rem + 'px'
    }


    
    setRemUnit()
    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit)//页面尺寸变化时重新设置大小
    window.addEventListener('pageshow', function(e) {//pageshow页面重新加载时触发事件
        if (e.persisted) {//如果这个页面从缓存中取出也要重新计算rem大小
            setRemUnit()
        }
    })

    // detect 0.5px supports//有些移动端的浏览器不支持0.5像素的写法
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))