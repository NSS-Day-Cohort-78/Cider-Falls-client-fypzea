import { parkInformation } from ".ParkInformation.js"

const applicationHTML = parkInformation()

const mainContainer= document.querySelector("#container")

mainContainer.innerHTML = applicationHTML