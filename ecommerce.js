document.addEventListener('DOMContentLoaded',()=>{
let decrease=document.querySelector('.minus')
let NoItems=document.querySelector('.no-items')
let increase=document.querySelector('.plus')
let cartIcon=document.querySelector('.cart-icon')
let CartOut=document.querySelector('.output')
let display=document.querySelector('.display')
cartIcon.onclick=function(){
    CartOut.classList.toggle('active');
    display.classList.toggle('active');
}
let AddedTocartNo=document.querySelector('.AddedTocartNo');
let  orgPriceToCalculate=0;
let count=0
increase.addEventListener('click',()=>{
      count+=1
      NoItems.innerHTML=count
      AddedTocartNo.textContent=count;
})
decrease.addEventListener('click',()=>{
    do{
    count-=1
    NoItems.innerHTML=count
    AddedTocartNo.textContent=count;
}
    while
    (count<0) ;
})


let cartBtn=document.querySelector('.cart-button')
cartBtn.addEventListener('click',()=>{
    if(count>0){
        const statement=document.querySelector('.statement')
        statement.remove();

        const cartImg=document.createElement('img');
        cartImg.id='cartImg';
        cartImg.src='images/image-product-1.jpg'; 
        cartImg.style.width='60px'; 
        cartImg.style.height='60px';

        const cartStatement=document.createTextNode('Fall Limited Edition Sneakers');
        cartStatement.id='cartStatement'

        const deleteIcon=document.createElement('img');
        deleteIcon.src='images/ icon-delete.svg'
        deleteIcon.onclick=function(){
            const ALLCartContent=document.querySelector('.cart-all-items');
            ALLCartContent.remove();
            count=0;
            NoItems.innerHTML=count;
            AddedTocartNo.textContent=count;
        }
        
        const checkBtn=document.createElement('button');
        checkBtn.id='checkBtn'
        checkBtn.textContent='CheckOut';
        let orgPrice =document.querySelector('.price')
        if(orgPrice){
            let orgPriceToUse=orgPrice.textContent;
            let orgPriceWithoutDollarSign=orgPriceToUse.replace('$','');
            orgPriceToCalculate=parseFloat(orgPriceWithoutDollarSign)
        }
        let orgPricePosition=document.querySelector('.orgPrice');
        let total=count* orgPriceToCalculate;
        let cartImgPosition=document.querySelector('.cart-img')
        let CartStatementPosition=document.querySelector('.cart-statement')
        let checkout=document.querySelector('.checkout') 
        let deleteIconPosition=document.querySelector('.delete-icon') 

     CartStatementPosition.appendChild(cartStatement)
     cartImgPosition.appendChild(cartImg);
     checkout.appendChild(checkBtn);
     deleteIconPosition.appendChild(deleteIcon);
     orgPricePosition.textContent= '$'+orgPriceToCalculate +'*'+count +'  $'+total;
     console.log( orgPricePosition)
    };
});
});
document.addEventListener('DOMContentLoaded',()=>{
const products=document.querySelectorAll('.product');
const lb=document.querySelector('.lb-left-display');
products.forEach(product=>{
   product.addEventListener('click',()=>{
       lb.classList.add('active');
       
   });

   const exit=document.querySelector('.exit');
   exit.onclick=function(){
    lb.remove();
   }
});
});
document.addEventListener('DOMContentLoaded',()=>{
const controlBtns=document.querySelectorAll("[data-plusSlide]");
controlBtns.forEach(controlBtn=>{
controlBtn.addEventListener('click',()=>{
    const info = controlBtn.dataset.plusSlide === "next" ? -1 : 1;
    const slides=document.querySelector('[data-slides]')
    const activeSlide=slides.querySelector('[data-active]')
    let newIndex=[...slides.children].indexOf(activeSlide)+info
    if(newIndex<0) newIndex=slides.children.length-1
    if(newIndex>=slides.children.length)newIndex=0
    slides.children[newIndex].dataset.active=true
    delete activeSlide.dataset.active
    
    
    const lbThumbnails = document.querySelectorAll("[ThumberNail] .lb-product");
      const activeThumbnail = document.querySelector("[ThumberNail] .lb-product[R-active]");
      let thumbIndex = [...lbThumbnails].indexOf(activeThumbnail);
      thumbIndex = (thumbIndex + info + lbThumbnails.length) % lbThumbnails.length;

      activeThumbnail.removeAttribute("R-active");
      lbThumbnails[thumbIndex].setAttribute("R-active", "");

      activeSlide.removeAttribute("data-active");
      slides.children[slideIndex].setAttribute("data-active", "");
    
});
});
});

const sidebarIcon=document.querySelector('.sidebar-menu-icon');
const sidebar=document.querySelector('.sidebar');

sidebarIcon.addEventListener('click',()=>{
    sidebar.classList.add('active')
})
const closeBtn=document.querySelector('.closebtn')
closeBtn.addEventListener('click',()=>{
    sidebar.classList.remove('active')
})









