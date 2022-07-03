// let movies = {
//     {
//         name: "falcon and the winter soldier",
//         des: "jnjbjbjb",
//         image: "images/slider 2.png"
//     },
//     {
//         name: "loki",
//         des: "jnjbjbjb",
//         image: "images/slider 1.png"
//     },
//     {
//         name: "wanda vision",
//         des: "jnjbjbjb",
//         image: "images/slider 3.png"
//     } ,
//     {
//         name: "raya the last dragon",
//         des: "jnjbjbjb",
//         image: "images/slider 4.png"
//     } ,
//     {
//         name: "luca",
//         des: "jnjbjbjb",
//         image: "images/slider 5.png"
//     }
// };

const caraousel = document.querySelector('.caraousel');
let sliders = [];

let sliderindex = 0;
const createslide = () =>{
    if(sliderindex >= movies.length){
        slideindex =0;
    }

    let slide = document.createElement('div');
    let imgElements = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    imgElements.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideindex].name));
    p.appendChild(document.createTextNode(movies[slideindex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElemnt);
    caraousel.appendChild(child);

    imgElement.src = movies[slideindex].image;
    slideindex++;

    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    if(slide.length){
        sliders[0].style.marginLeft = calc(-${100*(sliders.length-2)}%-${30*(sliders.length-2)}px);
    }
}

for(let i=0;i<3;i++){
    createslide();
}

setInterval=>{
    createslide();
},3000);

const videocards = [...document.querySelectorAll('.video-card')];

videocards.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        let video = item.children[1];
        video.play();
    });
    item.addEventListener('mouseleave',()=>{
        let video = item.children[1];
        video.pause();
    });
}); 

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxtBtns')];

cardContainers.forEach((itens,i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let conatinWidth = containerDimensions.width;

    nxtbtns[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth- 200;
    })

    preBtns[i].addEventListener('click', ()=>{
        item.scrollLeft -= containWidth + 200;
    })
})