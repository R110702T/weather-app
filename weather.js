let key="";   //my api key for authentication
let url="https://api.openweathermap.org/data/2.5/weather?units=metric";

let h2=document.querySelector("h2")

let weather_icon=document.querySelector(".weather-icon");

let fetch_weather=async (city)=>{

 clearWeatherdetail();    //clear initial data

try{     //handle the response
  
    let data=await fetch(url+"&appid=${key}"+"&q="+city);   //&appid=key..&q=city....it is fetch the url

    if(!data.ok)   //  check if the api request was successful .. if true status code range is 200-299... otherwise false means 404, 500
    {
      throw new error ("city not found")
    }

    let jsonData=await data.json();   //convert response to json

    console.log(jsonData)   //it is a promise ..of the parse json
    
    
    //full data retrieve
    let name=jsonData.name;
    if(name)
    {
        //display city name and weather details
        document.querySelector("h1").innerText=name;
        document.querySelector(".temperature").innerText=`Temparature:${jsonData.main.temp} c`
        
        document.querySelector(".humidity").innerText=`Humidity:${jsonData.main.humidity}%`;
        document.querySelector(".wind").innerText=`wind speed:${jsonData.wind.speed}km/hr`;
        document.querySelector(".min-temp").innerText=`minimum temparature:${jsonData.main.temp_min} c`;
       // document.querySelector(".max-temp").innerText=`maximum temparature:${jsonData.main.temp_max}degree c`;


        let weather=jsonData.weather[0].main;
          if(weather==="Clouds")
          {
            weather_icon.src="./clody.webp";
             h2.innerText="cloudy"

          }
          else if(weather==="Rain")
          {
            weather_icon.src="./rain.jpg"
             h2.innerText="rain"
          }
          else if (weather === "Haze")
         {
            weather_icon.src = "./haze.jpg";
            h2.innerText="haze"
          } 
          else if (weather === "Drizzle")
         {
            weather_icon.src = "./drizzle.png";
             h2.innerText="drizzle"
          } 
          else if (weather === "Mist") 
          {
            weather_icon.src = "./mist.jpg";
             h2.innerText="mist"
            
          } 
          else{
            weather_icon.src="./sunn.jpg"
             h2.innerText="sunny"
          }


    }
}
    catch(error){
        //display error msg
        document.querySelector("h1").innerText="city not found";
        }
    }
    //end of the fetchweather fn





const clearWeatherdetail=()=>{    //clear fn create

    document.querySelector("h1").innerText="";
    document.querySelector(".temperature").innerText="";
    document.querySelector(".weather-icon").src="";
   document.querySelector(".humidity").innerText="";
    document.querySelector(".wind").innerText="";
    document.querySelector(".min-temp").innerText="";
     //document.querySelector(".max-temp").innerText="";
 }


fetch_weather("chennai");    //call the fetch_weather fn and initially input is chennai always


let btn=document.querySelector("button")  //target button

btn.addEventListener("click",()=>{   //event add

    let input=document.querySelector("input").value;  //take  input value  from user
    fetch_weather(input);

})










