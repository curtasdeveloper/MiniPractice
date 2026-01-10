async function loading(duration) {
    await setTimeout(() => {
        console.log(".")
    }, duration)
}

async function loadingComplete(duration) {
    await setTimeout(() => {
        console.log("Fetching starts nows")
        fetchData(url)
    }, duration)
}


loading(1000)
loading(2000)
loading(3000)
loadingComplete(4000)

const url = 'https://jsonplaceholder.typicode.com/todos/1'

async function fetchData(url) {
    const getData = await fetch(url)
    const response = await getData.json()
    console.log(response)
}





const usersUrl = 'https://jsonplaceholder.typicode.com/users'
const jokesUrl = 'https://official-joke-api.appspot.com/random_joke'
const weatherApi = 'https://api.open-meteo.com/v1/forecast?latitude=14.6&longitude=120.0&current_weather=true'

async function FetchTodos(url) {
    try {
        const todosUrl = new URL(url)
        const request = await fetch(todosUrl)
        if (request.ok) {
            console.log("Fetching the data...")
        }
        if (!request.ok) throw new Error("was not a valid request");
        const response = await request.json()
        setTimeout(() => {
            console.table(response)
        }, 2000)
    } catch (error) {
        console.error(error)
    } 
}

FetchTodos(url)
FetchTodos(jokesUrl)
FetchTodos(weatherApi)

