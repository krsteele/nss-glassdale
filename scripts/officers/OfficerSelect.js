import { getOfficers, useOfficers } from "./OfficerDataProvider.js"

const contentTarget = document.querySelector(".filters__officer")

const eventHub = document.querySelector(".container")

export const OfficerSelect = () => {
    getOfficers()
    .then(() => {
    const officers = useOfficers()
    console.log(officers)
    render(officers)
    }
    )}

const render = (officerArray) => {
    contentTarget.innerHTML = `
    
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officerArray.map(officerObj => {
                    
                    return `<option value="${officerObj.name}">${officerObj.name}</option>`
                })
            }
        </select>
    `
    
}