function buycar(cb1, cb2, cb3) {
    setTimeout(() => {
        console.log('buy a car')
        cb1(cb2, cb3);
    }, 10000)
}

function planatrip(cb1, cb2){
    setTimeout (() => {
        console.log('lets go to manali')
        cb1(cb2);
    }, 2000)
}

function reachmanali(cb){
    setTimeout(() => {
        console.log('reach manali')
        cb()
    }, 1000)
}

function gotofamousMountain() {
    setTimeout(() => {
        console.log('reach mountain')
    }, 1000)
}

buycar(planatrip, reachmanali, gotofamousMountain)