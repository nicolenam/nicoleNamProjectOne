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


    // 2) MODAL INTERACTION
    // const body = document.querySelector('body');
    // const overlay = document.querySelector('.overlay');
    // const modal = document.querySelector('.modal');
    // const exitTop = document.querySelector('.modal--exit');
    // const exitBottom = document.querySelector('.modal--action p');
    // const form = document.querySelector('form');
    // const nameInput = document.getElementById('name');
    // const emailInput = document.getElementById('email');

    // //disable scroll initially for modal + overlay styles  
    // window.onload = () =>{
    //     body.className = 'no-scroll';
    // }

    // const closeModal = () =>{
    //     modal.className = 'modal--close';
    //     overlay.className = 'modal--close';
    //     body.className = ''; 
    // }

    // //call 'closeModal' function when click is detected
    // exitTop.addEventListener('click', closeModal);
    // exitBottom.addEventListener('click', closeModal);

    // form.addEventListener('submit', function(e){
    //     e.preventDefault();

    //     if(nameInput.value && emailInput.value){
    //        closeModal();
    //        nameInput.value = '';
    //        emailInput.value = '';
    //     }

    // });
    
    
    // 3) HAMBURGER MENU 

    // detect click on hamburger
    const hamburgerIcon = document.querySelector('.fa-bars');
    const hamburgerMenu = document.querySelector('.nav__hamburger');
    const closeIcon = document.querySelector('.fa-times');

    hamburgerIcon.addEventListener('click', function(){
        // closeIcon.classList.toggle('close-mobile');
        hamburgerMenu.classList.toggle('show');
    } );




    


  







});
  