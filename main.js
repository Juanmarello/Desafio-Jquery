
let cartCounter;
let cartSubtotal;
let total;

           
            cartCounter = document.getElementById('cartCounter');
            cartCounter.textContent = "$0,00";

const productsList = [];

class products  {
    constructor(id , name, description, image, price, stock ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.stock = stock;
    }
}

const producto1 = new products(
    '1',
    "Cat Chow Adultos", 
    "Alimento balanceado para gatos x10kg",
     "1.png", 
     2200, 
     true );
     
     
     const producto2 = new products(
        '2',
        "Performance Adultos", 
        "Alimento balanceado para perros adultos x22kg",
         "2.png", 
         3500, 
         true );
    
         const producto3 = new products(
            '3',
            "Purina Pro Plan Cachorros", 
            "Alimento balanceado para perros cachorros x18kg",
             "3.png", 
             3900, 
             true );     

             productsList.push(producto1);
             productsList.push(producto2);
             productsList.push(producto3);





    function renderItems(){

        let cartSubtotal = 0;

        for (const item of productsList)  {
            let productsContainer = document.getElementById('productsContainer');
            productsContainer.classList.add('item');
           
            let itemContainer = document.createElement('div');
            itemContainer.classList.add('itemContainer');
           
            let wish = document.createElement('img');
            wish.setAttribute("src", "1.png");
            itemContainer.appendChild(wish);
            
            itemContainer.innerHTML = `<h2> ${item.name}</h2>
                                        <div class="wishDiv" id="wishDiv"></div>
                                       <hr>
                                        <p>${item.description}</p>
                                        <img src=${item.image}>
                                        <h3><b>$ ${item.price}</b></h3>
                                       
            `
            
            let btnAdd = document.createElement('button');
            btnAdd.classList.add('btnAdd');
            btnAdd.textContent = "Añadir al carrito";
            itemContainer.appendChild(btnAdd);
            productsContainer.appendChild(itemContainer);
            btnAdd.addEventListener('click', addToCart);
            
            let wishConatiner = document.createElement('div');
            wishConatiner.classList.add('wishConatiner');
            itemContainer.appendChild(wishConatiner)

            let btnWish = document.createElement('button');
            btnWish.classList.add('btnWish');
            btnWish.textContent = "WishList";
            btnWish.addEventListener('click', addToWishList);
            wishConatiner.appendChild(btnWish);

    
            
            function addToWishList(){
                
                localStorage.setItem(item.name, true);
                localStorage.setItem('Nombre', item.name)
                localStorage.setItem('Precio', item.price);
                localStorage.setItem('Descripción', item.description);
                localStorage.setItem('stock', item.stock)
                btnWish.classList.toggle('selectFav');
                btnWish.addEventListener('click', removeWish);
                btnWish.textContent = "WishList";

              
                

}
            function removeWish() {
                localStorage.removeItem(item.name);
                 btnWish.classList.add('btnWish');
                 btnWish.addEventListener('click', addToWishList);  
                 
                 
    
              }
                  
                  
function addToCart (){
                let totalCart = [];
               
                cartCounter = document.getElementById('cartCounter');
                
                let productName = item.name;
                let priceProduct = item.price;
               
                cartSubtotal += item.price;
                totalCart.push(cartSubtotal);
                
                total = totalCart.reduce((a, b)=> a + b, 0);
                cartCounter.classList.add('cartCounter');
                cartCounter.textContent = "$" + total;

                localStorage.setItem("Nombre", productName);
                localStorage.setItem("Precio", priceProduct);
                
                console.log(cartSubtotal);
                console.log(totalCart);

                
            }  
}


           
            
             
            

};
 

    
           
    

    renderItems();
        
              
        
     
    

