const boxes = document.querySelectorAll('.box');
let click = "X";
const turnElement = ()=>{
    return click === 'X' ? '0' : 'X';
}

Array.from(boxes).forEach(box=>{
    let boxtext = box.querySelector('.boxtext')
    box.addEventListener('click',(e)=>{
        // e.target.innerHTML = "X";
        if(boxtext.innerHTML === ''){
            boxtext.innerHTML= click;
            click = turnElement();
            // e.target.innerHTML = turn

        }

    })
})

// Array.from(boxes).forEach(element=>{
//     let boxtext = element.querySelector('.boxtext');
//     element.addEventListener('click', ()=>{
//         if(boxtext.innerHTML===''){
//             boxtext.innerHTML = click;
//             click = turnElement();
//         }
//     })
// })