document.addEventListener('DOMContentLoaded', () => {

    //selected elements 
    const bag = document.querySelectorAll('.product__container img');
    let numOfItems = 0;
    const displayNum = document.querySelector('.nav__mobile p');

    //displays nodeList in an array
    console.log(bag);

    console.log(displayNum);


    // 1. when I click on all the bags I want to add numbers to increment numbers in the numOfItems.

    for(let i = 0; i < bag.length; i++){

        //added the click event to all the bags.
        bag[i].addEventListener('click', function(){
            console.log('clicked');

        //for each event I want to increment numOfItems
        numOfItems++;
        console.log(numOfItems);

        //I want to append the numOfItems to displayNum
        displayNum.innerHTML = numOfItems;
        
        }); 

        


    }


  







});
  