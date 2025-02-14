//let bagItems
onLoad();

function onLoad(){
 let bagItemsStr = localStorage.getItem('bagItems');
 bagItems = bagItemsStr ? JSON.parse(bagItemsStr) :[] ;
displayItemsOnHomePage();
displayBagIcon();
};


function addToBag(itemsId) {
    bagItems.push(itemsId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();
};

function displayBagIcon() {
    let bagitemCountElement = document.querySelector
    ('.bag-item-count');
    if(bagItems.length > 0) {

    bagitemCountElement.visibility ='visible';
    bagitemCountElement.innerText = bagItems.length;
    } 
    else if (bagItems.length== null||undefined) {
        bagitemCountElement.style.visibility ='hidden';
    }
};




function displayItemsOnHomePage(){
let itemsContainerElement = document.querySelector('.items-container');
if(!itemsContainerElement){
    return;
}


  let innerHtml= '' ;
  items.forEach(items => {

    innerHtml  +=  `
    <div class="item-container">
                <img class="item-image"
                src="${items.image}" alt="item-image">
                <div class="rating">
                ${items.rating.stars} ☆ | ${
                    items.rating.count
                }
            </div>
            <div class="company-name">${items.company}</div>
            <div class="item-name">${items.item_name}</div>
            
            <div class="price">
                <span class="current-price">${items.current_price}</span>
                <span class="original-price">${items.original_price}</span>
                <span class="discount">${items.discount_percentage}</span>
            </div>
            <button class="btn-add-bag" onclick="addToBag(${items.id})">Add to Bag</button>
    </div>`;
   
  });
  itemsContainerElement.innerHTML =innerHtml;

};











