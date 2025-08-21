



let Array_img2=['/public/image/19.jpg','/public/image/20.jpg','/public/image/1.jpg','/public/image/2.jpg','/public/image/3.jpg','/public/image/4.jpg','/public/image/5.jpg','/public/image/bg8.jpg','/public/image/bg9.jpg','/public/image/18.jpg'];
let section_bg=document.getElementById('section_bg');

// if(localStorage.getItem('bg-storage')!==null){
//     section_bg.style.backgroundImage=`url(${localStorage.getItem('bg-storage')})`;
// }

setInterval(()=>{

    let random_num=Math.floor(Math.random()*(Array_img2.length-1));

    section_bg.style.backgroundImage=`url(${Array_img2[random_num]})`;
    // localStorage.setItem('bg-storage',Array_img2[random_num]);
},3000)