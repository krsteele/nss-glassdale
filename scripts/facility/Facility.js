export const facilityHTML = (facility, relatedCriminals) => {
    return `
        <div class="facility__card" id="facility--${facility.id}">
            <h3>${facility.facilityName}</h3>
            <p>Security: ${facility.securityLevel}</p>
            <p>Capacity: ${facility.capacity}</p>
            <h5>Criminals</h5>
            <ul>
                ${relatedCriminals.map(rc => `<li>${rc.name}</li>`).join("")}
            </ul>
        </div>
    `
}