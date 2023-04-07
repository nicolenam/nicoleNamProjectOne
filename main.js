document.addEventListener('DOMContentLoaded', () => {
//codes below run when all the content is loaded first

    //method re-sets the scroll to the top left
    window.scrollTo(0, 0);
    //this is a fix for modal showing anywhere on page after a refresh

    // 1) ADD ITEMS TO SHOPPING BAG --might not need for loop if i select the parent ...but it is not inside a tag like ul... think about. it later

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


    // 2) MODAL INTERACTION
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
        overlay.className = 'modal--close';
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

    // detect click on hamburger
    // cannot toggle class directly to the <i> **
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


    // 4) I want to work on pop up modal for each product item next

    //when i click on the image of the product i want pop up 

    //first, add the event listener to the image clicked in the grid. 

    const gridElement = document.querySelector('.featured__grid');
    const popupElement = document.querySelector('.popup');
    //create elements in here.


    gridElement.addEventListener('click', (e)=>{

        getPrice(e.target.parentElement.parentElement);


        const imgSrc = e.target.src;
        const productName = e.target.alt;
        const imageElement = document.createElement('img');
        const productElement = document.createElement('p');

        imageElement.setAttribute('src', imgSrc);
        console.log(imageElement);

        popupElement.appendChild(imageElement);
  
    });

    function getPrice(e){
        console.log(e);
        const price = e.querySelector('.product__price p:last-child').innerHTML;
        console.log(price);
    }
    


  
    // quantity additional button '+ -'
    // add to cart button 
   


  







});
  