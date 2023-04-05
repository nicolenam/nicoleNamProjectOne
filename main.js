document.addEventListener('DOMContentLoaded', () => {
//codes below run when all the content is loaded first

    // 1) SELECTED ELEMENTS FOR SHOPPING BAG
    const bag = document.querySelectorAll('.product__container img');
    const displayNum = document.querySelector('.nav__mobile p');
    let numOfItems = 0;

    //displays nodeList in an array
    console.log(bag);

    //when I click on all the bags I want to increment number in the numOfItems.

        for(let i = 0; i < bag.length; i++){

            //added the click event to all the bags.
            bag[i].addEventListener('click', function(){

            //for each click event I want to increment numOfItems.
            numOfItems++;

            //I want to append the numOfItems to displayNum.
            displayNum.innerHTML = numOfItems;
        
            }); 

        }

  

    // 2)SELECTED ELEMENTS FOR MODAL INTERACTION
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.modal');
    const exitTop = document.querySelector('.modal--exit');
    const exitBottom = document.querySelector('.modal--action p');
    const submitSignUp = document.querySelector('.modal--action button');


    // I want to disable scroll initially for modal + overlay styles.  
    window.onload = () =>{
        body.className = 'no-scroll';
    }

    const closeModal = () =>{
        //close modal and remove overlay by adding 'modal--close' class
        modal.className = 'modal--close';
        overlay.className = 'modal--close';
        //remove the class 'no-scroll'
        body.className = ''; 
    }

    //call function when click is detected.
    exitTop.addEventListener('click', closeModal);
    exitBottom.addEventListener('click', closeModal);
    submitSignUp.addEventListener('click', closeModal);
    
    


    


  







});
  