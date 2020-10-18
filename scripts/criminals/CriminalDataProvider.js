let criminals = []

// if you have a single-line fat arrow function, the return is implicit
export const useCriminals = () => criminals.slice()
      
export const getCriminals = () => {
    // Load database state into application state with a fetch().
    // Make sure the last then() updates the criminals array
    return fetch("https://criminals.glassdale.us/criminals")
    .then(response => response.json())
    .then(
        parsedCriminals => { 
            console.log(parsedCriminals)
            criminals = parsedCriminals
        }
    )
}