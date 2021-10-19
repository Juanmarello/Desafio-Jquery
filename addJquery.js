const productsListJq = [];
let containerJq;
class productsJq  {
    constructor(id , name, description, image, price, stock ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.stock = stock;
    }
}

const producto1Jq = new productsJq(
    '1',
    "Cat Chow Adultos", 
    "Alimento balanceado para gatos x10kg",
     "1.png", 
     2200, 
     true );
     
     
     const producto2Jq = new productsJq(
        '2',
        "Performance Adultos", 
        "Alimento balanceado para perros adultos x22kg",
         "2.png", 
         3500, 
         true );
    
         const producto3Jq = new productsJq(
            '3',
            "Purina Pro Plan Cachorros", 
            "Alimento balanceado para perros cachorros x18kg",
             "3.png", 
             3900, 
             true );     

             productsListJq.push(producto1Jq);
             productsListJq.push(producto2Jq);
             productsListJq.push(producto3Jq);









function renderItemJquery(){
   
    for (const item of productsListJq){
        
        $('#productsContainer').append(`<div class="item">
            
          <div class="itemContainer"> <h2>${item.name}</h2>
            <hr>
                     <p>${item.description}</p>
                    <img src=${item.image}>
                     <h3><b>$ ${item.price}</b></h3>
            
                    <button class="btnAdd" >Añadir al carrito</button>
        </div>
        </div> `)
        
    }

    
   

}

renderItemJquery();