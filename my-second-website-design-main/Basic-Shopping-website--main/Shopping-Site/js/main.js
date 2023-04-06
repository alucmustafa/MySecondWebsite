const searchIcon=document.querySelector("#search-btn");
const searchBar=document.querySelector("#search-bar");
const buttonAdd=document.querySelectorAll(".btn-1");
const shopingBtn=document.querySelector(".shopping-btn-span");
const form=document.querySelector("#form");

let product_piece=0;
searchIcon.addEventListener("click",()=>{
searchBar.classList.toggle("active");// searh icona tıkladığında gelip gitmesi .
document.addEventListener("click",(e)=>{
    if(!e.composedPath().includes(searchBar)&& !e.composedPath().includes(searchIcon)){
        searchBar.classList.remove("active"); // burada boşluğa tıkladığıda searcbar kapaacak.
    }
});
});

buttonAdd.forEach((button)=>{

    button.addEventListener("click",()=>{// shopping img için event sayının 1 artması ve azalması.
        if(!button.classList.contains("added")){
            button.classList.add("added"); 
            product_piece++;
          button.innerHTML="Sepete eklendi.";
        }
        else{
            button.classList.remove("added");
            product_piece--;
            button.innerHTML="Sepete Ekle";
        }
        if(product_piece>=1) {
                shopingBtn.classList.add("active-1");
                shopingBtn.innerHTML=product_piece;
        }else{
            shopingBtn.classList.remove("active-1");
            shopingBtn.innerHTML=0;
        }
        });      
});


form.addEventListener("submit",(e)=>{
  alert("Mesajınız gönderildi.");
});