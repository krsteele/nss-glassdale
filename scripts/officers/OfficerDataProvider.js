let officers = []

export const useOfficers = () => {
    return officers.slice()
}

export const getOfficers = () => {
    // request the data
    return fetch("https://criminals.glassdale.us/officers")
    // convert the JSON string response to a JavaScript data structure
        .then(response => response.json())
        // do something with the data
        .then(
            parsedOfficers => {
                // console.table(parsedOfficers)
                officers = parsedOfficers
            }
        )
}