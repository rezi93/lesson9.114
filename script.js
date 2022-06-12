 let data = [
     {
         id:1,
         imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
         title:'title 1'
     },
     {
        id:2,
        imageurl:'https://media.gettyimages.com/photos/tokyo-japan-high-speed-train-tunnel-motion-blur-abstract-picture-id1195455865?s=612x612',
        title:'title 2'
     },
     {
        id:3,
        imageurl: 'https://media.gettyimages.com/photos/road-tunnel-picture-id109724964?s=612x612',
        title:'title 3'
     },
     {
        id:4,
        imageurl:'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg',
        title:'title 4'
     },
     {
        id:5,
        imageurl:'https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560?k=20&m=1140180560&s=612x612&w=0&h=X_400OQDFQGqccORnKt2PHYvTZ3dBLeEnCH_hRiUQrY=',
        title:'title 5'
     },
     {
        id:6,
        imageurl:'https://blog-fr.orson.io/wp-content/uploads/2017/06/jpeg-ou-png.jpg',
        title:'title 6'
     }
 ]

let arrowleft = document.querySelector('.arrow-left');
let arrowright = document.querySelector('.arrow-right');
let slider = document.getElementById('slider');

 let sliderindex = 0;
 function createAtag(item){
    let tag= document.createElement('a');
    tag.setAttribute('href', item.url);
    tag.classList.add('addres');
    return tag;
 }

function createImgtag(item){
    let tagImage =document.createElement('div');
    tagImage.style.backgroundImage=`url(${item.imageurl})`;
    tagImage.classList.add('slide-bg');
    return tagImage;
}

function createH2tag(item){
    let tagtitle =document.createElement('h2');
    tagtitle .textContent = item.title;
    tagtitle.classList.add('slider-title');
    return tagtitle;
}
function createdots(item){
    let dots=document.createElement('div');
    dots.classList.add('dots-block');
    data.forEach((x) => {
        let dot=document.createElement('div');
        dot.classList.add('dot-box');
        dot.setAttribute('data-id', x.id -1);
        dot. onclick=function(event){
            let Id=event.target.getAttribute('data-id');
            sliderindex=id;
            setslide();
        }
        dots.appendChild(dot);
        
    })
    return dots;
}
function setslide(){
    slider.innerHTML='';
    let tag = createAtag(data[sliderindex]);
    let imgtag =createImgtag(data[sliderindex]);
    let H2tag = createH2tag(data[sliderindex]);
    let dots = createdots(data[sliderindex]);
    tag.appendChild(imgtag);
    tag.appendChild(H2tag);
    slider.appendChild(tag);
    slider.appendChild(dots);
    console.log(tag);
}
function arrowleftclick(){

    if(sliderindex==0){
        return;
    }
    sliderindex--;
    setslide();
}
function arrowrightclick(){
    if(sliderindex== data.length-1){
        return;
    }
    
    sliderindex++;
    setslide();if(sliderindex== data.length-1){
        return;
    }
    
    sliderindex++;
    setslide();

}

arrowleft.addEventListener('click', arrowleftclick);
arrowright.addEventListener('click', arrowrightclick);

setInterval(() =>{
    arrowrightclick();
}, 3000 );


setslide();
