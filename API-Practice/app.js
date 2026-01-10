const weatherApi = 'https://api.open-meteo.com/v1/forecast?latitude=14.6&longitude=120.0&current_weather=true'

async function FetchWeatherStatus(url) {
    try {
        const api = new URL(url)
        const request = new Request(api, {
            method: "GET"
        })
        const response = await fetch(request)
        
        if (response.ok) {
            console.log("Fetching the data...")
        }
        if (!response.ok) {
            throw new Error("was not a valid request");
        }
        
        const data = await response.json()
        
        setTimeout(() => {
            console.table(data)
        }, 2000)
        
    } catch (error) {
        console.error(error)
    } 
}

FetchWeatherStatus(weatherApi)