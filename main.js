//初始化
$('.images>img:nth-child(1)').addClass('current')
    .siblings().addClass('enter')

let n = 1
let size = $('.images>img').length
//自动无缝轮播
setInterval(() => {
    $('.images>img:nth-child(' + nLoop(n, size) + ')').removeClass('current').addClass('leave')
        .one('transitionend', (xxx) => {
            $(xxx.currentTarget).removeClass('leave').addClass('enter')
        })
    $('.images>img:nth-child(' + nLoop(n + 1, size) + ')').removeClass('enter').addClass('current')
    n += 1
}, 2000);

//取n～size的循环数
function nLoop(n, size) {
    if (n > size) {
        n = n % size
        if (n == 0) {
            n = size
        }
    }
    return n
}