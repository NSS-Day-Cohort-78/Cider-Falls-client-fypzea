import { servicesArray } from "./database.js";
import { parkAreaServicesArray } from "./database.js";
import { parkAreasArray } from "./database.js";

const services = servicesArray()
const junctionTable = parkAreaServicesArray()
const areas = parkAreasArray()

document.addEventListener(
    "click",
    (clickEvent) => {
        const serviceTarget = clickEvent.target
        if(serviceTarget.dataset.type === "service") {
        const newJunctionTable = junctionTable.filter((object) => {return object.serviceId === parseInt(serviceTarget.dataset.id)})
        for (const object of newJunctionTable) {
            if (object.parkAreaId === 1 ) {
                object.areaName = "Chamfort River"
            }

            if (object.parkAreaId === 2 ) {
                object.areaName = "Lost Wolf Hiking Trail"
            }
            if (object.parkAreaId === 3 ) {
                object.areaName = "Lodge"
            }
            if (object.parkAreaId === 4 ) {
                object.areaName = "Hotel"
            }
            if (object.parkAreaId === 5 ) {
                object.areaName = "Restaurant"
            }
            if (object.parkAreaId === 6 ) {
                object.areaName = "Gander River"
            }
            if (object.parkAreaId === 7 ) {
                object.areaName = "Campgrounds"
            }
            if (object.parkAreaId === 8 ) {
                object.areaName = "Office Park"
            }
            if (object.parkAreaId === 9 ) {
                object.areaName = "Children Play Areas"
            }
            if (object.parkAreaId === 10 ) {
                object.areaName = "Pine Bluff Beginner Trail"
            }
            if (object.parkAreaId === 11 ) {
                object.areaName = "Pine Bluff Intermediate Trail"
            }
            if (object.parkAreaId === 12 ) {
                object.areaName = "Pine Bluff Advanced Trail"
            }
        }
        let junctionTableString = newJunctionTable.map((object) => {
            return `${object.areaName}`
        })
        junctionTableString = junctionTableString.join(" and ")
        window.alert(`${serviceTarget.dataset.name} is available in ${junctionTableString}`)
        }
      }
)
    
export const servicesList = () => {
    let html = "<h2>Services</h2>"

    let servicesHTML = services.map((service) => {
        return `<p data-id=${service.id} data-name="${service.name}" data-type="service">${service.name}</p>`
    })

    servicesHTML = servicesHTML.join("")
    html += servicesHTML
    return html
}


// Need junction table
// Match the id of the service clicked to the serviceId in the junction table
// Use the parkAreaId in that object, add a parkAreaName property to it matching the parkAreaId, use that name

//.filter?


