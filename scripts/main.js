import { parkAreaServicesList } from "./parkAreaServices.js"
import { guestList } from "./Guests.js"

const parkAreaServicesHTML = parkAreaServicesList()
const guestListHTML = guestList()

const mainContainer= document.querySelector("#container")

const renderHTML = () => {
    let html = 
    `<header><h1>Cider Falls</h1>
    <img src="https://png.pngtree.com/png-vector/20221202/ourmid/pngtree-camp-logo-with-pine-trees-in-wilderness-logo-typography-explore-vector-png-image_41341718.jpg" alt="Cider Falls logo"></img></header>
    <div id="mainbody">${parkAreaServicesHTML}${guestListHTML}</div>
    <footer>
    <h2>Phone Number: 123-456-7890</h2>
    <h2>customercomplainttrashbin@ciderfalls.com</h2>
    <h2>420 Cider Falls Way</h2>
    </footer>`
    return html
}

let applicationHTML = renderHTML()

mainContainer.innerHTML = applicationHTML