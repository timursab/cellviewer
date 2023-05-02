const schema={
    cell:document.getElementById('cell'),
    kernel:document.getElementById('kernel'),
    chromosomes:{
        c1:document.getElementById('c1'),
        c2:document.getElementById('c2'),
        c3:document.getElementById('c3'),
        c4:document.getElementById('c4')
    },
    spindleapparatus:document.getElementById('line-con'),
}
const descCon = document.getElementById('desc-con')
const cellCon = document.getElementById('cell-con')
const rb = document.getElementById('rb')
const lb = document.getElementById('lb')
let target = -250
/* cellCon.style.transform = `translate(${target}px,-50%)` */

/* rb.addEventListener('click',()=>{
    target -= 1000
    console.log(target)
    cellCon.animate({transform: `translate(${target}px,-50%)`},{duration:500,fill:"both"})
    descCon.animate({transform: `translate(${target}px,275px)`},{duration:500,fill:"both"})
})
lb.addEventListener('click',()=>{
    target += 1000
    console.log(target)

    cellCon.animate({transform: `translate(${target}px,-50%)`},{duration:500,fill:"both"})
    descCon.animate({transform: `translate(${target}px,275px)`},{duration:500,fill:"both"})

}) */

rb.addEventListener('click',()=>{
    if(target == -4250)return

    target -= 1000
})
lb.addEventListener('click',()=>{
    if(target == -250)return
    target += 1000
})
addEventListener('keydown',(e)=>{
    if(e.code=='ArrowRight'){
        if(target == -4250)return
        target -= 1000
    }
    if(e.code=='ArrowLeft'){
        if(target == -250)return
        target += 1000
    }
})

let current = target
const loop = ()=>{
    requestAnimationFrame(loop)
    current = lerp(current,target,0.03)
    cellCon.style.transform = `translate(${current}px,-50%)`
    descCon.style.transform = `translate(${current}px,275px)`
}
loop()
function lerp(a, b, n) {
    return (1 - n) * a + n * b;
}