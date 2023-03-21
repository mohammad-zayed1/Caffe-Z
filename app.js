

   

























    const userName = prompt(" what is your name ?");
    let userGender = prompt(" what is your Gender ?");
    let userAge = prompt(" what is your Age ?");
    
  
    function gender(){
        while(userGender != 'male' && userGender !="female"){
        
            userGender = prompt(" enter the correct gender");
         }
         if(userGender === 'male'){
            alert("Welcome Mr." + userName);
            
        }else if(userGender === 'female'){
            alert("Welcome Ms." + userName);    
        }
    }
    gender();

   
    const userOrderType = prompt("What do you want hot or cold drink ?");
    const userDrinkName = prompt("Plz write the name of your drink ?");
    alert("Your drink is getting prepared ");
    
    let info = [userName , userGender , userOrderType , userDrinkName];
    
    for (let i = 0; i < info.length; i++){
        console.log(info[i]);
    }




    let userInfo = document.getElementById("userInfo");

    let div = document.createElement("div");
    let p = document.createElement("p");
    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");

    p.textContent = `${userName}`;
    li1.textContent=`Gender : ${userGender}`;
    li2.textContent=`Age : ${userAge}`;
    li3.textContent=`Drink : ${userOrderType} ${userDrinkName}`;
     

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    div.appendChild(p);
    div.appendChild(ul);

    userInfo.appendChild(div);
    
    




