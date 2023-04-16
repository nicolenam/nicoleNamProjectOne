import app from './firebaseConfig.js';
import { getDatabase, ref, push, onValue, get } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js"


const database = getDatabase(app);
const dbRef = ref(database);
const productRef = ref(database, '/products');


// onValue(productRef, (data)=>{

// console.log(data.val());

// });

get(productRef).then((data)=>{

    const products = data.val();

    for(let product in products){
        console.log(product);
    }

})











document.addEventListener('DOMContentLoaded', () => {
//codes below run when all the content is loaded first

    //method re-sets the scroll to the top left
    window.scrollTo(0, 0);
    //this is a fix for modal showing anywhere on page after a refresh

    // 1) ADD ITEMS TO SHOPPING BAG
    const bag = document.querySelectorAll('.product__container img');
    const displayNum = document.querySelector('.nav__mobile p');
    let numOfItems = 0;
    let addNumber = 0;

    //click any bag in Featured sale section to increment number in numOfItems  

        for(let i = 0; i < bag.length; i++){

            //added click event to all the bags
            bag[i].addEventListener('click', function(){
                console.log(addNumber);

            //for each click event: increment numOfItems
            numOfItems++;
            const totalNumber = numOfItems + addNumber;

            //append the numOfItems to displayNum
            displayNum.innerHTML = totalNumber;
        
            }); 

        }


    // 2) NEWSLETER SIGN UP MODAL
    // const body = document.querySelector('body');
    // const overlay = document.querySelector('.overlay');
    // const modal = document.querySelector('.modal');
    // const exitTop = document.querySelector('.modal--exit');
    // const exitBottom = document.querySelector('.modal--action p');
    // const form = document.querySelector('form');
    // const nameInput = document.getElementById('name');
    // const emailInput = document.getElementById('email');

    // // disable scroll initially for modal + overlay styles  
    // window.onload = () =>{
    //     body.className = 'no-scroll';
    // }

    // const closeModal = () =>{
    //     modal.className = 'modal--close';
    //     overlay.classList.toggle('modal--close');
    //     body.className = ''; 
    //     nameInput.value = '';
    //     emailInput.value = '';
    // }

    // // call 'closeModal' function when click is detected
    // exitTop.addEventListener('click', closeModal);
    // exitBottom.addEventListener('click', closeModal);

    // form.addEventListener('submit', function(e){
    //     e.preventDefault();
    //     closeModal();
    // });
    
    
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

    for(let i = 0; i < gridElement.length; i++){

        gridElement[i].addEventListener('click', (e)=>{
            createPopup(e.target, e.target.parentElement.parentElement);
            closePopUp();
        });
    
    }

    function createPopup(e, price){
        const imgSrc = e.src;
        const productName = e.alt;
        let productElement = popupElement.querySelector('.popup-product');
        let imageElement = popupElement.querySelector('img');
        let priceElement = popupElement.querySelector('.price');

        if(!imageElement && !productElement && !priceElement){
    
            imageElement = document.createElement('img');
            popupElement.appendChild(imageElement);
            
            productElement = document.createElement('p');
            productElement.classList.add('popup-product');
            popupElement.appendChild(productElement);
            
            priceElement = document.createElement('p');
            priceElement.classList.add('price');
            popupElement.appendChild(priceElement);
            
        };
        
        productElement.innerHTML = productName;
        imageElement.setAttribute('src', imgSrc);
        priceElement.innerHTML = `<span>Price</span> </br> ${price.querySelector('.product__price p:last-child').innerHTML}`;

        
    }

    //Adding product to shopping bag using pop up modal
    
    const addProduct = document.querySelector('.add');
    const subtractProduct = document.querySelector('.subtract');
    const addToCartdisplay = document.querySelector('.addToCart');
    const addToCartBtn = document.querySelector('.addCartBtn');
    let displayNumber = 0;
    addToCartdisplay.innerHTML = displayNumber;

    addProduct.addEventListener('click', ()=>{
        addNumber++;
        displayNumber++;
        cartNumDisplay();
    });

    subtractProduct.addEventListener('click', ()=>{
        if(addNumber && displayNumber){
            addNumber--;
            displayNumber--;
            cartNumDisplay();
        };
    });
    
    function cartNumDisplay(){
        addToCartdisplay.innerHTML = displayNumber;
    };

    function closePopUp(){
        body.classList.toggle('no-scroll');
        popupElement.classList.toggle('modal--close');
        overlay.classList.toggle('modal--close')

    }

    addToCartBtn.addEventListener('click', ()=>{
        displayNum.innerHTML = addNumber + numOfItems;
        submitItem();
    });

    function submitItem(){
        displayNumber = 0;
        addToCartdisplay.innerHTML = displayNumber;
    }

    popupExitIcon.addEventListener('click', ()=>{
        popupElement.classList.toggle('modal--close');
        body.classList.toggle('no-scroll');
        overlay.classList.toggle('modal--close');
        addNumber = addNumber-displayNumber;
        displayNumber = 0;
        addToCartdisplay.innerHTML = displayNumber;
    });


    //5) Accordion style footer

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
  