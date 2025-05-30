tailwind.config = {
    theme: {
      extend: {
          colors:{
       primary:'var(--primary-color,#00a3e1)',

},
fontFamily: {
    'Roboto': ['Roboto','sans-serif'],
  },
      }
    }
  };


// let icon=document.getElementById('icon');
// let lst=document.getElementById('lst');
// icon.addEventListener('click',()=>{
//     lst.classList.toggle('hidden');
// });

let icon_setting=document.getElementById('icon_setting');
let lst_color=document.getElementById('lst_color');

let change_color = document.getElementById('change_color');


icon_setting.addEventListener('click',()=>{
    lst_color.classList.toggle('hidden');
    icon_setting.firstElementChild.classList.toggle('animate-spin');
    change_color.style.animation = '1.1s alternate slidein';
    
});

let color=lst_color.querySelectorAll('li[data-color]');

color.forEach(c=>{
    c.addEventListener('click',(e)=>{
        //  alert(e.target.dataset.color);
        localStorage.setItem('color_storage',e.target.dataset.color);
        document.documentElement.style.setProperty('--primary-color',e.target.dataset.color);
    })
})

if(localStorage.getItem('color_storage')!==null){
    document.documentElement.style.setProperty('--primary-color',localStorage.getItem('color_storage'));

}



