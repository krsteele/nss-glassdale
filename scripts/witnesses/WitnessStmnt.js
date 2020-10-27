export const witnessHTML = (witnessObj) => {
    return `
        <div id="witness-${witnessObj.id}" class="witness__card">
            <div class="witness__name">${witnessObj.name}</div>
            <div class="witness__age">${witnessObj.statements}</div>
        </div>
    `
}