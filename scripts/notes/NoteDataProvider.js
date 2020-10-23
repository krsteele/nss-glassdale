const eventHub = document.querySelector(".container")

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

export const saveNote = (noteObj) => {
    return fetch("http://localhost:8088/notes", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify(noteObj)
    })
    .then(getNotes())
    .then(dispatchStateChangeEvent)
}


const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")
    eventHub.dispatchEvent(noteStateChangedEvent)
    // console.log("note state change dispatched")
}