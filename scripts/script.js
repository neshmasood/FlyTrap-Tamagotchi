// Define all variables
    let name = "input-name";
    let health;
    let waterAmount = 4;
    let foodAmount =4;
    let sunshineAmount = 4;
    let setInterval = 3000;
    let lowestLevel = 4; //lowest level for plant to talk

    // hideImages();
    // waterLow();
    // foodLow();
    // sunshineLow();



function startGame(){
    let name = document.getElementById("input-name").value;
    document.getElementById("input-button").addEventListener("click", PLAY);

}
// Write a function to hide all images

function hideImages() {
    document.getElementById("thirsty").style.visibility = "hidden";
    document.getElementById("hungry").style.visibility = "hidden";
    document.getElementById("sunlight").style.visibility = "hidden";
    document.getElementById("waterDropsImage").style.visibility = "hidden";
    document.getElementById("flyImage").style.visibility = "hidden";
    document.getElementById("sunImage").style.visibility = "hidden";

  }


//   Write a function to reduce value
  function reduceValue(){

    waterAmount = waterAmount - Math.floor(Math.random()*2 +1);

    foodAmount = foodAmount - Math.floor(Math.random()*2 +1);

    sunshineAmount = sunshineAmount - Math.floor(Math.random()*2 +1);
  }

//   Write a function for Low level of waterAmount, foodAmount, sunshineAmount
function waterLow(){
      if(waterAmount <= lowestLevel){
        document.getElementById("thirsty").style.visibility = "visible";  
      }
  }

function foodLow(){
    if(foodAmount <= lowestLevel){
        document.getElementById("hungry").style.visibility = "visible"; 
    }
}
function sunshineLow(){
    if(sunshineAmount <= lowestLevel){
      document.getElementById("sunlight").style.visibility = "visible";  
    }
}



// Write a function to change Plant images based on health value

function changePlantImages(){
    if(waterAmount =0 && (foodAmount = 0) && (sunshineAmout = 0)){
        gameOver();
        document.getElementsById("deadPlant").style.visibility = "visible";
    }else if(waterAmount <=9 || waterAmount == 1){
        document.getElementsById("babyPlant").style.visibility = "visible";
    }
}
 
function changePlantImages(){
    if(waterAmount =0 && (foodAmount = 0) && (sunshineAmout = 0)){
        gameOver();
        document.getElementsById("deadPlant").style.visibility = "visible";
    }else if(waterAmount <=9 || waterAmount == 1){
        document.getElementsById("babyPlant").style.visibility = "visible";
    }
}

function changePlantImages(){
    if(waterAmount =0 && (foodAmount = 0) && (sunshineAmout = 0)){
        gameOver();
        document.getElementsById("deadPlant").style.visibility = "visible";
    }else if(waterAmount <=9 || waterAmount == 1){
        document.getElementsById("babyPlant").style.visibility = "visible";
    }
}


// Write a function for button clicks

// function waterButton(){
//     document.getElementById("drink").addEventListener("click","waterDropsImage");
// }










