const header = document.querySelector('.header'),
   link = document.querySelectorAll('#link'),
   dots = document.querySelectorAll('.quotes__dot');



const burgerMenu = () => {
   header.classList.toggle('open');
}

const activeDot = (n) => {
   for (dot of dots) {
      dot.classList.remove('active');
   }
   dots[n].classList.add('active');
}

burger.addEventListener('click', burgerMenu);

overlay.addEventListener('click', burgerMenu);

link.forEach((item) => {
   item.addEventListener('click', () => {
      if (header.classList.contains('open')) {
         header.classList.remove('open');
      }
   })
})




dots.forEach((item, i) => {
   item.addEventListener('click', () => {
      activeDot(i);
   })
})