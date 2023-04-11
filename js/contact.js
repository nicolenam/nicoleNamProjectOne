document.addEventListener('DOMContentLoaded', () => {

    const hamburgerIcon = document.querySelector('span > .fa-bars').parentElement;
    const closeIcon = document.querySelector('span > .fa-times').parentElement;
    const hamburgerMenu = document.querySelector('.nav__hamburger');

    hamburgerIcon.addEventListener('click', mobileMenuToggle);
    closeIcon.addEventListener('click', mobileMenuToggle);

    function mobileMenuToggle(){
        hamburgerMenu.classList.toggle('show');
        closeIcon.classList.toggle('close-mobile');
        hamburgerIcon.classList.toggle('close-mobile');
    };



      // Accordion style footer

      const plusIcons = document.querySelectorAll('.fa-plus');
      const minusIcons = document.querySelectorAll('.fa-minus');
      const accordionElement = document.querySelectorAll('.accordion');
  
      //when plusIcon is clicked, toggle .contact and .profile and disply minusIcon
  
      const toggleClass = (element, className)=>{
          element.classList.toggle(className);
      }
  
      plusIcons.forEach((plusIcon, index) =>{
         
          plusIcon.addEventListener('click', ()=>{
              
              toggleClass(accordionElement[index], 'accordion');
              toggleClass(minusIcons[index].parentElement, 'show');
              toggleClass(plusIcon.parentElement, 'show');
        
          })
  
      });
  
      minusIcons.forEach((minusIcon, index) =>{
         
          minusIcon.addEventListener('click', ()=>{
              
              toggleClass(accordionElement[index], 'accordion');
              toggleClass(plusIcons[index].parentElement, 'show');
              toggleClass(minusIcon.parentElement, 'show');
        
          })
  
      });
  
  
  
  
  
  

});
