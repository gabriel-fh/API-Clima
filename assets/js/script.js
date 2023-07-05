// Chave da API
const apiWeatherKey = 'INSIRA_SUA_CHAVE_AQUI';

// Seleçãp dos elementos
const cityInput = document.querySelector('#input-city');
const btnSearch = document.querySelector('.container-input-btn button');
const city = document.querySelector('#city');
const flagImg = document.querySelector('.container-city img');
const temperature = document.querySelector('#temp');
const tempMin = document.querySelector('#temp-min');
const tempMax = document.querySelector('#temp-max');
const feelLike = document.querySelector('#feel-like');
const description = document.querySelector('#desc');
const descImg = document.querySelector('.container-description img');
const humidity = document.querySelector('.humidity span');
const wind = document.querySelector('.wind span');

const containerInfo = document.querySelector('.container-info');
const containerError = document.querySelector('.container-error');

// Funções
const getWeatherData = async function (cityName) {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiWeatherKey}&lang=pt_br`;
    try {
        const rest = await fetch(apiWeatherURL);
        const data = await rest.json();
        if (rest.status !== 200) {
            throw new Error('Não foi possível obter dados meteorológicos')
        }
        return data;
    } catch (err) {
        console.error(err.message);
        throw err; // lançar a exceção novamente para ser capturada no bloco catch da chamada searchTheCity
    }
}

const toggleFunction = function(elementRemove, ElementAdd){
    if(ElementAdd.classList.contains('hide') || !elementRemove.classList.contains('hide')){
        ElementAdd.classList.remove('hide');
        elementRemove.classList.add('hide');
    }
}

const showWeatherData = function(data){
    city.innerText = data.name;
    flagImg.src = `https://flagsapi.com/${data.sys.country}/flat/64.png`;
    temperature.innerText = parseInt(data.main.temp);
    tempMin.innerText = parseInt(data.main.temp_min);
    tempMax.innerText = parseInt(data.main.temp_max);
    feelLike.innerText = parseInt(data.main.feels_like);
    description.innerText = data.weather[0].description;
    descImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    humidity.innerText = data.main.humidity + '%';
    wind.innerText = data.wind.speed + 'Km/h'

    toggleFunction(containerError, containerInfo)
}

const searchTheCity = async function () {
    const cityName = cityInput.value;
    try {
        const data = await getWeatherData(cityName);
        showWeatherData(data)
    } catch (error) {
        toggleFunction(containerInfo, containerError)
    }
}


// Eventos
btnSearch.addEventListener('click', searchTheCity);

cityInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        searchTheCity()
    }
})
