// Get a reference to the DOM element where the button will be rendered
const contentTarget = document.querySelector(".buttons__facilities")

// define the event hub
const eventHub = document.querySelector(".container")



export const renderFacilitiesButton = () => {
    contentTarget.innerHTML = 
        `<button id="displayFacilities">Criminal Facilities</button>`
}

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "displayFacilities") {
        // console.log("facilities button clicked")
        const facilitiesButtonClicked = new CustomEvent("facilitiesClicked")
        eventHub.dispatchEvent(facilitiesButtonClicked)
    }
})

