let notes = []

export const getNotes = () => {
    return fetch("http://localhost:8088/notes")
    .then(response=>response.json())
    .then(
        parsedNotes => {
            // console.log(parsedNotes)
            notes = parsedNotes
        }
    )
}

export const useNotes = () => notes.slice()
