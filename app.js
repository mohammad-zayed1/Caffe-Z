


    const userName = prompt(" what is your name ?");
    let userGender = prompt(" what is your Gender ?");
    
  
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



