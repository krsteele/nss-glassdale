import { useCriminals } from "../criminals/CriminalDataProvider.js"
import { useCriminalFacilities } from "./CriminalFacilityProvider.js"
import { renderFacilitiesButton } from "./DisplayFacilitiesButton.js"
import { useFacilities } from "./FacilityProvider.js"



const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".caseDataContainer")

eventHub.addEventListener("facilitiesClicked", () => {
    // console.log("I heard the custom event facilitiesClicked")
    FacilitiesList()
})

const FacilitiesList = () => {
    const facilities = useFacilities()
    const criminalFacilityRelationships = useCriminalFacilities()
    const criminals = useCriminals()

    // console.log("arrays for FacilitiesList: ", facilities, criminalFacilityRelationships, criminals)
    render(facilities, criminalFacilityRelationships, criminals)
}

const render = (facilities, relationships, criminals) => {
    facilitiesHTMLRepresentations = facilities.map(facObj => {
        const facilityCriminalRelationship = relationships.filter(rel => rel.facilityId === facObj.id)

        const relatedCriminalsArray = facilityCriminalRelationship.map(fcr => {
            const matchingCriminalObj = criminals.find(criminal => criminal.id === fcr.criminalId)
            return matchingCriminalObj
        })
        return facilityHTML(facObj, relatedCriminalsArray)
    }).join("")
    contentTarget.innerHTML = `
    <h3>Facilities Information</h3>
    <section class="facilitiesList">
        ${facilitiesHTMLRepresentations}
    </section>`
}