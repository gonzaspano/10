let scrollTop
let scrollElement
let screenWidth

function knowScrollTop() {
    scrollTop = $(document).scrollTop()
    //console.log(scrollTop)
}

function appearLines() {
    if (scrollTop >= 5600) {
        $(".redLine").css({
            "height": "1500px",
            "transition": "3s"
        })
        $(".blueLine").css({
            "height": "1500px",
            "transition": "3s"
        })
    }
}


$(document).ready(function () {
    $(document).scroll(function (event) {
        knowScrollTop()
        appearLines()
    })
    
})