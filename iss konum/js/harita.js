import { veriCek } from "./api.js"
let map

function renderHarita(bilgi) {
    map = L.map("map").setView([bilgi.enlem, bilgi.boylam], 3);

    const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "",
    }).addTo(map);

}


function renderIsaretci(bilgi) {
    const marker = L.marker([bilgi.enlem, bilgi.boylam]).addTo(map);

    setInterval(async () => {
      const bilgi = await veriCek();
      marker.setLatLng([bilgi.enlem, bilgi.boylam]);
    }, 3000);
    
}

export {renderHarita, renderIsaretci}