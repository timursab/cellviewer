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


rb.addEventListener('click',()=>{
    if(target == -5250)return

    target -= 1000
})
lb.addEventListener('click',()=>{
    if(target == -250)return
    target += 1000
})
addEventListener('keydown',(e)=>{
    if(e.code=='ArrowRight'){
        if(target == -5250)return
        target -= 1000
    }
    if(e.code=='ArrowLeft'){
        if(target == -250)return
        target += 1000
    }
})

let current = target

prevTime = performance.now()
deltaTime = 0

const loop = ()=>{
    const currentTime = performance.now()
    deltaTime = (currentTime - this.prevTime)/1000
    prevTime = currentTime
    requestAnimationFrame(loop)
    current = lerp(current,target,deltaTime*3.5)
    cellCon.style.transform = `translate(${current}px,-50%)`
    descCon.style.transform = `translate(${current}px,275px)`
}
loop()
function lerp(a, b, n) {
    return (1 - n) * a + n * b;
}