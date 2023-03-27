console.log('hello jiii')

const API_KEY = "229ca1a528355fadda8f901eab58e537";

function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`

    document.body.appendChild(newPara);
}

async function showWeather(){
    // let latitude = 15.3333;
    // let longitude = 74.0833;
    try {

        let city = "goa";
        
        const Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        
        const data = await Response.json();
        console.log("Weather data :-> " , data);
        
        // let newPara = document.createElement('p');
        // newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`
        // document.body.appendChild(newPara);
        renderWeatherInfo(data);
    }   
    catch(err){
        // handle the error here
    } 


}

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

async function getCustomWeatherDetails(){
    try{

        let latitude = 15.3333;
        let longitude = 18.0833;
        
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
        let data = await result.json();
        console.log(data);
        // let newPara = document.createElement('p');
        // newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`
        // document.body.appendChild(newPara);
        renderWeatherInfo(data);
    }
    catch{
        console.log("Error Found", err);
    }
}


function switchTab(){
     
}


function getlocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPostion);
    }
    else{
        console.log("No geoLocation Support")
    }
}

function showPostion(position){
    let lat =position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}

// Read about post man