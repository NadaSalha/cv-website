



let Array_img2=['../image/19.jpg','../image/20.jpg','../image/1.jpg','../image/2.jpg','../image/3.jpg','../image/4.jpg','../image/5.jpg','../image/bg8.jpg','../image/bg9.jpg','../image/18.jpg'];
let section_bg=document.getElementById('section_bg');

// if(localStorage.getItem('bg-storage')!==null){
//     section_bg.style.backgroundImage=`url(${localStorage.getItem('bg-storage')})`;
// }

setInterval(()=>{

    let random_num=Math.floor(Math.random()*(Array_img2.length-1));

    section_bg.style.backgroundImage=`url(${Array_img2[random_num]})`;
    // localStorage.setItem('bg-storage',Array_img2[random_num]);
},3000)