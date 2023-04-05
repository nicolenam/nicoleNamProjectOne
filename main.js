document.addEventListener('DOMContentLoaded', () => {

    window.onload = () =>{
        document.querySelector('body').className = 'no-scroll';
    }

    // 1) SELECTED ELEMENTS FOR SHOPPING BAG
    const bag = document.querySelectorAll('.product__container img');
    let numOfItems = 0;
    const displayNum = document.querySelector('.nav__mobile p');

    //displays nodeList in an array
    // console.log(bag);

    // console.log(displayNum);


        //when I click on all the bags I want to increment numbers in the numOfItems.

        for(let i = 0; i < bag.length; i++){

        //added the click event to all the bags.
            bag[i].addEventListener('click', function(){

        //for each click event I want to increment numOfItems
            numOfItems++;

        //I want to append the numOfItems to displayNum
        displayNum.innerHTML = numOfItems;
        
        }); 

    }



    // 2)SELECTED ELEMENTS FOR MODAL INTERACTION
    const exitTop = document.querySelector('.modal--exit');
    const exitBottom = document.querySelector('.modal--action p');

    console.log(exitTop);
    console.log(exitBottom);

        //add a click event listener to the selected items
        exitTop.addEventListener('click', function(){
            console.log('do something');
        })

        exitBottom.addEventListener('click', function(){
            console.log('do something again');
        })


    


  







});
  