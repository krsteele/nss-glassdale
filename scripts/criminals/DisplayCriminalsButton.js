// Get a reference to the DOM element where the button will be rendered
const contentTarget = document.querySelector(".buttons__criminals")

// define the event hub
const eventHub = document.querySelector(".container")



export const renderCriminalsButton = () => {
    contentTarget.innerHTML = 
        `<button id="displayCriminals">Show All Criminals</button>`
}

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "displayCriminals") {
        // console.log("criminals button clicked")
        const criminalsButtonClicked = new CustomEvent("criminalsClicked")
        eventHub.dispatchEvent(criminalsButtonClicked)
    }
})