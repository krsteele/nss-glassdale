const eventHub = document.querySelector(".container")

export const criminalHTML = (criminalObj) => {
    return `
        <div class="criminal__card">
            <div class="criminal__name">${criminalObj.name}</div>
            <div class="criminal__age">Age: ${criminalObj.age}</div>
            <div class="criminal__conviction">Crime: ${criminalObj.conviction}</div>
            <div class="criminal__termStart">Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</div>
            <div class="criminal__termEnd">Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>
            <button id="associates--${criminalObj.id}">Associate Alibis</button>
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
    eventHub.dispatchEvent(eventInfo)
}
})