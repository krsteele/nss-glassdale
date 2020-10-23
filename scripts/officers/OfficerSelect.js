import { getOfficers, useOfficers } from "./OfficerDataProvider.js"

const contentTarget = document.querySelector(".filters__officer")

const eventHub = document.querySelector(".container")

export const OfficerSelect = () => {
    getOfficers()
    .then(() => {
    const officers = useOfficers()
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

eventHub.addEventListener("change", changeEvent => {
    // console.log("officer event listener: an event happened")
    if (changeEvent.target.id === "officerSelect") {
        const selectedOfficer = changeEvent.target.value
        // console.log("the officer selected: ", selectedOfficer)

        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})