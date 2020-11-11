import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"
import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        // console.log(clickEvent)
        // get input values from form inputs
        const dateOfInterview = document.querySelector("#note--dateOfInterview").value
        const timestamp = Date.now()
        // console.log(timestamp)
        const author = document.querySelector("#note--author").value
        const criminalId = document.getElementById("note--suspect").value
        const note = document.querySelector("#note--note").value

        // make note obj with form values
        const newNoteObj = {
            dateOfInterview,
            timestamp,
            author,
            criminalId: parseInt(criminalId),
            note
        }
        // console.log(newNoteObj);
        // save note obj
        saveNote(newNoteObj)
        // clear form inputs
        NoteForm()

    }

})

const render = (criminalArray) => {
    contentTarget.innerHTML = `
        <input type="date" id="note--dateOfInterview"/>
        <input type="text" id="note--author" placeholder="Your name here..."/>
        <select id="note--suspect" class="criminalSelect">
        <option value="0">Please select suspect...</option>
        ${
            criminalArray.map(criminalObj => {
                
                return `<option value="${criminalObj.id}">${criminalObj.name}</option>`
            }).join()
        }
        </select>
        <textarea id="note--note" placeholder="Case notes here..."></textarea>
        <button id="saveNote">Save Note</button>
        `
}
   
export const NoteForm = () => {
    getCriminals()
        .then(() => {
            const criminals = useCriminals()
            render(criminals)
        })
}