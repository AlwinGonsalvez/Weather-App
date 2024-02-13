const API_KEY=`0c3d4f0c905fae2dadedecbe8bb9f3fd`
const form = document.querySelector("form")
const search = document.querySelector(".search")
const weather = document.querySelector("#weather")

// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL =`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const getWeather = async(city) => {
    weather.innerHTML= `<h2>Loading...</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const res = await fetch(url)
    const data = await res.json()
    return showWeather(data);
}
const showWeather = (data) => {
    if(data.cod == "404"){
        weather.innerHTML= `<h2>City not found</h2>`
    };

    weather.innerHTML= `
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
        <h2>${data.main.temp} &#8451;</h2>
        <h4>${data.weather[0].main}</h4>
    </div>
    `
}

form.addEventListener(
    'submit', 
    function(e) {
        
        getWeather(search.value);
        e.preventDefault()
    }
)