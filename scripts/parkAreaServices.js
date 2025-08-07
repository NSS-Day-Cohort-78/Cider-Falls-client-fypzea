import {
  servicesArray,
  parkAreaServicesArray,
  parkAreasArray,
  guestsArray,
} from "./database.js";
import { servicesList } from "./Services.js";

const parkAreaServices = parkAreaServicesArray();
const areas = parkAreasArray();
const services = servicesArray();
const guests = guestsArray();
const servicesListHTML = servicesList();

document.addEventListener(
    "click",
    (clickEvent) => {
        const parkAreaTarget = clickEvent.target
        if(parkAreaTarget.dataset.type === "areaname") {
          let guestCount = 0              
          for (const guest of guests) {
            if (guest.parkAreaId === parseInt(parkAreaTarget.dataset.id)){
                guestCount += 1
              }
            }
            window.alert(`${parkAreaTarget.dataset.name} has ${guestCount} guests.`)          
        }
      }
    )
    
        

export const parkAreaServicesList = () => {
  let parkAreaServicesHeader = `<div id="parkareabody"><h2>Park Area Services</h2><div id="services">${servicesListHTML}</div>`
  const northEastSection = areas.filter((area) => {
    return area.section === "northeast";
  });
  const northernSection = areas.filter((area) => {
    return area.section === "northern";
  });
  const northWestSection = areas.filter((area) => {
    return area.section === "northwest";
  });
  const southEastSection = areas.filter((area) => {
    return area.section === "southeast";
  });
  const southernSection = areas.filter((area) => {
    return area.section === "southern";
  });
  const southWestSection = areas.filter((area) => {
    return area.section === "southwest";
  });
  parkAreaServicesHeader += `<article>`
  for (const area of northWestSection) {
    const newParkAreaArray = parkAreaServices.filter((service) => {
      return service.parkAreaId === area.id;
    });
    for (const object of newParkAreaArray) {
      if (object.parkAreaId === area.id) {
        object.areaName = area.name;
      }
    }
    for (const service of services) {
      for (const object of newParkAreaArray)
        if (object.serviceId === service.id) {
          object.serviceName = service.name;
        }
    }

    let parkAreaServicesHeaderHtml = `<section data-section="${area.section}"><h2 data-id="${area.id}" data-type="areaname" data-name="${area.name}">${area.name}</h2>`;
    let parkAreaServiceHtml = newParkAreaArray.map((parkArea) => {
      return `<div>${parkArea.serviceName}</div>`;
    });
    parkAreaServiceHtml = parkAreaServiceHtml.join("");
    parkAreaServiceHtml += "</section>";
    let html = parkAreaServicesHeaderHtml + parkAreaServiceHtml;
    parkAreaServicesHeader += html;
  }
  parkAreaServicesHeader += `</article>`
  parkAreaServicesHeader += `<article>`
  for (const area of northernSection) {
    const newParkAreaArray = parkAreaServices.filter((service) => {
      return service.parkAreaId === area.id;
    });
    for (const object of newParkAreaArray) {
      if (object.parkAreaId === area.id) {
        object.areaName = area.name;
      }
    }
    for (const service of services) {
      for (const object of newParkAreaArray)
        if (object.serviceId === service.id) {
          object.serviceName = service.name;
        }
    }

    let parkAreaServicesHeaderHtml = `<section data-section="${area.section}"><h2 data-id="${area.id}" data-type="areaname" data-name="${area.name}">${area.name}</h2>`;
    let parkAreaServiceHtml = newParkAreaArray.map((parkArea) => {
      return `<div>${parkArea.serviceName}</div>`;
    });
    parkAreaServiceHtml = parkAreaServiceHtml.join("");
    parkAreaServiceHtml += "</section>";
    let html = parkAreaServicesHeaderHtml + parkAreaServiceHtml;
    parkAreaServicesHeader += html;
  }
  parkAreaServicesHeader += `</article>`
  parkAreaServicesHeader += `<article>`
  for (const area of northEastSection) {
    const newParkAreaArray = parkAreaServices.filter((service) => {
      return service.parkAreaId === area.id;
    });
    for (const object of newParkAreaArray) {
      if (object.parkAreaId === area.id) {
        object.areaName = area.name;
      }
    }
    for (const service of services) {
      for (const object of newParkAreaArray)
        if (object.serviceId === service.id) {
          object.serviceName = service.name;
        }
    }

    let parkAreaServicesHeaderHtml = `<section data-section="${area.section}"><h2 data-id="${area.id}" data-type="areaname" data-name="${area.name}">${area.name}</h2>`;
    let parkAreaServiceHtml = newParkAreaArray.map((parkArea) => {
      return `<div>${parkArea.serviceName}</div>`;
    });
    parkAreaServiceHtml = parkAreaServiceHtml.join("");
    parkAreaServiceHtml += "</section>";
    let html = parkAreaServicesHeaderHtml + parkAreaServiceHtml;
    parkAreaServicesHeader += html;
  }
  parkAreaServicesHeader += `</article>`
  parkAreaServicesHeader += `<article>`
  for (const area of southWestSection) {
    const newParkAreaArray = parkAreaServices.filter((service) => {
      return service.parkAreaId === area.id;
    });
    for (const object of newParkAreaArray) {
      if (object.parkAreaId === area.id) {
        object.areaName = area.name;
      }
    }
    for (const service of services) {
      for (const object of newParkAreaArray)
        if (object.serviceId === service.id) {
          object.serviceName = service.name;
        }
    }

    let parkAreaServicesHeaderHtml = `<section data-section="${area.section}"><h2 data-id="${area.id}" data-type="areaname" data-name="${area.name}">${area.name}</h2>`;
    let parkAreaServiceHtml = newParkAreaArray.map((parkArea) => {
      return `<div>${parkArea.serviceName}</div>`;
    });
    parkAreaServiceHtml = parkAreaServiceHtml.join("");
    parkAreaServiceHtml += "</section>";
    let html = parkAreaServicesHeaderHtml + parkAreaServiceHtml;
    parkAreaServicesHeader += html;
  }
  parkAreaServicesHeader += `</article>`
  parkAreaServicesHeader += `<article>`
  for (const area of southernSection) {
    const newParkAreaArray = parkAreaServices.filter((service) => {
      return service.parkAreaId === area.id;
    });
    for (const object of newParkAreaArray) {
      if (object.parkAreaId === area.id) {
        object.areaName = area.name;
      }
    }
    for (const service of services) {
      for (const object of newParkAreaArray)
        if (object.serviceId === service.id) {
          object.serviceName = service.name;
        }
    }

    let parkAreaServicesHeaderHtml = `<section data-section="${area.section}"><h2 data-id="${area.id}" data-type="areaname" data-name="${area.name}">${area.name}</h2>`;
    let parkAreaServiceHtml = newParkAreaArray.map((parkArea) => {
      return `<div>${parkArea.serviceName}</div>`;
    });
    parkAreaServiceHtml = parkAreaServiceHtml.join("");
    parkAreaServiceHtml += "</section>";
    let html = parkAreaServicesHeaderHtml + parkAreaServiceHtml;
    parkAreaServicesHeader += html;
  }
  parkAreaServicesHeader += `</article>`
  parkAreaServicesHeader += `<article>`
  for (const area of southEastSection) {
    const newParkAreaArray = parkAreaServices.filter((service) => {
      return service.parkAreaId === area.id;
    });
    for (const object of newParkAreaArray) {
      if (object.parkAreaId === area.id) {
        object.areaName = area.name;
      }
    }
    for (const service of services) {
      for (const object of newParkAreaArray)
        if (object.serviceId === service.id) {
          object.serviceName = service.name;
        }
    }

    let parkAreaServicesHeaderHtml = `<section data-section="${area.section}"><h2 data-id="${area.id}" data-type="areaname" data-name="${area.name}">${area.name}</h2>`;
    let parkAreaServiceHtml = newParkAreaArray.map((parkArea) => {
      return `<div>${parkArea.serviceName}</div>`;
    });
    parkAreaServiceHtml = parkAreaServiceHtml.join("");
    parkAreaServiceHtml += "</section>";
    let html = parkAreaServicesHeaderHtml + parkAreaServiceHtml;
    parkAreaServicesHeader += html;
  }
  parkAreaServicesHeader += `</article></div>`
  return parkAreaServicesHeader;
};