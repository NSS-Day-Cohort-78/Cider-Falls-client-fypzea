import {
  servicesArray,
  parkAreaServicesArray,
  parkAreasArray,
} from "./database.js";

const parkAreaServices = parkAreaServicesArray();
const areas = parkAreasArray();
const services = servicesArray();

export const parkAreaServicesList = () => {
  let parkAreaServicesHeader = "<h2>Park Area Services</h2>";
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

    let parkAreaServicesHeaderHtml = `<section data-type="area" data-section="${area.section}"><h2>${area.name}</h2>`;
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

    let parkAreaServicesHeaderHtml = `<section data-type="area" data-section="${area.section}"><h2>${area.name}</h2>`;
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

    let parkAreaServicesHeaderHtml = `<section data-type="area" data-section="${area.section}"><h2>${area.name}</h2>`;
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

    let parkAreaServicesHeaderHtml = `<section data-type="area" data-section="${area.section}"><h2>${area.name}</h2>`;
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

    let parkAreaServicesHeaderHtml = `<section data-type="area" data-section="${area.section}"><h2>${area.name}</h2>`;
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

    let parkAreaServicesHeaderHtml = `<section data-type="area" data-section="${area.section}"><h2>${area.name}</h2>`;
    let parkAreaServiceHtml = newParkAreaArray.map((parkArea) => {
      return `<div>${parkArea.serviceName}</div>`;
    });
    parkAreaServiceHtml = parkAreaServiceHtml.join("");
    parkAreaServiceHtml += "</section>";
    let html = parkAreaServicesHeaderHtml + parkAreaServiceHtml;
    parkAreaServicesHeader += html;
  }
  parkAreaServicesHeader += `</article>`
  return parkAreaServicesHeader;
};