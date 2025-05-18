var IS_CLICKED = false
var CURRENT_COLOR = 'rgb(0, 0, 0)'
var DEFAULT_COLOR = 'rgb(255, 255, 255)'
var FILL_MODE = false

document.addEventListener('mousedown', function(){
    IS_CLICKED = true
})

document.addEventListener('mouseup', function(){
    IS_CLICKED = false
})

//поле
let setka = document.querySelector('.setka')

for (let i = 0; i < 1800; i+=1) {
    let cell = document.createElement('div')
    cell.classList.add('cell')
    setka.appendChild(cell)
}
//закрашивание клетки
let cells = document.querySelectorAll('.cell')
cells.forEach(cell => {
    cell.addEventListener('mouseover', function(){
        if(IS_CLICKED) {
            anime({
                targets: cell,
                background: CURRENT_COLOR,
                duration: 200,
                easing: 'linear',
            })
        }
    })
})

cells.forEach(cell => {
    cell.addEventListener('mouseover', function(){
        if(IS_CLICKED) {
            anime({
                targets: cell,
                background: CURRENT_COLOR,
                duration: 200,
                easing: 'linear',
            })
        }
    })
})

cells.forEach(cell => {
    cell.addEventListener('mouseover', function(){
        if(IS_CLICKED) {
            if(FILL_MODE) {
                anime({
                    targets: cell,
                    background: CURRENT_COLOR,
                    duration: 200,
                    easing: 'linear',
            })  }
        }
    })
})

let colr_cells = document.querySelectorAll(".color-cell")
colr_cells.forEach(colorrr_cell => {
    colorrr_cell.addEventListener('click', function() {
        CURRENT_COLOR = getComputedStyle(colorrr_cell).backgroundColor;
    })
})
let downloadd = document.querySelector(".download")
downloadd.addEventListener('click', function(){
    domtoimage.toJpeg(document.getElementById('my-node'), { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
})
