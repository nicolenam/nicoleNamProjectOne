document.addEventListener('DOMContentLoaded', () => {
//codes below run when all the content is loaded first

    //method re-sets the scroll to the top left
    window.scrollTo(0, 0);
    //this is a fix for modal showing anywhere on page after a refresh

    // 1) ADD ITEMS TO SHOPPING BAG
    const bag = document.querySelectorAll('.product__container img');
    const displayNum = document.querySelector('.nav__mobile p');
    let numOfItems = 0;

    //click any bag in Featured sale section to increment number in numOfItems  

        for(let i = 0; i < bag.length; i++){

            //added click event to all the bags
            bag[i].addEventListener('click', function(){

            //for each click event: increment numOfItems
            numOfItems++;

            //append the numOfItems to displayNum
            displayNum.innerHTML = numOfItems;
        
            }); 

        }


    // 2) NEWSLETER SIGN UP MODAL
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.modal');
    const exitTop = document.querySelector('.modal--exit');
    const exitBottom = document.querySelector('.modal--action p');
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    // disable scroll initially for modal + overlay styles  
    window.onload = () =>{
        body.className = 'no-scroll';
    }

    const closeModal = () =>{
        modal.className = 'modal--close';
        overlay.classList.toggle('modal--close');
        body.className = ''; 
        nameInput.value = '';
        emailInput.value = '';
    }

    // call 'closeModal' function when click is detected
    exitTop.addEventListener('click', closeModal);
    exitBottom.addEventListener('click', closeModal);

    form.addEventListener('submit', function(e){
        e.preventDefault();
        closeModal();
    });
    
    
    // 3) HAMBURGER MENU 

    // need a fix::cannot toggle class directly to the <i> **
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


    // 4) PRODUCT POP UP MODAL 
    const gridElement = document.querySelectorAll('.featured__grid a img');

    const popupElement = document.querySelector('.popup');
    const popupExitIcon = document.querySelector('.popup--exit');

    popupExitIcon.addEventListener('click', ()=>{
        popupElement.classList.toggle('modal--close');
        body.classList.toggle('no-scroll');
        overlay.classList.toggle('modal--close');
    })


    for(let i = 0; i < gridElement.length; i++){
        gridElement[i].addEventListener('click', (e)=>{

            createPopup(e.target);
            closePopUp();
            // getPrice(e.target.parentElement.parentElement);
        });
    
    }



    function createPopup(e){
        const imgSrc = e.src;
        const productName = e.alt;
        let productElement = popupElement.querySelector('p');
        let imageElement = popupElement.querySelector('img');

        if(!imageElement && !productElement){
    
            imageElement = document.createElement('img');
            popupElement.appendChild(imageElement);
            productElement = document.createElement('p');
            popupElement.appendChild(productElement);
            
        }
            productElement.innerHTML = productName;
            imageElement.setAttribute('src', imgSrc);
  
    }


    function closePopUp(){
        body.classList.toggle('no-scroll');
        popupElement.classList.toggle('modal--close');
        overlay.classList.toggle('modal--close');
    }
    
    
    // function getPrice(e){
    //     console.log(e);
    //     const price = e.querySelector('.product__price p:last-child').innerHTML;
    //     console.log(price);
    // }

   
    // quantity additional button '+ -'
    // add to cart button 
   


    //5) filter featured section sale new regular 

  







});
  