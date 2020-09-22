const api = {
    key: "0cb669971bb7c1bdd229bb4f79a6476b",
    base: "https://api.openweathermap.org/data/2.5/"
}

document.querySelector('.btn').addEventListener('click', () => {
    const cityName = document.querySelector('.form-control').value;
    fetch(`${api.base}weather?q=${cityName}&appid=${api.key}`)
    .then(res => res.json())
    .then(weather => {
        let icon = getWeatherInfo('.icon');
        icon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;

        let city = getWeatherInfo('.city');
        city.innerText = `${weather.name}, ${weather.sys.country}`;

        let temp = getWeatherInfo('.temp');
        temp.innerText = `${Math.round(weather.main.temp - 273.15)}`;

        let weatherMain = getWeatherInfo('.lead');
        weatherMain.innerText = `${weather.weather[0].main}`;

        
    })
})

const getWeatherInfo = id => {
    return document.querySelector(id);
}