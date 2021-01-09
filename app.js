let container = document.querySelector('.container');
let canvas = document.querySelector('.canvas')
let columnOne = document.querySelector('.one')
let columnTwo = document.querySelector('.two')
let columnThree = document.querySelector('.three')
let columnFour = document.querySelector('.four')


for(let i = 1; i <= 17; i++){
    let imgDiv = document.createElement('div');
    let divImage = document.createElement('img');
    divImage.setAttribute('src', `./images/${i}.jpg`)
    imgDiv.appendChild(divImage);

    if (i < 5){
        columnOne.appendChild(imgDiv);
    }else if (i < 9){
        columnTwo.appendChild(imgDiv);
    }else if (i < 13){
        columnThree.appendChild(imgDiv);
    }else{
        columnFour.appendChild(imgDiv);
    }    
}

container.addEventListener('mousemove', (e) => {
    let x = e.clientX - container.getBoundingClientRect().left;
    let y = e.clientY - container.getBoundingClientRect().top;

    canvas.style.transform = `translate(-${x}px, -${y}px)`
})


