const eventHub = document.querySelector(".container")

export const criminalHTML = (criminalObj, facilities) => {
    return `
        <div id="criminal-${criminalObj.id}" class="criminal__card">
            <h4 class="criminal__name">${criminalObj.name}</h4>
            <div class="criminal__details">
                <div class="criminal__age">Age: ${criminalObj.age}</div>
                <div class="criminal__conviction">Crime: ${criminalObj.conviction}</div>
                <div class="criminal__arrestingOfficer">Arresting Officer: ${criminalObj.arrestingOfficer}</div>
                <div class="criminal__incarceration">Incarcerated between ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')} and ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>
                <div class="criminal__facilities">
                <h5>Facilities</h5>
                <ul>
                ${facilities.map(fac => `<li>${fac.facilityName}</li>`).join("")}
                </ul>
                </div>
            </div>
            <button id="associates--${criminalObj.id}">Show Associates</button>
        </div>
    `
}

eventHub.addEventListener("click", eventObj => {  
const [prefix, id] = eventObj.target.id.split("--")
if (prefix === "associates") {
    // console.log("alibi button clicked", prefix, id)
    // console.log(eventObj)
    const eventInfo = new CustomEvent("assocBtnClicked", {
        detail: {
            criminalId: id
        }
    })
    // console.log(eventInfo)
    eventHub.dispatchEvent(eventInfo)
}
})