const registrationform=document.querySelector("#registerScreen")
const registrationformKP=document.querySelector("#registerScreenKS")

registrationform.addEventListener("submit",(e)=>{
  e.preventDefault();//form elamanlarının istediğimiz zaman submit olması için....
 const formdata=new FormData(registrationform);
  const data=Object.fromEntries(formdata);

  registrationformKP.addEventListener("submit,",(e)=>{
  e.preventDefault();
  const formdata1=new FormData(registrationformKP);
  const data1=Object.fromEntries(formdata1);
  let dataSum = { ...data, ...data1 };
  console.log(dataSum);
  })
  
})
document.querySelector("#gotoform").addEventListener("click",()=>{

    let isFilled = true;
    for (let i = 0; i < registrationform.elements.length-2; i++) {
      if (registrationform.elements[i].value === '') {
        isFilled = false;
        break;
      }
    }
   if(isFilled){
    registrationform.classList.add("hidden");
    registrationformKP.classList.add("avtive");
   }
   else{
    alert("Parola ve şifre ekranına geçmek için Lütfen  bilgilerinizi eksiksiz doldurunuz..")
   }

})

//İki nesneyi birleştirme
// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };

// let mergedObj = { ...obj1, ...obj2 };

// console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }