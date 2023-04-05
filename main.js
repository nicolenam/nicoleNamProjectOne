document.addEventListener('DOMContentLoaded', () => {
//codes below run when all the content is loaded first

    // 1) ADD ITEMS TO SHOPPING BAG
    const bag = document.querySelectorAll('.product__container img');
    const displayNum = document.querySelector('.nav__mobile p');
    let numOfItems = 0;

    //displays nodeList in an array
    console.log(bag);

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
    const submitSignUp = document.querySelector('.modal--action button');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    
    console.log(nameInput.value);
    console.log(emailInput.value);


    //disable scroll initially for modal + overlay styles  
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

    //call 'closeModal' function when click is detected
    exitTop.addEventListener('click', closeModal);
    exitBottom.addEventListener('click', closeModal);

    submitSignUp.addEventListener('click', function(e){
        
        if(nameInput.value && emailInput.value){
           closeModal();
           //prevents default submit behavior: reload
           e.preventDefault();
           //clear input value 
           nameInput.value = '';
           emailInput.value = '';
        }

    });
    
    


    


  







});
  