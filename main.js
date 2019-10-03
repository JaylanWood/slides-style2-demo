let n
let size = $('.images>img').length
initN(1)

//自动无缝轮播
let timer = setInterval(() => {
    makeLeave(getImg(n))
        .one('transitionend', (xxx) => {
            makeEnter($(xxx.currentTarget))
        })
    makeCurrent(getImg(n + 1))
    n += 1
}, 2000);

//修复轮播鬼畜bug
$(document).on('visibilitychange', function () {
    if (document.hidden) {
        window.clearInterval(timer)
    } else {
        timer = setInterval(() => {
            makeLeave(getImg(n))
                .one('transitionend', (xxx) => {
                    makeEnter($(xxx.currentTarget))
                })
            makeCurrent(getImg(n + 1))
            n += 1
        }, 2000);
    }
});

//封装函数
//初始化
function initN(startIndex) {
    n = startIndex
    $('.images>img:nth-child(' + n + ')').addClass('current')
        .siblings().addClass('enter')

}
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
//获取img
function getImg(n) {
    return $('.images>img:nth-child(' + nLoop(n, size) + ')')
}
//切换状态
function makeCurrent($node) {
    return $node.removeClass('enter leave').addClass('current')
}

function makeLeave($node) {
    return $node.removeClass('enter current').addClass('leave')
}

function makeEnter($node) {
    return $node.removeClass('current leave').addClass('enter')
}