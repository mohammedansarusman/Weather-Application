const API_KEY='609ad3463ab03a2788c6c2dfe2eb6fac'
// const city='thrissur'

// console.log(URL)

const cityName=document.getElementById('search-bar')
const dispCityName=document.getElementById('city-div')
const condition=document.getElementById('weather-cond');
let cName;

function getData(){
    const cName=cityName.value
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${cName}&appid=${API_KEY}`
    
    fetch(URL)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        console.log(data.weather[0].main)
        dispCityName.innerHTML=`<h3>${data.name}</h3>`
        condition.innerHTML=`<h1>${data.weather[0].main}</h1> 
                            <h3>Temperature: ${data.main.temp} </h3>
                            <h3>Max Temperature: ${data.main.temp_max}</h3>
                            <h3>Min Temperature: ${data.main.temp_min}</h3> `

            
    })
    .catch((data)=>{
        condition.innerHTML=`<h1>City not found</h1>`
    })

}


