import { getOfficers, useOfficers } from "./OfficerDataProvider"
import { OfficerHTML } from "./OfficerHTML"

const officersContainer = document.querySelector(".officersContainer")

export const OfficerList = () => {
    getOfficers()
        .then(() => {
            const officerArray = useOfficers()

            const officerHTMLRepresentations = ""

            for (const officer of officerArray) {
                officerHTMLRepresentations =+ OfficerHTML(officer)

                officersContainer.innerHTML = `
                <h3>Glassdale Police Officers</h3>
                <section class="officersList">
                    ${officerHTMLRepresentations}
                </section>
                `
            }
        }
    )
}