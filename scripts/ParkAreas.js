import { parkAreasArray } from "./database.js"

export const parkAreasList = () => {
    const parkAreas = parkAreasArray()
    let parkAreasHTML = "<ul>"
    
    for (const parkArea of parkAreas) {
        parkAreasHTML += `<li data-id="${parkArea.id}"data-parkInformation="${parkArea.parkInformation}">${parkArea.name}</li>`
    }
   
    parkAreasHTML += "</ul>"
   return parkAreasHTML
}